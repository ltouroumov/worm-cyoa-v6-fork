"""Markdown export step handler."""

from cyoa.build.errors import BuildError
from cyoa.build.registry import StepHandler, StepResult


class MarkdownExportStep(StepHandler):
  """Exports project data as a set of Markdown files."""

  step_type = "md.export"

  def execute(self, context, params):
    if "output_dir" not in params:
      raise BuildError("md.export step requires 'output_dir' parameter")

    from cyoa.md_export.config import STRUCTURE
    from cyoa.ops.md_export import (
      path_to_filename,
      render_index,
      render_section,
    )

    root_prefix = "Project V17"
    output_dir = context.work_dir / params["output_dir"]
    output_dir.mkdir(parents=True, exist_ok=True)

    point_types = {
      pt["id"]: pt.get("name", pt["id"]) for pt in context.project.get("pointTypes", [])
    }
    rows_by_id = {row["id"]: row for row in context.project["rows"]}
    objects = {
      obj["id"]: obj for row in context.project["rows"] for obj in row["objects"]
    }

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

      filename = path_to_filename(path, root_prefix)
      out_path = output_dir / filename
      out_path.parent.mkdir(parents=True, exist_ok=True)
      out_path.write_text(content, encoding="utf-8")
      file_count += 1

    index_content = render_index(STRUCTURE, root_prefix)
    (output_dir / "index.md").write_text(index_content, encoding="utf-8")
    file_count += 1

    return StepResult(
      success=True, message=f"Exported {file_count} files to {output_dir}"
    )
