"""Patch step: apply PatchBase patches to project."""

from cyoa.build.context import BuildContext
from cyoa.build.errors import BuildError
from cyoa.build.registry import StepHandler, StepResult
from cyoa.ops.patch_loader import load_patch_class


class PatchStep(StepHandler):
  step_type = "patch"

  def execute(self, context: BuildContext, params: dict) -> StepResult:
    from cyoa.ops.project import visit_project

    patches = params.get("patches", [])
    if not patches:
      raise BuildError("PatchStep requires 'patches' parameter")

    warnings = []
    for patch_ref in patches:
      try:
        cls = load_patch_class(patch_ref)
      except ValueError as e:
        raise BuildError(str(e))

      try:
        patch_instance = cls()
        visit_project(context.project, patch_instance)
        context.console.print(f"  Applied patch: [cyan]{patch_ref}[/cyan]")
      except Exception as e:
        warnings.append(f"Patch {patch_ref}: {e}")

    if warnings:
      return StepResult(
        success=True,
        message=f"Applied {len(patches)} patch(es) with {len(warnings)} warning(s)",
        warnings=warnings,
      )
    return StepResult(success=True, message=f"Applied {len(patches)} patch(es)")
