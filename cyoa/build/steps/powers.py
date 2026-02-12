"""Powers step: export powers data as CSV."""

from cyoa.build.errors import BuildError
from cyoa.build.registry import StepHandler, StepResult


class PowersStep(StepHandler):
  """Export powers data to a CSV file."""

  step_type = "powers"

  def execute(self, context, params):
    from cyoa.graph.lib import build_graph
    from cyoa.ops.project import collect_power_rows, write_powers_csv
    from cyoa.tools.meta import POWER_ROWS

    if "output" not in params:
      raise BuildError("powers step requires 'output' parameter")

    output_path = context.work_dir / params["output"]
    power_row_ids = params.get("power_row_ids", POWER_ROWS)

    graph = build_graph(context.project)
    power_entries = collect_power_rows(context.project, graph, power_row_ids)

    with open(output_path, mode="w+") as output:
      write_powers_csv(power_entries, output)

    return StepResult(
      success=True,
      message=f"Exported {len(power_entries)} powers to {output_path}",
    )
