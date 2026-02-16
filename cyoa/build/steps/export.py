"""Export step handler."""

import json

from cyoa.build.errors import BuildError
from cyoa.build.registry import StepHandler, StepResult


class ExportStep(StepHandler):
  """Writes context.project as minified JSON to a specified output directory."""

  step_type = "export"

  def execute(self, context, params):
    """Export project data as minified JSON.

    Args:
      context: Build context containing project data
      params: Must contain "output_dir" key specifying the export directory

    Returns:
      StepResult indicating success

    Raises:
      BuildError: If output_dir is not specified in params
    """
    if "output_dir" not in params:
      raise BuildError("export step requires 'output_dir' parameter")

    # Resolve output_dir relative to work_dir
    output_dir = context.work_dir / params["output_dir"]
    output_dir.mkdir(parents=True, exist_ok=True)

    # Write minified JSON
    output_path = output_dir / "project.json"
    with open(output_path, "w", encoding="utf-8") as f:
      json.dump(
        context.project,
        f,
        separators=(",", ":"),
        ensure_ascii=False,
      )

    return StepResult(success=True, message=f"Exported to {output_path}")
