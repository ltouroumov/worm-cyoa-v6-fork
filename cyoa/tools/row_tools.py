import copy
import json
from pathlib import Path

from rich.table import Table
from rich.box import MARKDOWN

from cyoa.tools.lib import (
  ToolBase,
  ProjectUtilsMixin,
  console,
  gen_id,
  remove_rows_from_project,
  find_first,
  find_first_index,
)


class RowListTool(ToolBase, ProjectUtilsMixin):
  name = "row.list"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="List all rows in project")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)

  def run(self, args):
    self._load_project(args.project_file)

    table = Table("id", "title", "# objects", box=MARKDOWN)
    total_objects = 0
    for row_data in self.project["rows"]:
      row_objects = len(row_data['objects'])
      table.add_row(row_data["id"], row_data["title"], f"{row_objects}")
      total_objects += row_objects

    console.print(table)
    console.print(f"Total objects: {total_objects}")
    console.print(f"Total rows: {len(self.project['rows'])}")


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
      "--from-row-ids", type=str, required=True, nargs="+", action="extend", default=[]
    )
    parser.add_argument("--dest-row-id", type=str, required=True)

  def run(self, args):
    self._load_project(args.project_file)

    dest_row_data = find_first(
      self.project["rows"], lambda row: row["id"] == args.dest_row_id
    )

    for from_row_id in args.from_row_ids:
      row_data = find_first(self.project["rows"], lambda row: row["id"] == from_row_id)

      dest_row_data["objects"].extend(row_data["objects"])

    remove_rows_from_project(self.project, row_ids=args.from_row_ids)

    self._save_project(args.project_file)


class RowSplitTool(ToolBase, ProjectUtilsMixin):
  name = "row.split"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Split a row into two after a given object")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--row-id", type=str, required=True)

    split_point = parser.add_mutually_exclusive_group(required=True)
    split_point.add_argument("--after-obj", type=str, help="Object ID to split after")
    split_point.add_argument("--after-idx", type=int, help="Object index to split after")

  def run(self, args):
    self._load_project(args.project_file)

    row_idx = find_first_index(
      self.project["rows"], lambda row: row["id"] == args.row_id
    )
    if row_idx is None:
      console.print(f"Row not found: {args.row_id}", style="red")
      return

    row_data = self.project["rows"][row_idx]

    if args.after_obj is not None:
      split_idx = find_first_index(
        row_data["objects"], lambda obj: obj["id"] == args.after_obj
      )
      if split_idx is None:
        console.print(f"Object not found: {args.after_obj}", style="red")
        return
    else:
      split_idx = args.after_idx
      if split_idx < 0 or split_idx >= len(row_data["objects"]):
        console.print(f"Index out of range: {split_idx}", style="red")
        return

    new_row = copy.deepcopy(row_data)
    new_row["id"] = gen_id()
    new_row["objects"] = row_data["objects"][split_idx + 1:]
    row_data["objects"] = row_data["objects"][:split_idx + 1]

    self.project["rows"].insert(row_idx + 1, new_row)

    console.print(f"Split row {args.row_id} after index {split_idx}")
    console.print(f"  {args.row_id}: {len(row_data['objects'])} objects")
    console.print(f"  {new_row['id']}: {len(new_row['objects'])} objects")

    self._save_project(args.project_file)


TOOLS = (RowListTool, RowCopyTool, RowMergeTool, RowSplitTool)
