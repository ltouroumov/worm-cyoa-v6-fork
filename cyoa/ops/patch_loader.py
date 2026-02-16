"""Shared utility for dynamically loading PatchBase subclasses."""

from __future__ import annotations

import importlib


def load_patch_class(patch_ref: str):
  """Load a PatchBase subclass from a 'module:ClassName' reference.

  Args:
    patch_ref: String in the format 'module_path:ClassName'

  Returns:
    The PatchBase subclass (not an instance)

  Raises:
    ValueError: If the reference format is invalid, module can't be imported,
                class is not found, or class is not a PatchBase subclass
  """
  from cyoa.tools.patch import PatchBase

  if ":" not in patch_ref:
    raise ValueError(
      f"Invalid patch reference '{patch_ref}', expected 'module:ClassName'"
    )

  module_path, class_name = patch_ref.split(":", maxsplit=1)

  try:
    module = importlib.import_module(module_path)
  except ImportError as e:
    raise ValueError(f"Cannot import module '{module_path}': {e}")

  cls = getattr(module, class_name, None)
  if cls is None:
    raise ValueError(f"Class '{class_name}' not found in '{module_path}'")

  if not (isinstance(cls, type) and issubclass(cls, PatchBase)):
    raise ValueError(f"'{patch_ref}' is not a PatchBase subclass")

  return cls
