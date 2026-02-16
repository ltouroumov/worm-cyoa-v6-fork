import csv
import json
from io import StringIO
from pathlib import Path

import yaml
from rich.table import Table
from rich.box import MARKDOWN

from cyoa.ops.common import find_first
from cyoa.ops.rows import (
  list_rows,
  split_row,
  merge_rows,
  balance_groups,
)
from cyoa.tools.lib import (
  ToolBase,
  ProjectUtilsMixin,
  console,
)


class RowListTool(ToolBase, ProjectUtilsMixin):
  name = "row.list"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="List all rows in project")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--csv", action="store_true")

  def run(self, args):
    self._load_project(args.project_file)

    rows = list_rows(self.project)

    if args.csv:
      str_io = StringIO()
      csv_file = csv.DictWriter(str_io, fieldnames=("id", "title", "objects"))
      csv_file.writeheader()
      for row_entry in rows:
        csv_file.writerow(
          {
            "id": row_entry.row_id,
            "title": row_entry.title,
            "objects": row_entry.object_count,
          }
        )
      print(str_io.getvalue())
    else:
      table = Table("id", "title", "# objects", box=MARKDOWN)
      total_objects = 0
      for row_entry in rows:
        table.add_row(row_entry.row_id, row_entry.title, f"{row_entry.object_count}")
        total_objects += row_entry.object_count

      console.print(table)
      console.print(f"Total objects: {total_objects}")
      console.print(f"Total rows: {len(rows)}")


class RowCopyTool(ToolBase, ProjectUtilsMixin):
  name = "row.copy"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Copy a row into a file")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--row-id", type=str, required=True)
    parser.add_argument("--output", type=Path)

  def run(self, args):
    self._load_project(args.project_file)

    row_data = find_first(self.project["rows"], lambda row: row["id"] == args.row_id)

    with args.output.open(mode="w+") as fd:
      json.dump(row_data, fd, indent=2)


class RowMergeTool(ToolBase, ProjectUtilsMixin):
  name = "row.merge"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Merge multiple rows into one")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument(
      "--from-row-ids",
      type=str,
      required=True,
      nargs="+",
      action="extend",
      default=[],
    )
    parser.add_argument("--dest-row-id", type=str, required=True)

  def run(self, args):
    self._load_project(args.project_file)

    try:
      result = merge_rows(self.project, args.from_row_ids, args.dest_row_id)
    except KeyError as exc:
      console.print(str(exc), style="red")
      return

    console.print(
      f"Merged {len(result.merged_row_ids)} row(s) into {result.dest_row_id}"
    )
    console.print(f"Total objects: {result.total_objects}")

    self._save_project(args.project_file)


class RowSplitTool(ToolBase, ProjectUtilsMixin):
  name = "row.split"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(
      cls.name, help="Split a row into two after a given object"
    )
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--row-id", type=str, required=True)
    parser.add_argument("--before", action="store_true", help="Split before the target")

    split_point = parser.add_mutually_exclusive_group(required=True)
    split_point.add_argument("--after-obj", type=str, help="Object ID to split after")
    split_point.add_argument(
      "--after-idx", type=int, help="Object index to split after"
    )

  def run(self, args):
    self._load_project(args.project_file)

    try:
      result = split_row(
        self.project,
        args.row_id,
        after_obj=args.after_obj,
        after_idx=args.after_idx,
        before=args.before,
      )
    except (KeyError, IndexError, ValueError) as exc:
      console.print(str(exc), style="red")
      return

    console.print(f"Split row {result.original_row_id}")
    console.print(f"  {result.original_row_id}: {result.original_count} objects")
    console.print(f"  {result.new_row_id}: {result.new_count} objects")

    self._save_project(args.project_file)


class RowsBalanceTool(ToolBase, ProjectUtilsMixin):
  name = "rows.balance"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(
      cls.name, help="Rebalance rows across pages according to a YAML config"
    )
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--config", dest="config_file", type=Path, required=True)

  def run(self, args):
    self._load_project(args.project_file)

    with args.config_file.open() as fd:
      config = yaml.load(fd, Loader=yaml.FullLoader)

    for group in config["groups"]:
      try:
        result = balance_groups(self.project, group)

        console.rule(f"[bold]{result.title}")
        console.print(f"Total objects: {result.total_objects}")
        console.print(
          f"Pages needed: {result.pages_needed} (existing: {result.pages_existing})"
        )

        redist = result.redistribute_result
        if redist.rows_removed:
          console.print(f"Removed {len(redist.rows_removed)} excess row(s)")
        if redist.rows_created:
          for row_id in redist.rows_created:
            console.print(f"Created new row {row_id}")
        for row in redist.assigned_rows:
          console.print(
            f"  {row['id']}: {row['title']} — {len(row['objects'])} objects"
          )

      except KeyError as exc:
        console.print(str(exc), style="red")
        return

    self._save_project(args.project_file)

    with args.config_file.open("w") as fd:
      yaml.dump(config, fd, default_flow_style=False, sort_keys=False)
    console.print(f"Config written to {args.config_file}")


TOOLS = (RowListTool, RowCopyTool, RowMergeTool, RowSplitTool, RowsBalanceTool)
