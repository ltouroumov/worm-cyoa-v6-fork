from pathlib import Path

from cyoa.ops.md_export import (
  path_to_filename,
  render_index,
  render_section,
)
from cyoa.tools.lib import ToolBase, ProjectUtilsMixin, console
from cyoa.md_export.config import STRUCTURE

ROOT_PREFIX = "Project V17"


class MarkdownExportTool(ToolBase, ProjectUtilsMixin):
  name = "md.export"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Export project data as Markdown files")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument(
      "--output-dir", dest="output_dir", type=Path, default=Path("./export")
    )

  def run(self, args):
    self._load_project(args.project_file)

    output_dir: Path = args.output_dir
    output_dir.mkdir(parents=True, exist_ok=True)

    # Build lookups
    point_types = {
      pt["id"]: pt.get("name", pt["id"]) for pt in self.project.get("pointTypes", [])
    }
    rows_by_id = {row["id"]: row for row in self.project["rows"]}
    objects = {obj["id"]: obj for row in self.project["rows"] for obj in row["objects"]}

    # Render section pages
    file_count = 0
    for path, config in STRUCTURE.items():
      if config["mode"] not in ("section", "combined"):
        continue

      row_ids = config.get("row_ids", [])
      if not row_ids:
        continue

      content = render_section(
        title=path,
        row_ids=row_ids,
        rows_by_id=rows_by_id,
        config=config,
        point_types=point_types,
        objects=objects,
      )

      filename = path_to_filename(path, ROOT_PREFIX)
      out_path = output_dir / filename
      out_path.parent.mkdir(parents=True, exist_ok=True)
      out_path.write_text(content, encoding="utf-8")
      file_count += 1

    # Render index
    index_content = render_index(STRUCTURE, ROOT_PREFIX)
    (output_dir / "index.md").write_text(index_content, encoding="utf-8")
    file_count += 1

    console.print(f"Exported {file_count} files to {output_dir}")


TOOLS = (MarkdownExportTool,)
