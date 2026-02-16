"""Save step handler."""

import json

from cyoa.build.registry import StepHandler, StepResult


class SaveStep(StepHandler):
  """Writes context.project back to the input file as pretty-printed JSON."""

  step_type = "save"

  def execute(self, context, params):
    """Write project data to the input file.

    Args:
      context: Build context containing project data
      params: Step parameters (unused)

    Returns:
      StepResult indicating success
    """
    with open(context.input_path, "w", encoding="utf-8") as f:
      json.dump(context.project, f, indent=2, ensure_ascii=False)
      f.write("\n")  # Add trailing newline

    return StepResult(success=True, message=f"Saved to {context.input_path}")
