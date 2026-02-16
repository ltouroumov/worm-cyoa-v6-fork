import csv
from io import StringIO
import json
from pathlib import Path

import yaml
from rich.table import Table

from cyoa.ops.common import find_first, gen_id
from cyoa.ops.objects import (
  list_objects,
  copy_objects_from_row,
  remove_objects_from_row,
  insert_objects_in_row,
)
from cyoa.ops.sort import SortContext, load_comparator, sort_row, sort_composite_rows
from cyoa.tools.lib import ToolBase, ProjectUtilsMixin, console


class ObjectListTool(ToolBase, ProjectUtilsMixin):
  name = "object.list"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="List all objects in a row")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--row-id", type=str, required=True)
    parser.add_argument("--csv", action="store_true")

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
      for point_type in self.project["pointTypes"]:
        point_types.append(point_type["name"] + " Sign")
        point_types.append(point_type["name"] + " Value")

      str_io = StringIO()
      csv_file = csv.DictWriter(
        str_io, fieldnames=("index", "object_id", "title", *point_types)
      )
      csv_file.writeheader()

      for entry in entries:
        scores = {}
        for pt_name, score_info in entry.scores.items():
          scores[pt_name + " Value"] = str(score_info.value)
          scores[pt_name + " Sign"] = score_info.sign

        csv_file.writerow(
          {
            "index": entry.index,
            "object_id": entry.object_id,
            "title": entry.title,
            **scores,
          }
        )

      print(str_io.getvalue())
    else:
      table = Table("Idx", "ID", "Title")
      for entry in entries:
        table.add_row(str(entry.index), entry.object_id, entry.title)

      console.print(table)


class ObjectCopyTool(ToolBase, ProjectUtilsMixin):
  name = "object.copy"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Copy objects from a row into a file")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)

    parser.add_argument("--from-row-id", type=str, required=True)
    parser.add_argument(
      "--obj-id",
      dest="object_ids",
      type=str,
      nargs="+",
      action="extend",
      default=[],
    )
    parser.add_argument(
      "--obj-range",
      dest="object_ranges",
      type=str,
      nargs="+",
      action="extend",
      default=[],
    )
    parser.add_argument("--obj-all", dest="object_all", action="store_true")

    parser.add_argument("--dest-row-id", type=str)
    parser.add_argument("--dest-after-idx", type=int)
    parser.add_argument("--dest-after-obj", type=str)

    parser.add_argument("--output", type=Path)

  def run(self, args):
    self._load_project(args.project_file)

    from_row_data = find_first(
      self.project["rows"], lambda row: row["id"] == args.from_row_id
    )

    objects_data = copy_objects_from_row(
      from_row_data,
      object_ids=args.object_ids,
      object_ranges=args.object_ranges,
      object_all=args.object_all,
    )

    if args.dest_row_id is not None:
      dest_row_data = find_first(
        self.project["rows"], lambda row: row["id"] == args.dest_row_id
      )

      paste_objects_data = [
        object_data | {"id": gen_id()} for object_data in objects_data
      ]

      insert_objects_in_row(
        dest_row_data,
        paste_objects_data,
        after_idx=args.dest_after_idx,
        after_obj=args.dest_after_obj,
      )

      self._save_project(args.project_file)

    if args.output is not None:
      with args.output.open(mode="w+") as fd:
        json.dump(objects_data, fd, indent=2)


class ObjectCutTool(ToolBase, ProjectUtilsMixin):
  name = "object.cut"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Remove/Cut objects from a row")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--row-id", type=str, required=True)
    parser.add_argument(
      "--obj-id",
      dest="object_ids",
      type=str,
      nargs="+",
      action="extend",
      default=[],
    )
    parser.add_argument(
      "--obj-range",
      dest="object_ranges",
      type=str,
      nargs="+",
      action="extend",
      default=[],
    )
    parser.add_argument("--output", type=Path)

  def run(self, args):
    self._load_project(args.project_file)

    row_data = find_first(self.project["rows"], lambda row: row["id"] == args.row_id)

    objects_data = copy_objects_from_row(
      row_data, object_ids=args.object_ids, object_ranges=args.object_ranges
    )
    remove_objects_from_row(
      row_data, object_ids=args.object_ids, object_ranges=args.object_ranges
    )

    if args.output is not None:
      with args.output.open(mode="w+") as fd:
        json.dump(objects_data, fd, indent=2)

    self._save_project(args.project_file)


class ObjectMoveTool(ToolBase, ProjectUtilsMixin):
  name = "object.move"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Move objects between rows")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--from-row", type=str, required=True)
    parser.add_argument("--dest-row", type=str, required=True)
    parser.add_argument("--dest-after-idx", type=int)
    parser.add_argument("--dest-after-obj", type=str)
    parser.add_argument(
      "--obj-id",
      dest="object_ids",
      type=str,
      nargs="+",
      action="extend",
      default=[],
    )
    parser.add_argument(
      "--obj-range",
      dest="object_ranges",
      type=str,
      nargs="+",
      action="extend",
      default=[],
    )
    parser.add_argument("--obj-all", dest="object_all", action="store_true")

  def run(self, args):
    self._load_project(args.project_file)

    if (
      args.object_all is False
      and len(args.object_ids) == 0
      and len(args.object_ranges) == 0
    ):
      console.print("Missing --obj-id or --obj-all", style="red")
      return

    from_row_data = find_first(
      self.project["rows"], lambda row: row["id"] == args.from_row
    )
    dest_row_data = find_first(
      self.project["rows"], lambda row: row["id"] == args.dest_row
    )

    console.print(f"Moving {str.join(' ', args.object_ids)}")
    # Move the objects into a temporary list
    objects_data = copy_objects_from_row(
      from_row_data,
      object_ids=args.object_ids,
      object_all=args.object_all,
      object_ranges=args.object_ranges,
    )
    remove_objects_from_row(
      from_row_data,
      object_ids=args.object_ids,
      object_all=args.object_all,
      object_ranges=args.object_ranges,
    )

    # Insert the object into the destination row
    insert_objects_in_row(
      dest_row_data,
      objects_data,
      after_idx=args.dest_after_idx,
      after_obj=args.dest_after_obj,
    )

    self._save_project(args.project_file)


class ObjectAddTool(ToolBase, ProjectUtilsMixin):
  name = "object.add"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Add objects to a row")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--row-id", type=str, required=True)
    parser.add_argument("--after-idx", type=int)
    parser.add_argument("--after-obj", type=str)
    parser.add_argument("--regen-ids", action="store_true")
    parser.add_argument("--data", type=Path, required=True)

  def run(self, args):
    self._load_project(args.project_file)

    row_data = find_first(self.project["rows"], lambda row: row["id"] == args.row_id)
    if row_data is None:
      console.print(f"Row {args.row_id!r} not found", style="red")
      return

    insert_data = self._load_file(args.data)
    if not isinstance(insert_data, (list, tuple)):
      insert_data = [insert_data]

    if args.regen_ids:
      console.print("Generating new IDs")
      insert_data = [object_data | {"id": gen_id()} for object_data in insert_data]

    insert_objects_in_row(
      row_data, insert_data, after_idx=args.after_idx, after_obj=args.after_obj
    )

    self._save_project(args.project_file)


class ObjectsSortTool(ToolBase, ProjectUtilsMixin):
  name = "objects.sort"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(
      cls.name, help="Sort objects in a row using a comparator function"
    )
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--row-id", type=str)
    parser.add_argument(
      "--row-ids",
      type=str,
      nargs="+",
      help="Row IDs for composite (multi-row) sort",
    )
    parser.add_argument(
      "--max-objects",
      type=int,
      help="Max objects per row (required with --row-ids)",
    )
    parser.add_argument(
      "--rule",
      type=str,
      help="Comparator as module:function (e.g. cyoa.sort:lexicographic)",
    )
    parser.add_argument(
      "--config",
      dest="config_file",
      type=Path,
      help="YAML config file with multiple sort entries",
    )
    parser.add_argument(
      "--dry-run", action="store_true", help="Preview sorted order without saving"
    )
    parser.add_argument(
      "--lint",
      action="store_true",
      help="Check that current order matches sorted order",
    )
    parser.add_argument(
      "--arg",
      dest="sort_args",
      action="append",
      default=[],
      metavar="KEY=VAL",
      help="Arbitrary key=value arguments passed to the comparator",
    )
    parser.add_argument(
      "--interval",
      dest="intervals",
      type=str,
      action="append",
      default=[],
      help="BEFORE:AFTER interval to sort (exclusive, * = unbounded). Repeatable.",
    )

  def _sort_row(self, row_id, rule, sort_args, context, dry_run, lint, intervals=None):
    """Sort a single row. Returns True if lint passed (or not linting)."""
    try:
      comparator = load_comparator(rule)
      console.log(f"Sorting with [b]{rule}[/]")
    except ValueError as exc:
      console.print(str(exc), style="red")
      return False

    try:
      result = sort_row(
        self.project,
        row_id,
        comparator,
        sort_args=sort_args,
        intervals=intervals,
        context=context,
      )
    except (KeyError, ValueError) as exc:
      console.print(str(exc), style="red")
      return False

    if lint:
      if result.is_sorted:
        console.print(f"Row [b]{row_id}[/] is correctly sorted", style="green")
      else:
        console.print(f"Row [b]{row_id}[/] is NOT correctly sorted", style="red")
        table = Table("Idx", "Current", "", "Expected")
        for diff in result.lint_diffs:
          marker = "[red]*[/]" if not diff.matches else " "
          table.add_row(
            str(diff.index), diff.current_title, marker, diff.expected_title
          )
        console.print(table)
      return result.is_sorted

    # Apply the sort
    row_data = find_first(self.project["rows"], lambda r: r["id"] == row_id)
    row_data["objects"] = result.sorted_objects

    if dry_run:
      table = Table("Idx", "ID", "Title")
      for idx, obj in enumerate(result.sorted_objects):
        table.add_row(str(idx), obj["id"], obj["title"])
      console.print(table)

    return True

  def _sort_composite_rows(
    self,
    row_ids,
    max_objects,
    rule,
    sort_args,
    context,
    dry_run,
    lint,
    title=None,
    intervals=None,
  ):
    """Sort objects across multiple rows, then redistribute."""
    try:
      comparator = load_comparator(rule)
      console.log(f"Sorting with [b]{rule}[/]")
    except ValueError as exc:
      console.print(str(exc), style="red")
      return False

    try:
      result = sort_composite_rows(
        self.project,
        row_ids,
        max_objects,
        comparator,
        sort_args=sort_args,
        intervals=intervals,
        context=context,
        title=title,
        apply_changes=(not dry_run and not lint),
      )
    except (KeyError, ValueError) as exc:
      console.print(str(exc), style="red")
      return False

    if not result.sorted_objects:
      console.print("No objects in composite group", style="yellow")
      return True

    if lint:
      if result.is_sorted:
        console.print(
          f"Composite group [b]{result.title}[/] is correctly sorted",
          style="green",
        )
      else:
        console.print(
          f"Composite group [b]{result.title}[/] is NOT correctly sorted",
          style="red",
        )
        table = Table("Idx", "Current", "", "Expected")
        for diff in result.lint_diffs:
          marker = "[red]*[/]" if not diff.matches else " "
          table.add_row(
            str(diff.index), diff.current_title, marker, diff.expected_title
          )
        console.print(table)
      return result.is_sorted

    if dry_run:
      for page_idx, page_objects in enumerate(result.pages):
        console.rule(f"Page {page_idx + 1}")
        table = Table("Idx", "ID", "Title")
        for idx, obj in enumerate(page_objects):
          table.add_row(str(idx), obj["id"], obj["title"])
        console.print(table)
      return True

    # Print redistribution results
    redist = result.redistribute_result
    if redist.rows_removed:
      console.print(f"Removed {len(redist.rows_removed)} excess row(s)")
    if redist.rows_created:
      for row_id in redist.rows_created:
        console.print(f"Created new row {row_id}")
    for row in redist.assigned_rows:
      console.print(f"  {row['id']}: {row['title']} — {len(row['objects'])} objects")
    return True

  def run(self, args):
    has_row_id = getattr(args, "row_id", None) is not None
    has_row_ids = getattr(args, "row_ids", None) is not None

    if args.config_file is None:
      if has_row_id and has_row_ids:
        console.print("--row-id and --row-ids are mutually exclusive", style="red")
        return
      if has_row_ids:
        if args.rule is None:
          console.print("--rule is required with --row-ids", style="red")
          return
        if getattr(args, "max_objects", None) is None:
          console.print("--max-objects is required with --row-ids", style="red")
          return
      elif not has_row_id or args.rule is None:
        console.print(
          "Either --config, --row-id + --rule, or "
          "--row-ids + --max-objects + --rule are required",
          style="red",
        )
        return

    self._load_project(args.project_file)

    context = SortContext(
      project=self.project,
      point_types={pt["id"]: pt for pt in self.project["pointTypes"]},
      groups={g["id"]: g for g in self.project["groups"]},
    )

    if args.config_file is not None:
      with args.config_file.open() as fd:
        config = yaml.load(fd, Loader=yaml.FullLoader)

      all_passed = True
      for group in config["groups"]:
        sort_cfg = group.get("sort")
        if sort_cfg is None:
          continue

        rule = sort_cfg["rule"]
        sort_args = sort_cfg.get("args", {})
        intervals = sort_cfg.get("intervals") or None
        row_ids = group["rows"]
        title = group.get("title")

        if len(row_ids) == 1:
          ok = self._sort_row(
            row_id=row_ids[0],
            rule=rule,
            sort_args=sort_args,
            context=context,
            dry_run=args.dry_run,
            lint=args.lint,
            intervals=intervals,
          )
        else:
          ok = self._sort_composite_rows(
            row_ids=row_ids,
            max_objects=group["max_objects"],
            rule=rule,
            sort_args=sort_args,
            context=context,
            dry_run=args.dry_run,
            lint=args.lint,
            title=title,
            intervals=intervals,
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
        with args.config_file.open("w") as fd:
          yaml.dump(config, fd, default_flow_style=False, sort_keys=False)
    else:
      sort_args = {}
      for item in args.sort_args:
        key, _, val = item.partition("=")
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
