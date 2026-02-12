"""Format step handler."""

import json

from cyoa.build.registry import StepHandler, StepResult


class FormatStep(StepHandler):
  """Re-serializes project data in memory to normalize key order."""

  step_type = "format"

  def execute(self, context, params):
    """Format project data in memory.

    Normalizes key order by round-tripping through JSON serialization.
    Optionally minifies if params["minify"] is True.

    Args:
      context: Build context containing project data (modified in place)
      params: Optional "minify" parameter (bool)

    Returns:
      StepResult indicating success
    """
    # Determine separators based on minify parameter
    if params.get("minify"):
      separators = (",", ":")
    else:
      separators = (",", ": ")

    # Round-trip through JSON to normalize key order
    serialized = json.dumps(context.project, sort_keys=True, separators=separators)
    context.project = json.loads(serialized)

    return StepResult(success=True, message="Project formatted in memory")
