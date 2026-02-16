"""Row balance and sort build steps."""

import yaml

from cyoa.build.errors import BuildError
from cyoa.build.registry import StepHandler, StepResult


def _load_config(context, params):
  if "config" not in params:
    raise BuildError("rows step requires 'config' parameter")

  config_path = context.work_dir / params["config"]
  with config_path.open() as fd:
    config = yaml.load(fd, Loader=yaml.FullLoader)

  return config_path, config


def _save_config(config_path, config):
  with config_path.open("w") as fd:
    yaml.dump(config, fd, default_flow_style=False, sort_keys=False)


class RowsBalanceStep(StepHandler):
  """Rebalance rows across pages according to a config file."""

  step_type = "rows.balance"

  def execute(self, context, params):
    from cyoa.ops.rows import balance_groups

    config_path, config = _load_config(context, params)
    console = context.console

    for group in config["groups"]:
      result = balance_groups(context.project, group)

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
        console.print(f"  {row['id']}: {row['title']} — {len(row['objects'])} objects")

    _save_config(config_path, config)

    return StepResult(
      success=True,
      message=f"Balanced {len(config['groups'])} group(s)",
    )


class RowsSortStep(StepHandler):
  """Sort objects within rows according to a config file."""

  step_type = "rows.sort"

  def execute(self, context, params):
    from cyoa.ops.sort import (
      SortContext,
      load_comparator,
      sort_composite_rows,
      sort_row,
    )

    config_path, config = _load_config(context, params)
    console = context.console
    project = context.project

    sort_context = SortContext(
      project=project,
      point_types={pt["id"]: pt for pt in project["pointTypes"]},
      groups={g["id"]: g for g in project["groups"]},
    )

    sorted_count = 0
    for group in config["groups"]:
      sort_cfg = group.get("sort")
      if sort_cfg is None:
        continue

      rule = sort_cfg["rule"]
      sort_args = sort_cfg.get("args", {})
      intervals = sort_cfg.get("intervals")
      row_ids = group["rows"]
      title = group.get("title")

      comparator = load_comparator(rule)

      if len(row_ids) == 1:
        result = sort_row(
          project,
          row_ids[0],
          comparator,
          sort_args=sort_args,
          intervals=intervals,
          context=sort_context,
        )
        from cyoa.ops.common import find_first

        row_data = find_first(project["rows"], lambda r: r["id"] == row_ids[0])
        row_data["objects"] = result.sorted_objects
        console.print(
          f"Sorted row [b]{row_ids[0]}[/] with {len(result.sorted_objects)} objects"
        )
      else:
        result = sort_composite_rows(
          project,
          row_ids,
          group["max_objects"],
          comparator,
          sort_args=sort_args,
          intervals=intervals,
          context=sort_context,
          title=title,
          apply_changes=True,
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

      sorted_count += 1

    _save_config(config_path, config)

    return StepResult(
      success=True,
      message=f"Sorted {sorted_count} group(s)",
    )
