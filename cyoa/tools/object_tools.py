import csv
import importlib
import re
from dataclasses import field
from io import StringIO
import json
from pathlib import Path
from typing import OrderedDict

import yaml
from rich.table import Table

from cyoa.ops.common import find_first, find_first_index, gen_id
from cyoa.ops.layout import distribute_objects
from cyoa.ops.objects import (
    list_objects, copy_objects_from_row, remove_objects_from_row,
    insert_objects_in_row
)
from cyoa.ops.rows import redistribute_to_rows
from cyoa.tools.lib import ToolBase, ProjectUtilsMixin, console
from cyoa.tools.sort import SortContext, make_sort_key


class ObjectListTool(ToolBase, ProjectUtilsMixin):
    name = 'object.list'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='List all objects in a row')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str, required=True)
        parser.add_argument('--csv', action='store_true')

    def run(self, args):
        self._load_project(args.project_file)

        try:
            entries = list_objects(self.project, args.row_id)
        except KeyError as exc:
            console.print(str(exc), style="red")
            return

        if args.csv:
            # Build CSV header from point types
            point_types = []
            for point_type in self.project['pointTypes']:
                point_types.append(point_type['name'] + ' Sign')
                point_types.append(point_type['name'] + ' Value')

            str_io = StringIO()
            csv_file = csv.DictWriter(str_io, fieldnames=('index', 'object_id', 'title', *point_types))
            csv_file.writeheader()

            for entry in entries:
                scores = {}
                for pt_name, score_info in entry.scores.items():
                    scores[pt_name + ' Value'] = str(score_info.value)
                    scores[pt_name + ' Sign'] = score_info.sign

                csv_file.writerow({
                    'index': entry.index,
                    'object_id': entry.object_id,
                    'title': entry.title,
                    **scores
                })

            print(str_io.getvalue())
        else:
            table = Table('Idx', 'ID', 'Title')
            for entry in entries:
                table.add_row(str(entry.index), entry.object_id, entry.title)

            console.print(table)


class ObjectCopyTool(ToolBase, ProjectUtilsMixin):
    name = 'object.copy'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Copy objects from a row into a file')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)

        parser.add_argument('--from-row-id', type=str, required=True)
        parser.add_argument('--obj-id', dest='object_ids', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--obj-range', dest='object_ranges', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--obj-all', dest='object_all', action='store_true')

        parser.add_argument('--dest-row-id', type=str)
        parser.add_argument('--dest-after-idx', type=int)
        parser.add_argument('--dest-after-obj', type=str)

        parser.add_argument('--output', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        from_row_data = find_first(self.project['rows'],
                                   lambda row: row['id'] == args.from_row_id)

        objects_data = copy_objects_from_row(from_row_data,
                                             object_ids=args.object_ids,
                                             object_ranges=args.object_ranges,
                                             object_all=args.object_all)

        if args.dest_row_id is not None:
            dest_row_data = find_first(self.project['rows'],
                                       lambda row: row['id'] == args.dest_row_id)

            paste_objects_data = [
                object_data | {'id': gen_id()}
                for object_data in objects_data
            ]

            insert_objects_in_row(dest_row_data,
                                  paste_objects_data,
                                  after_idx=args.dest_after_idx,
                                  after_obj=args.dest_after_obj)

            self._save_project(args.project_file)

        if args.output is not None:
            with args.output.open(mode='w+') as fd:
                json.dump(objects_data, fd, indent=2)


class ObjectCutTool(ToolBase, ProjectUtilsMixin):
    name = 'object.cut'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Remove/Cut objects from a row')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str, required=True)
        parser.add_argument('--obj-id', dest='object_ids', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--obj-range', dest='object_ranges', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--output', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == args.row_id)

        objects_data = copy_objects_from_row(row_data,
                                             object_ids=args.object_ids,
                                             object_ranges=args.object_ranges)
        remove_objects_from_row(row_data,
                                object_ids=args.object_ids,
                                object_ranges=args.object_ranges)

        if args.output is not None:
            with args.output.open(mode='w+') as fd:
                json.dump(objects_data, fd, indent=2)

        self._save_project(args.project_file)


class ObjectMoveTool(ToolBase, ProjectUtilsMixin):
    name = 'object.move'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Move objects between rows')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--from-row', type=str, required=True)
        parser.add_argument('--dest-row', type=str, required=True)
        parser.add_argument('--dest-after-idx', type=int)
        parser.add_argument('--dest-after-obj', type=str)
        parser.add_argument('--obj-id', dest='object_ids', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--obj-range', dest='object_ranges', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--obj-all', dest='object_all', action='store_true')

    def run(self, args):
        self._load_project(args.project_file)

        if (args.object_all is False and 
            len(args.object_ids) == 0 and
            len(args.object_ranges) == 0):
            console.print("Missing --obj-id or --obj-all", style="red")
            return

        from_row_data = find_first(self.project['rows'],
                                   lambda row: row['id'] == args.from_row)
        dest_row_data = find_first(self.project['rows'],
                                   lambda row: row['id'] == args.dest_row)

        console.print(f"Moving {str.join(' ', args.object_ids)}")
        # Move the objects into a temporary list
        objects_data = copy_objects_from_row(from_row_data,
                                             object_ids=args.object_ids,
                                             object_all=args.object_all,
                                             object_ranges=args.object_ranges)
        remove_objects_from_row(from_row_data,
                                object_ids=args.object_ids,
                                object_all=args.object_all,
                                object_ranges=args.object_ranges)

        # Insert the object into the destination row
        insert_objects_in_row(dest_row_data, objects_data,
                              after_idx=args.dest_after_idx,
                              after_obj=args.dest_after_obj)

        self._save_project(args.project_file)


class ObjectAddTool(ToolBase, ProjectUtilsMixin):
    name = 'object.add'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Add objects to a row')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str, required=True)
        parser.add_argument('--after-idx', type=int)
        parser.add_argument('--after-obj', type=str)
        parser.add_argument('--regen-ids', action='store_true')
        parser.add_argument('--data', type=Path, required=True)

    def run(self, args):
        self._load_project(args.project_file)

        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == args.row_id)
        if row_data is None:
            console.print(f"Row {args.row_id!r} not found", style="red")
            return

        insert_data = self._load_file(args.data)
        if not isinstance(insert_data, (list, tuple)):
            insert_data = [insert_data]

        if args.regen_ids:
            console.print("Generating new IDs")
            insert_data = [
                object_data | {'id': gen_id()}
                for object_data in insert_data
            ]

        insert_objects_in_row(row_data, insert_data,
                              after_idx=args.after_idx,
                              after_obj=args.after_obj)

        self._save_project(args.project_file)


class ObjectsSortTool(ToolBase, ProjectUtilsMixin):
    name = 'objects.sort'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Sort objects in a row using a comparator function')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str)
        parser.add_argument('--row-ids', type=str, nargs='+',
                            help='Row IDs for composite (multi-row) sort')
        parser.add_argument('--max-objects', type=int,
                            help='Max objects per row (required with --row-ids)')
        parser.add_argument('--rule', type=str,
                            help='Comparator as module:function (e.g. cyoa.sort:lexicographic)')
        parser.add_argument('--config', dest='config_file', type=Path,
                            help='YAML config file with multiple sort entries')
        parser.add_argument('--dry-run', action='store_true',
                            help='Preview sorted order without saving')
        parser.add_argument('--lint', action='store_true',
                            help='Check that current order matches sorted order')
        parser.add_argument('--arg', dest='sort_args', action='append', default=[],
                            metavar='KEY=VAL',
                            help='Arbitrary key=value arguments passed to the comparator')
        parser.add_argument('--interval', dest='intervals', type=str,
                            action='append', default=[],
                            help='BEFORE:AFTER interval to sort (exclusive, * = unbounded). Repeatable.')

    @staticmethod
    def _parse_interval(objects, interval):
        """Parse "BEFORE:AFTER" into (start, end) indices for slicing.

        Boundaries are exclusive. Returns the half-open range [start, end)
        of the sortable region within *objects*.
        """
        parts = interval.split(':', 1)
        if len(parts) != 2:
            raise ValueError(f"Invalid interval syntax {interval!r}, "
                             f"expected BEFORE:AFTER")
        before_id, after_id = parts

        if before_id == '*':
            start = 0
        else:
            idx = next((i for i, o in enumerate(objects)
                        if o['id'] == before_id), None)
            if idx is None:
                raise ValueError(
                    f"Interval boundary {before_id!r} not found in objects")
            start = idx + 1

        if after_id == '*':
            end = len(objects)
        else:
            idx = next((i for i, o in enumerate(objects)
                        if o['id'] == after_id), None)
            if idx is None:
                raise ValueError(
                    f"Interval boundary {after_id!r} not found in objects")
            end = idx

        if start > end:
            raise ValueError(
                f"Invalid interval {interval!r}: start ({start}) > end ({end})")
        return (start, end)

    @staticmethod
    def _apply_intervals(objects, ranges, sort_key):
        """Sort objects within each range independently, return new list.

        *ranges* is a list of (start, end) half-open intervals, assumed
        non-overlapping and sorted by start.  Objects outside ranges are
        unchanged.
        """
        result = []
        prev_end = 0
        for start, end in ranges:
            # Unsorted gap before this range
            result.extend(objects[prev_end:start])
            # Sorted slice
            result.extend(sorted(objects[start:end], key=sort_key))
            prev_end = end
        # Unsorted tail
        result.extend(objects[prev_end:])
        return result

    def _load_comparator(self, rule):
        module_name, func_name = str.split(rule, ':', maxsplit=2)
        try:
            module_inst = importlib.import_module(module_name)
        except Exception:
            console.log(f"Cannot load [b cyan]{module_name}[/]")
            console.print_exception()
            return None

        comparator = getattr(module_inst, func_name, None)
        if comparator is None or not callable(comparator):
            console.print(
                f"Cannot find callable [b][cyan]{module_name}[/].[red]{func_name}[/][/]",
                style="red",
            )
            return None

        console.log(f"Sorting with [b][cyan]{module_name}[/].[magenta]{func_name}[/][/]")
        return comparator

    def _resolve_intervals(self, objects, intervals):
        """Parse interval strings and return sorted, validated ranges."""
        ranges = [self._parse_interval(objects, iv) for iv in intervals]
        ranges.sort()
        for i in range(1, len(ranges)):
            if ranges[i][0] < ranges[i - 1][1]:
                raise ValueError(
                    f"Overlapping intervals: indices {ranges[i - 1]} "
                    f"and {ranges[i]}")
        return ranges

    def _sort_row(self, row_id, rule, sort_args, context, dry_run, lint,
                  intervals=None):
        """Sort a single row. Returns True if lint passed (or not linting)."""
        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == row_id)
        if row_data is None:
            console.print(f"Row [b]{row_id}[/] not found", style="red")
            return False

        comparator = self._load_comparator(rule)
        if comparator is None:
            return False

        sort_key = make_sort_key(comparator, row_data, context, args=sort_args)

        if intervals:
            ranges = self._resolve_intervals(row_data['objects'], intervals)

            if lint:
                all_ok = True
                for start, end in ranges:
                    segment = row_data['objects'][start:end]
                    original_ids = [obj['id'] for obj in segment]
                    sorted_segment = sorted(segment, key=sort_key)
                    sorted_ids = [obj['id'] for obj in sorted_segment]
                    if original_ids != sorted_ids:
                        all_ok = False
                        console.print(
                            f"Row [b]{row_id}[/] interval [{start}:{end}] "
                            f"is NOT correctly sorted", style="red")
                        table = Table('Idx', 'Current', '', 'Expected')
                        for idx, (cur, exp) in enumerate(
                                zip(segment, sorted_segment)):
                            marker = ('[red]*[/]'
                                      if cur['id'] != exp['id'] else ' ')
                            table.add_row(str(start + idx), cur['title'],
                                          marker, exp['title'])
                        console.print(table)
                if all_ok:
                    console.print(
                        f"Row [b]{row_id}[/] intervals are correctly sorted",
                        style="green")
                return all_ok

            row_data['objects'] = self._apply_intervals(
                row_data['objects'], ranges, sort_key)

            if dry_run:
                table = Table('Idx', 'ID', 'Title')
                for idx, obj in enumerate(row_data['objects']):
                    table.add_row(str(idx), obj['id'], obj['title'])
                console.print(table)

            return True

        if lint:
            original_ids = [obj['id'] for obj in row_data['objects']]
            sorted_objects = sorted(row_data['objects'], key=sort_key)
            sorted_ids = [obj['id'] for obj in sorted_objects]

            if original_ids == sorted_ids:
                console.print(f"Row [b]{row_id}[/] is correctly sorted", style="green")
                return True
            else:
                console.print(f"Row [b]{row_id}[/] is NOT correctly sorted", style="red")
                table = Table('Idx', 'Current', '', 'Expected')
                for idx, (cur, exp) in enumerate(zip(row_data['objects'], sorted_objects)):
                    marker = '[red]*[/]' if cur['id'] != exp['id'] else ' '
                    table.add_row(str(idx), cur['title'], marker, exp['title'])
                console.print(table)
                return False

        row_data['objects'].sort(key=sort_key)

        if dry_run:
            table = Table('Idx', 'ID', 'Title')
            for idx, obj in enumerate(row_data['objects']):
                table.add_row(str(idx), obj['id'], obj['title'])
            console.print(table)

        return True

    def _sort_composite_rows(self, row_ids, max_objects, rule, sort_args,
                             context, dry_run, lint, title=None,
                             intervals=None):
        """Sort objects across multiple rows, then redistribute."""
        # Resolve all rows; fail fast if any missing
        rows = []
        for row_id in row_ids:
            row = find_first(self.project['rows'],
                             lambda r, rid=row_id: r['id'] == rid)
            if row is None:
                console.print(f"Row [b]{row_id}[/] not found", style="red")
                return False
            rows.append(row)

        template_row = rows[0]
        row_default_width = template_row.get('objectWidth', '')

        # Derive title from template row, stripping " (Page N)" suffix
        if title is None:
            title = re.sub(r'\s*\(Page \d+\)$', '', template_row.get('title', ''))

        # Pool all objects from all rows in order
        all_objects = []
        for row in rows:
            all_objects.extend(row['objects'])

        if not all_objects:
            console.print("No objects in composite group", style="yellow")
            return True

        comparator = self._load_comparator(rule)
        if comparator is None:
            return False

        sort_key = make_sort_key(comparator, template_row, context,
                                 args=sort_args, rows=rows)

        if intervals:
            ranges = self._resolve_intervals(all_objects, intervals)

            if lint:
                all_ok = True
                for start, end in ranges:
                    segment = all_objects[start:end]
                    original_ids = [obj['id'] for obj in segment]
                    sorted_segment = sorted(segment, key=sort_key)
                    sorted_ids = [obj['id'] for obj in sorted_segment]
                    if original_ids != sorted_ids:
                        all_ok = False
                        console.print(
                            f"Composite group [b]{title}[/] interval "
                            f"[{start}:{end}] is NOT correctly sorted",
                            style="red")
                        table = Table('Idx', 'Current', '', 'Expected')
                        for idx, (cur, exp) in enumerate(
                                zip(segment, sorted_segment)):
                            marker = ('[red]*[/]'
                                      if cur['id'] != exp['id'] else ' ')
                            table.add_row(str(start + idx), cur['title'],
                                          marker, exp['title'])
                        console.print(table)
                if all_ok:
                    console.print(
                        f"Composite group [b]{title}[/] intervals are "
                        f"correctly sorted", style="green")
                return all_ok

            sorted_objects = self._apply_intervals(
                all_objects, ranges, sort_key)
            pages = distribute_objects(sorted_objects, max_objects,
                                       row_default_width)

            if dry_run:
                for page_idx, page_objects in enumerate(pages):
                    console.rule(f"Page {page_idx + 1}")
                    table = Table('Idx', 'ID', 'Title')
                    for idx, obj in enumerate(page_objects):
                        table.add_row(str(idx), obj['id'], obj['title'])
                    console.print(table)
                return True

            result = redistribute_to_rows(self.project, row_ids, pages, title,
                                         template_row)
            if result.rows_removed:
                console.print(f"Removed {len(result.rows_removed)} excess row(s)")
            if result.rows_created:
                for row_id in result.rows_created:
                    console.print(f"Created new row {row_id}")
            for row in result.assigned_rows:
                console.print(f"  {row['id']}: {row['title']} — {len(row['objects'])} objects")
            return True

        if lint:
            original_ids = [obj['id'] for obj in all_objects]
            sorted_objects = sorted(all_objects, key=sort_key)
            sorted_ids = [obj['id'] for obj in sorted_objects]

            if original_ids == sorted_ids:
                console.print(
                    f"Composite group [b]{title}[/] is correctly sorted",
                    style="green")
                return True
            else:
                console.print(
                    f"Composite group [b]{title}[/] is NOT correctly sorted",
                    style="red")
                table = Table('Idx', 'Current', '', 'Expected')
                for idx, (cur, exp) in enumerate(
                        zip(all_objects, sorted_objects)):
                    marker = '[red]*[/]' if cur['id'] != exp['id'] else ' '
                    table.add_row(str(idx), cur['title'], marker, exp['title'])
                console.print(table)
                return False

        sorted_objects = sorted(all_objects, key=sort_key)
        pages = distribute_objects(sorted_objects, max_objects,
                                   row_default_width)

        if dry_run:
            for page_idx, page_objects in enumerate(pages):
                console.rule(f"Page {page_idx + 1}")
                table = Table('Idx', 'ID', 'Title')
                for idx, obj in enumerate(page_objects):
                    table.add_row(str(idx), obj['id'], obj['title'])
                console.print(table)
            return True

        result = redistribute_to_rows(self.project, row_ids, pages, title,
                                     template_row)
        if result.rows_removed:
            console.print(f"Removed {len(result.rows_removed)} excess row(s)")
        if result.rows_created:
            for row_id in result.rows_created:
                console.print(f"Created new row {row_id}")
        for row in result.assigned_rows:
            console.print(f"  {row['id']}: {row['title']} — {len(row['objects'])} objects")
        return True

    def run(self, args):
        has_row_id = getattr(args, 'row_id', None) is not None
        has_row_ids = getattr(args, 'row_ids', None) is not None

        if args.config_file is None:
            if has_row_id and has_row_ids:
                console.print("--row-id and --row-ids are mutually exclusive",
                              style="red")
                return
            if has_row_ids:
                if args.rule is None:
                    console.print("--rule is required with --row-ids",
                                  style="red")
                    return
                if getattr(args, 'max_objects', None) is None:
                    console.print("--max-objects is required with --row-ids",
                                  style="red")
                    return
            elif not has_row_id or args.rule is None:
                console.print(
                    "Either --config, --row-id + --rule, or "
                    "--row-ids + --max-objects + --rule are required",
                    style="red")
                return

        self._load_project(args.project_file)

        context = SortContext(
            project=self.project,
            point_types={pt['id']: pt for pt in self.project['pointTypes']},
            groups={g['id']: g for g in self.project['groups']},
        )

        if args.config_file is not None:
            with args.config_file.open() as fd:
                config = yaml.load(fd, Loader=yaml.FullLoader)

            all_passed = True
            for entry in config['sorts']:
                # Normalize interval/intervals from config
                entry_intervals = entry.get('intervals', [])
                if not entry_intervals:
                    single = entry.get('interval')
                    if single:
                        entry_intervals = [single]

                if 'row_ids' in entry:
                    ok = self._sort_composite_rows(
                        row_ids=entry['row_ids'],
                        max_objects=entry['max_objects'],
                        rule=entry['rule'],
                        sort_args=entry.get('args', {}),
                        context=context,
                        dry_run=args.dry_run,
                        lint=args.lint,
                        title=entry.get('title'),
                        intervals=entry_intervals or None,
                    )
                else:
                    ok = self._sort_row(
                        row_id=entry['row_id'],
                        rule=entry['rule'],
                        sort_args=entry.get('args', {}),
                        context=context,
                        dry_run=args.dry_run,
                        lint=args.lint,
                        intervals=entry_intervals or None,
                    )
                if not ok:
                    all_passed = False

            if args.lint:
                if not all_passed:
                    raise SystemExit(1)
                return

            if not args.dry_run:
                self._save_project(args.project_file)
                # Write config back (row_ids may have been mutated by
                # redistribute_to_rows adding/removing rows)
                with args.config_file.open('w') as fd:
                    yaml.dump(config, fd, default_flow_style=False,
                              sort_keys=False)
        else:
            sort_args = {}
            for item in args.sort_args:
                key, _, val = item.partition('=')
                sort_args[key] = val

            cli_intervals = args.intervals or None

            if has_row_ids:
                ok = self._sort_composite_rows(
                    row_ids=args.row_ids,
                    max_objects=args.max_objects,
                    rule=args.rule,
                    sort_args=sort_args,
                    context=context,
                    dry_run=args.dry_run,
                    lint=args.lint,
                    intervals=cli_intervals,
                )
            else:
                ok = self._sort_row(
                    row_id=args.row_id,
                    rule=args.rule,
                    sort_args=sort_args,
                    context=context,
                    dry_run=args.dry_run,
                    lint=args.lint,
                    intervals=cli_intervals,
                )

            if args.lint:
                if not ok:
                    raise SystemExit(1)
                return

            if not args.dry_run:
                self._save_project(args.project_file)


TOOLS = (
    ObjectListTool,
    ObjectCopyTool,
    ObjectCutTool,
    ObjectMoveTool,
    ObjectAddTool,
    ObjectsSortTool,
)
