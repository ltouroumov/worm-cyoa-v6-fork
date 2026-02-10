import csv
import importlib
from dataclasses import field
from io import StringIO
import json
from pathlib import Path
from typing import OrderedDict
from rich.table import Table

from cyoa.tools.lib import *
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

        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == args.row_id)

        if args.csv:
            point_types = []
            point_types_map = {}
            for point_type in self.project['pointTypes']:
                point_types.append(point_type['name'] + ' Sign')
                point_types.append(point_type['name'] + ' Value')
                point_types_map[point_type['id']] = point_type['name']

            str_io = StringIO()
            csv_file = csv.DictWriter(str_io, fieldnames=('index', 'object_id', 'title', *point_types))
            csv_file.writeheader()
            for idx, object_data in enumerate(row_data['objects']):
                scores = {}
                for score in object_data['scores']:
                    pt_name = point_types_map[score['id']]
                    
                    score_val = int(score['value'])
                    scores[pt_name + ' Value'] = f"{abs(score_val)}"
                    scores[pt_name + ' Sign'] = "Gain" if score_val < 0 else "Cost"

                csv_file.writerow({
                    'index': idx,
                    'object_id': object_data['id'],
                    'title': object_data['title'],
                    **scores
                })

            print(str_io.getvalue())
        else:
            table = Table('Idx', 'ID', 'Title')
            for idx, object_data in enumerate(row_data['objects']):
                table.add_row(str(idx), object_data['id'], object_data['title'])
            
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

        insert_data = self._load_file(args.data)
        if not isinstance(insert_data, (list, tuple)):
            insert_data = [insert_data]

        if args.regen_ids:
            console.print("Generating new IDs")
            insert_data = [
                object_data | {'id': gen_id()}
                for object_data in insert_data
            ]

        if args.after_idx:
            insert_index = args.after + 1
            row_data['objects'][insert_index:insert_index] = insert_data
        elif args.after_obj:
            insert_index = find_first_index(self.project['rows'],
                                            lambda row: row['id'] == args.row_id)
            row_data['objects'][insert_index:insert_index] = insert_data
        else:
            row_data['objects'].extend(insert_data)

        self._save_project(args.project_file)


class ObjectsSortTool(ToolBase, ProjectUtilsMixin):
    name = 'objects.sort'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Sort objects in a row using a comparator function')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str, required=True)
        parser.add_argument('--rule', type=str, required=True,
                            help='Comparator as module:function (e.g. cyoa.sort:lexicographic)')
        parser.add_argument('--dry-run', action='store_true',
                            help='Preview sorted order without saving')
        parser.add_argument('--lint', action='store_true',
                            help='Check that current order matches sorted order')
        parser.add_argument('--arg', dest='sort_args', action='append', default=[],
                            metavar='KEY=VAL',
                            help='Arbitrary key=value arguments passed to the comparator')

    def run(self, args):
        self._load_project(args.project_file)

        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == args.row_id)
        if row_data is None:
            console.print(f"Row [b]{args.row_id}[/] not found", style="red")
            return

        module_name, func_name = str.split(args.rule, ':', maxsplit=2)
        try:
            module_inst = importlib.import_module(module_name)
        except Exception:
            console.log(f"Cannot load [b cyan]{module_name}[/]")
            console.print_exception()
            return

        comparator = getattr(module_inst, func_name, None)
        if comparator is None or not callable(comparator):
            console.print(
                f"Cannot find callable [b][cyan]{module_name}[/].[red]{func_name}[/][/]",
                style="red",
            )
            return

        console.log(f"Sorting with [b][cyan]{module_name}[/].[magenta]{func_name}[/][/]")

        context = SortContext(
            project=self.project,
            point_types={pt['id']: pt for pt in self.project['pointTypes']},
            groups={g['id']: g for g in self.project['groups']},
        )

        sort_args = {}
        for item in args.sort_args:
            key, _, val = item.partition('=')
            sort_args[key] = val

        sort_key = make_sort_key(comparator, row_data, context, args=sort_args)

        if args.lint:
            original_ids = [obj['id'] for obj in row_data['objects']]
            sorted_objects = sorted(row_data['objects'], key=sort_key)
            sorted_ids = [obj['id'] for obj in sorted_objects]

            if original_ids == sorted_ids:
                console.print(f"Row [b]{args.row_id}[/] is correctly sorted", style="green")
            else:
                console.print(f"Row [b]{args.row_id}[/] is NOT correctly sorted", style="red")
                table = Table('Idx', 'Current', '', 'Expected')
                for idx, (cur, exp) in enumerate(zip(row_data['objects'], sorted_objects)):
                    marker = '[red]*[/]' if cur['id'] != exp['id'] else ' '
                    table.add_row(str(idx), cur['title'], marker, exp['title'])
                console.print(table)
                raise SystemExit(1)
            return

        row_data['objects'].sort(key=sort_key)

        if args.dry_run:
            table = Table('Idx', 'ID', 'Title')
            for idx, obj in enumerate(row_data['objects']):
                table.add_row(str(idx), obj['id'], obj['title'])
            console.print(table)
        else:
            self._save_project(args.project_file)


TOOLS = (
    ObjectListTool,
    ObjectCopyTool,
    ObjectCutTool,
    ObjectMoveTool,
    ObjectAddTool,
    ObjectsSortTool,
)
