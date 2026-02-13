"""Build engine for executing build pipelines."""

from __future__ import annotations

import json
import shutil
import traceback
from dataclasses import dataclass, field
from pathlib import Path

from rich.console import Console
from rich.table import Table

from cyoa.build.context import BuildContext
from cyoa.build.errors import BuildError
from cyoa.build.loader import BuildFile, StepDef, load_build_file
from cyoa.build.registry import StepRegistry, StepResult, registry as default_registry


@dataclass
class StepOutcome:
  """Record of a single step's execution result.

  Attributes:
    name: Step name from build file
    step_type: Step type (handler identifier)
    result: Result of step execution
    skipped: Whether the step was skipped (e.g., due to condition)
  """

  name: str
  step_type: str
  result: StepResult
  skipped: bool = False


@dataclass
class BuildResult:
  """Aggregate result of a build pipeline execution.

  Attributes:
    success: Whether the entire build succeeded
    steps: List of individual step outcomes
  """

  success: bool
  steps: list[StepOutcome] = field(default_factory=list)


class BuildEngine:
  """Orchestrates build pipeline execution.

  The engine loads a build file, resolves variables, loads the input project
  into memory, and executes each step in sequence. Steps can be filtered,
  skipped based on conditions, or run in dry-run mode for validation.
  """

  def __init__(
    self, registry: StepRegistry | None = None, console: Console | None = None
  ):
    """Initialize the build engine.

    Args:
      registry: Step handler registry (uses default if not provided)
      console: Rich console for output (creates new if not provided)
    """
    self.registry = registry or default_registry
    self.console = console or Console()

  def run(
    self,
    build_file: Path,
    cli_vars: dict[str, str] | None = None,
    step_names: list[str] | None = None,
    dry_run: bool = False,
    continue_on_error: bool = False,
    copy_from: Path | None = None,
  ) -> BuildResult:
    """Execute a build pipeline.

    Args:
      build_file: Path to the build YAML file
      cli_vars: CLI variable overrides
      step_names: Optional list of step names to run (runs all if None)
      dry_run: If True, validate and print steps without executing
      continue_on_error: If True, continue executing steps after failures

    Returns:
      BuildResult with overall success status and step outcomes

    Raises:
      BuildError: On build file loading or validation errors
    """
    # 1. Load build file
    build_data = load_build_file(build_file, cli_vars)

    # 2. Load input project JSON into memory
    work_dir = build_file.parent
    input_path = work_dir / build_data.input

    # Copy source file to input path if requested
    if copy_from is not None:
      if not copy_from.exists():
        raise BuildError(f"Copy source not found: {copy_from}")
      self.console.print(f"[cyan]Copying:[/cyan] {copy_from} -> {input_path}")
      shutil.copy2(copy_from, input_path)

    if not input_path.exists():
      raise BuildError(f"Input file not found: {input_path}")

    try:
      with input_path.open("r", encoding="utf-8") as f:
        project = json.load(f)
    except Exception as e:
      raise BuildError(f"Failed to load input project: {e}")

    # 3. Construct BuildContext
    context = BuildContext(
      project=project,
      vars=build_data.vars,
      input_path=input_path,
      work_dir=work_dir,
      console=self.console,
    )

    # 4. If dry_run, print steps and return success
    if dry_run:
      self._print_dry_run(build_data, step_names)
      return BuildResult(success=True)

    # 5. Filter steps by step_names if provided
    steps = build_data.steps
    if step_names:
      step_name_set = set(step_names)
      steps = [s for s in steps if s.name in step_name_set]

      if not steps:
        self.console.print("[yellow]No matching steps found[/yellow]")
        return BuildResult(success=True)

    # 6. Execute steps
    outcomes: list[StepOutcome] = []

    for step_def in steps:
      outcome = self._execute_step(context, step_def)
      outcomes.append(outcome)

      # Check if we should stop on failure
      if not outcome.result.success and not outcome.skipped:
        if step_def.on_error == "stop" and not continue_on_error:
          self.console.print(
            f"[red]Step '{step_def.name}' failed with on_error='stop', stopping build[/red]"
          )
          break

    # 7. Print summary table
    self._print_summary(outcomes)

    # 8. Return BuildResult
    success = all(o.result.success or o.skipped for o in outcomes)
    return BuildResult(success=success, steps=outcomes)

  def _execute_step(self, context: BuildContext, step_def: StepDef) -> StepOutcome:
    """Execute a single build step.

    Args:
      context: Build context
      step_def: Step definition

    Returns:
      StepOutcome with execution result
    """
    # Evaluate if condition (skip if falsy)
    if step_def.condition is not None:
      condition_value = step_def.condition.strip()

      # Treat empty string, "false", "0" as falsy
      if condition_value in ("", "false", "0", "False", "FALSE"):
        return StepOutcome(
          name=step_def.name,
          step_type=step_def.uses,
          result=StepResult(success=True, message="Condition not met"),
          skipped=True,
        )

    # Look up handler from registry
    try:
      handler_cls = self.registry.get(step_def.uses)
    except BuildError as e:
      return StepOutcome(
        name=step_def.name,
        step_type=step_def.uses,
        result=StepResult(success=False, message=str(e)),
        skipped=False,
      )

    # Instantiate and execute handler
    try:
      handler = handler_cls()
      self.console.print(f"[cyan]Running:[/cyan] {step_def.name}")
      result = handler.execute(context, step_def.params)
    except Exception as e:
      # Catch exceptions and convert to failed StepResult
      error_msg = f"{type(e).__name__}: {e}"
      tb = traceback.format_exc()
      self.console.print(f"[red]Error in step '{step_def.name}':[/red]\n{tb}")

      result = StepResult(success=False, message=error_msg)

    return StepOutcome(
      name=step_def.name,
      step_type=step_def.uses,
      result=result,
      skipped=False,
    )

  def _print_dry_run(self, build_data: BuildFile, step_names: list[str] | None):
    """Print steps that would be executed in dry-run mode.

    Args:
      build_data: Loaded build file
      step_names: Optional filter for step names
    """
    self.console.print("[bold]Dry run mode - steps to execute:[/bold]\n")

    steps = build_data.steps
    if step_names:
      step_name_set = set(step_names)
      steps = [s for s in steps if s.name in step_name_set]

    table = Table(show_header=True, header_style="bold")
    table.add_column("#", style="dim", width=3)
    table.add_column("Step", style="cyan")
    table.add_column("Type", style="magenta")
    table.add_column("Condition", style="yellow")

    for i, step in enumerate(steps, 1):
      condition = step.condition if step.condition else "-"
      table.add_row(str(i), step.name, step.uses, condition)

    self.console.print(table)
    self.console.print(f"\nTotal: {len(steps)} step(s)")

  def _print_summary(self, outcomes: list[StepOutcome]):
    """Print a summary table of step execution results.

    Args:
      outcomes: List of step outcomes
    """
    self.console.print("\n[bold]Build Summary[/bold]")

    table = Table(show_header=True, header_style="bold")
    table.add_column("#", style="dim", width=3)
    table.add_column("Step")
    table.add_column("Type")
    table.add_column("Status")

    passed = 0
    failed = 0
    skipped = 0

    for i, outcome in enumerate(outcomes, 1):
      if outcome.skipped:
        status = "[yellow]SKIP[/yellow]"
        skipped += 1
      elif outcome.result.success:
        status = "[green]PASS[/green]"
        passed += 1
      else:
        status = "[red]FAIL[/red]"
        failed += 1

      table.add_row(str(i), outcome.name, outcome.step_type, status)

    self.console.print(table)

    for outcome in outcomes:
      if not outcome.result.success:
        self.console.print(f"== [b]{outcome.name}[/] ==")
        self.console.print(outcome.result.message)
        for warning in outcome.result.warnings:
          self.console.print(f"- {warning}")

    # Print total
    total = len(outcomes)
    if failed > 0:
      self.console.print(
        f"\n[red]Build failed ({passed}/{total} steps passed, {failed} failed, {skipped} skipped)[/red]"
      )
    else:
      self.console.print(
        f"\n[green]Build completed successfully ({passed}/{total} steps passed, {skipped} skipped)[/green]"
      )
