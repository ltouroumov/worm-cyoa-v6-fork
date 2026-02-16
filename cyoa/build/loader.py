"""Build file loading and variable resolution."""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

import yaml

from cyoa.build.errors import BuildError


@dataclass
class StepDef:
  """Definition of a build step from the build file.

  Attributes:
    name: Human-readable step name
    uses: Step type (handler name)
    params: Step-specific parameters
    condition: Optional condition expression for conditional execution
    on_error: Error handling strategy ("stop" or "continue")
  """

  name: str
  uses: str
  params: dict
  condition: str | None
  on_error: str = "stop"


@dataclass
class BuildFile:
  """Parsed and validated build file.

  Attributes:
    version: Build file format version
    input: Path to input project file (may contain variables)
    vars: Variable definitions (key -> value)
    steps: List of build steps to execute
  """

  version: int
  input: str
  vars: dict[str, str]
  steps: list[StepDef]


def resolve_vars(vars_dict: dict[str, str]) -> dict[str, str]:
  """Resolve variable references within variable definitions.

  Supports ${var} syntax with cycle detection. Variables are resolved
  iteratively until no more references remain.

  Args:
    vars_dict: Raw variable definitions (may contain ${...} references)

  Returns:
    Fully resolved variable dictionary

  Raises:
    BuildError: If circular variable references are detected
  """
  resolved = vars_dict.copy()
  var_pattern = re.compile(r"\$\{([^}]+)\}")
  max_iterations = len(vars_dict) + 1

  for iteration in range(max_iterations):
    changed = False

    for key, value in resolved.items():
      matches = var_pattern.findall(value)
      if not matches:
        continue

      new_value = value
      for var_name in matches:
        if var_name not in resolved:
          raise BuildError(
            f"Undefined variable '${{{var_name}}}' referenced in '{key}'"
          )

        replacement = resolved[var_name]
        new_value = new_value.replace(f"${{{var_name}}}", replacement)

      if new_value != value:
        resolved[key] = new_value
        changed = True

    if not changed:
      # All variables resolved
      return resolved

  # If we get here, we likely have a cycle
  raise BuildError("Circular variable reference detected in vars")


def substitute(value, vars_dict: dict[str, str]):
  """Recursively substitute variables in a value.

  Handles strings, lists, and dicts. String substitution uses ${var} syntax.

  Args:
    value: Value to substitute (str, list, dict, or other)
    vars_dict: Resolved variable dictionary

  Returns:
    Value with all variable references replaced
  """
  if isinstance(value, str):
    var_pattern = re.compile(r"\$\{([^}]+)\}")

    def replacer(match):
      var_name = match.group(1)
      if var_name not in vars_dict:
        raise BuildError(f"Undefined variable '${{{var_name}}}'")
      return vars_dict[var_name]

    return var_pattern.sub(replacer, value)

  elif isinstance(value, list):
    return [substitute(item, vars_dict) for item in value]

  elif isinstance(value, dict):
    return {key: substitute(val, vars_dict) for key, val in value.items()}

  else:
    return value


def load_build_file(path: Path, cli_vars: dict[str, str] | None = None) -> BuildFile:
  """Load and parse a build file with variable resolution.

  Performs the following steps:
  1. Parse YAML file
  2. Validate structure
  3. Merge CLI variables (override file vars)
  4. Resolve variable references
  5. Substitute variables in input path and step params

  Args:
    path: Path to the build YAML file
    cli_vars: Optional variables from CLI (override file vars)

  Returns:
    Parsed and validated BuildFile

  Raises:
    BuildError: On parse errors, validation failures, or variable resolution issues
  """
  try:
    with path.open("r", encoding="utf-8") as f:
      data = yaml.safe_load(f)
  except Exception as e:
    raise BuildError(f"Failed to load build file: {e}")

  if not isinstance(data, dict):
    raise BuildError("Build file must be a YAML object")

  # Validate version
  version = data.get("version")
  if version != 1:
    raise BuildError(f"Unsupported build file version: {version}")

  # Validate input
  input_path = data.get("input")
  if not isinstance(input_path, str):
    raise BuildError("Build file must specify 'input' as a string")

  # Merge variables
  file_vars = data.get("vars", {})
  if not isinstance(file_vars, dict):
    raise BuildError("'vars' must be a dictionary")

  merged_vars = file_vars.copy()
  if cli_vars:
    merged_vars.update(cli_vars)

  # Convert all values to strings
  merged_vars = {k: str(v) for k, v in merged_vars.items()}

  # Resolve variables
  resolved_vars = resolve_vars(merged_vars)

  # Substitute in input path
  resolved_input = substitute(input_path, resolved_vars)

  # Parse steps
  steps_data = data.get("steps", [])
  if not isinstance(steps_data, list):
    raise BuildError("'steps' must be a list")

  steps = []
  for i, step_data in enumerate(steps_data):
    if not isinstance(step_data, dict):
      raise BuildError(f"Step {i} must be a dictionary")

    name = step_data.get("name")
    if not isinstance(name, str):
      raise BuildError(f"Step {i} must have a 'name' (string)")

    uses = step_data.get("uses")
    if not isinstance(uses, str):
      raise BuildError(f"Step '{name}' must have a 'uses' (string)")

    params = step_data.get("with", {})
    if not isinstance(params, dict):
      raise BuildError(f"Step '{name}' 'with' must be a dictionary")

    # Substitute variables in params
    resolved_params = substitute(params, resolved_vars)

    condition = step_data.get("if")
    if condition is not None and not isinstance(condition, str):
      raise BuildError(f"Step '{name}' 'if' must be a string")

    on_error = step_data.get("on_error", "stop")
    if on_error not in ("stop", "continue"):
      raise BuildError(f"Step '{name}' on_error must be 'stop' or 'continue'")

    steps.append(
      StepDef(
        name=name,
        uses=uses,
        params=resolved_params,
        condition=condition,
        on_error=on_error,
      )
    )

  return BuildFile(
    version=version,
    input=resolved_input,
    vars=resolved_vars,
    steps=steps,
  )
