"""Patch step: apply PatchBase patches to project."""

import importlib

from cyoa.build.context import BuildContext
from cyoa.build.errors import BuildError
from cyoa.build.registry import StepHandler, StepResult


class PatchStep(StepHandler):
  step_type = "patch"

  def execute(self, context: BuildContext, params: dict) -> StepResult:
    from cyoa.ops.project import visit_project
    from cyoa.tools.patch import PatchBase

    patches = params.get("patches", [])
    if not patches:
      raise BuildError("PatchStep requires 'patches' parameter")

    warnings = []
    for patch_ref in patches:
      # Parse "module_path:ClassName"
      if ":" not in patch_ref:
        raise BuildError(
          f"Invalid patch reference '{patch_ref}', expected 'module:ClassName'"
        )

      module_path, class_name = patch_ref.split(":", maxsplit=1)

      try:
        module = importlib.import_module(module_path)
      except ImportError as e:
        raise BuildError(f"Cannot import module '{module_path}': {e}")

      cls = getattr(module, class_name, None)
      if cls is None:
        raise BuildError(f"Class '{class_name}' not found in '{module_path}'")

      if not (isinstance(cls, type) and issubclass(cls, PatchBase)):
        raise BuildError(f"'{patch_ref}' is not a PatchBase subclass")

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
