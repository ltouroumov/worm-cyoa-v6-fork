import json
from pathlib import Path

from rich.table import Table
from rich.box import MARKDOWN

from cyoa.tools.lib import (
  ToolBase,
  ProjectUtilsMixin,
  console,
  remove_rows_from_project,
  find_first,
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


TOOLS = (RowListTool, RowCopyTool, RowMergeTool)
