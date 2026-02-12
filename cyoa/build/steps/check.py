"""Check step: project validation."""

from cyoa.build.context import BuildContext
from cyoa.build.registry import StepHandler, StepResult


class CheckStep(StepHandler):
  step_type = "check"

  def execute(self, context: BuildContext, params: dict) -> StepResult:
    from cyoa.ops.project import check_project

    result = check_project(context.project)

    warnings = []
    if result.duplicate_issues:
      for issue in result.duplicate_issues:
        warnings.append(f"Duplicate ID: {issue.obj_id} in {', '.join(issue.titles)}")
    if result.empty_id_issues:
      for issue in result.empty_id_issues:
        warnings.append(f"Empty {issue.item_type} ID: {issue.title} ({issue.location})")
    if result.requirement_issues:
      for issue in result.requirement_issues:
        missing = ", ".join(issue.missing_ids)
        warnings.append(
          f"Missing requirement for {issue.obj_title}: {issue.issue_type} [{missing}]"
        )
    if result.backpack_issues:
      for issue in result.backpack_issues:
        warnings.append(f"Backpack issue in {issue.row_title}: {issue.issue_type}")

    if result.has_issues:
      return StepResult(
        success=False,
        message=f"Found {len(warnings)} validation issue(s)",
        warnings=warnings,
      )
    return StepResult(success=True, message="No issues found")
