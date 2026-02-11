# Build System Design

## Overview

A declarative build system that replaces the imperative `make.sh` script with a YAML-based build file and a `build` CLI entry point. The build process operates on the project data in-memory, only writing output when explicitly directed via `save` or `export` steps.

## Goals

- **Declarative**: Build pipelines defined in YAML, similar to GitHub Actions / GitLab CI.
- **In-memory**: The project is loaded once and transformed through a sequence of steps without intermediate disk writes.
- **Modular**: Each step type maps to an operation in the `cyoa.ops` or `cyoa.patch` layer.
- **Extensible**: New step types can be registered without modifying the engine core.
- **Error handling**: Steps report errors clearly; the pipeline can be configured to stop or continue on failure.

## Build File Format

Build files use YAML and live alongside the project (e.g. `build.yaml`).

### Structure

```yaml
# build.yaml
version: 1

# Variables available for substitution in step parameters.
# Referenced as $var or ${var} in string values.
vars:
  version: "v17"
  image_dir: "images/${version}"
  image_url: "https://cyoa.ltouroumov.ch/images/${version}"

# The input project file. Loaded into memory at the start.
input: "project-${version}.json"

# Ordered list of build steps.
steps:
  # --- Validation & Schema ---
  - name: "Validate project"
    uses: check

  - name: "Enforce schema"
    uses: patch
    with:
      patches:
        - cyoa.patch.schema:ApplySchema
        - cyoa.patch:TrimSpaces

  - name: "Fix image links"
    uses: patch
    with:
      patches:
        - cyoa.patch:FixImageLinks

  # --- Media Processing ---
  - name: "Extract embedded images"
    uses: media.extract
    with:
      export_dir: "${image_dir}"
      export_url: "${image_url}"

  - name: "Optimize images"
    uses: media.optimize
    with:
      export_dir: "${image_dir}"
      export_url: "${image_url}"
      size_gte: 1500
      max_dim: [1500, 1500]
      optimize_urls: true

  - name: "Clean orphan images"
    uses: media.clean
    with:
      export_dir: "${image_dir}"
      export_url: "${image_url}"

  # --- Fix Patches ---
  - name: "Apply fix patches"
    uses: patch
    with:
      patches:
        - cyoa.patch:FixScoreLabels
        - cyoa.patch:FixActiveFlags
        - cyoa.patch:FixConditionLabels
        - cyoa.patch:ClearEditingFlag
        - cyoa.patch:FixMultiSelectCounters
        - cyoa.patch:KeyAddons

  # --- Output ---
  - name: "Save project"
    uses: save

  - name: "Export to viewer"
    uses: export
    with:
      output_dir: "viewer"

  - name: "Export to viewer-old"
    uses: export
    with:
      output_dir: "viewer-old"

  - name: "Export powers CSV"
    uses: powers
    with:
      output: "powers-${version}.csv"
```

### Step Schema

Each step has the following fields:

| Field   | Type            | Required | Description                                        |
|---------|-----------------|----------|----------------------------------------------------|
| `name`  | string          | yes      | Human-readable label for logging.                  |
| `uses`  | string          | yes      | Step type identifier (see registry).               |
| `with`  | map             | no       | Parameters passed to the step handler.             |
| `if`    | string          | no       | Condition expression; step is skipped when false.  |
| `on_error` | `stop` \| `continue` | no | Override default error behavior for this step. |

### Variable Substitution

Variables defined in `vars` are substituted in all string values using `${var}` syntax. Variables can reference other variables (resolved in definition order). CLI arguments can override or extend variables.

```
cyoa build --var version=v18 --var image_url=https://cdn.example.com/v18
```

## CLI Interface

The build command is registered as a subcommand of the `cyoa` CLI.

```
cyoa build [options]

Options:
  --file, -f FILE       Path to build YAML file (default: build.yaml)
  --var KEY=VALUE       Override or add a variable (repeatable)
  --step STEP_NAME      Run only the named step(s) (repeatable)
  --dry-run             Parse and validate without executing
  --continue-on-error   Don't stop on step failure
  --verbose, -v         Increase log verbosity
```

### Entry point

Registered in `pyproject.toml` alongside the existing `cyoa` entry point, or as a subcommand of `cyoa`:

```toml
[project.scripts]
cyoa = "cyoa.tools.client:main"
```

The `build` subcommand replaces the current `BuildTool` in `cyoa/tools/build.py`.

## Architecture

### Package Layout

```
cyoa/
  build/
    __init__.py          # Public API: run_build()
    engine.py            # BuildEngine: load, resolve, execute pipeline
    context.py           # BuildContext: in-memory project state + vars
    loader.py            # YAML parsing, validation, variable resolution
    registry.py          # StepHandler registry and discovery
    steps/
      __init__.py        # Registers all built-in step handlers
      check.py           # check: project validation
      patch.py           # patch: apply PatchBase patches
      media.py           # media.*: extract, optimize, clean
      save.py            # save: write project to input file
      export.py          # export: write minified project to output dir
      powers.py          # powers: export powers CSV
      format.py          # format: re-serialize project JSON
```

### Key Components

#### `BuildContext`

Holds the mutable state that flows through the pipeline.

```python
@dataclass
class BuildContext:
    """Mutable state for the build pipeline."""

    # The in-memory project data (loaded from input file).
    project: dict

    # Resolved variables from the build file + CLI overrides.
    vars: dict[str, str]

    # Path to the input file (for save step).
    input_path: Path

    # Working directory (directory containing the build file).
    work_dir: Path

    # Console for rich output.
    console: Console
```

#### `StepHandler`

Abstract base for all step implementations.

```python
class StepHandler(ABC):
    """Base class for build step handlers."""

    # Unique identifier matching the `uses` field in the build file.
    step_type: str

    @abstractmethod
    def execute(self, context: BuildContext, params: dict) -> StepResult:
        """Execute the step.

        Args:
            context: The current build context (project data, vars, paths).
            params: The resolved `with` parameters from the build file.

        Returns:
            StepResult indicating success/failure and optional diagnostics.
        """
        ...
```

```python
@dataclass
class StepResult:
    success: bool
    message: str = ""
    warnings: list[str] = field(default_factory=list)
```

#### `StepRegistry`

Maps step type identifiers to handler classes. Built-in steps are registered at import time. Extensions can register additional handlers.

```python
class StepRegistry:
    _handlers: dict[str, type[StepHandler]]

    def register(self, handler_cls: type[StepHandler]):
        self._handlers[handler_cls.step_type] = handler_cls

    def get(self, step_type: str) -> type[StepHandler]:
        if step_type not in self._handlers:
            raise BuildError(f"Unknown step type: {step_type}")
        return self._handlers[step_type]

# Module-level default registry, populated by cyoa.build.steps
registry = StepRegistry()
```

#### `BuildEngine`

Orchestrates the pipeline: loads the build file, resolves variables, and executes steps in sequence.

```python
class BuildEngine:
    def __init__(self, registry: StepRegistry, console: Console):
        self.registry = registry
        self.console = console

    def run(self, build_file: Path, cli_vars: dict[str, str], **options) -> BuildResult:
        """Load and execute a build pipeline.

        1. Parse YAML build file.
        2. Merge CLI variable overrides.
        3. Resolve variable references.
        4. Load the input project into memory.
        5. Execute each step in sequence.
        6. Return aggregate result.
        """
        ...
```

```python
@dataclass
class BuildResult:
    success: bool
    steps: list[StepOutcome]

@dataclass
class StepOutcome:
    name: str
    step_type: str
    result: StepResult
    skipped: bool = False
```

### Step ↔ Ops Mapping

Each built-in step delegates to existing functions in the `cyoa.ops` and `cyoa.patch` packages. The steps themselves contain only orchestration logic (parameter mapping, progress reporting), not business logic.

| Step type        | Underlying function(s)                                           |
|------------------|------------------------------------------------------------------|
| `check`          | `cyoa.ops.project.check_project()`                              |
| `patch`          | `cyoa.ops.project.visit_project()` + dynamic patch class loading |
| `media.extract`  | `cyoa.ops.media.extract_embedded_image()`                       |
| `media.optimize` | `cyoa.ops.media.optimize_embedded_image()`, `optimize_file_image()` |
| `media.clean`    | `cyoa.ops.media.list_all_images()` + filesystem cleanup         |
| `save`           | JSON serialization to `context.input_path`                      |
| `export`         | JSON minified serialization to `output_dir/project.json`        |
| `powers`         | `cyoa.ops.project.write_powers_csv()`                           |
| `format`         | JSON re-serialization (pretty-print)                            |

### Error Handling

1. **Step-level**: Each `StepHandler.execute()` returns a `StepResult`. Exceptions are caught by the engine and converted to a failed `StepResult`.
2. **Pipeline-level**: By default, the engine stops on the first failed step. The `--continue-on-error` flag or per-step `on_error: continue` overrides this.
3. **Reporting**: After execution, the engine prints a summary table of all steps with their status (pass/fail/skip).

```
Build Summary
+---+---------------------------+---------+---------+
| # | Step                      | Type    | Status  |
+---+---------------------------+---------+---------+
| 1 | Validate project          | check   | PASS    |
| 2 | Enforce schema            | patch   | PASS    |
| 3 | Fix image links           | patch   | PASS    |
| 4 | Extract embedded images   | media   | PASS    |
| 5 | Optimize images           | media   | PASS    |
| 6 | Clean orphan images       | media   | PASS    |
| 7 | Apply fix patches         | patch   | PASS    |
| 8 | Save project              | save    | PASS    |
| 9 | Export to viewer           | export  | PASS    |
|10 | Export to viewer-old       | export  | PASS    |
|11 | Export powers CSV          | powers  | PASS    |
+---+---------------------------+---------+---------+
Build completed successfully (11/11 steps passed)
```

## Extensibility

### Custom Step Handlers

Third-party or project-specific steps can be added by:

1. Subclassing `StepHandler` with a unique `step_type`.
2. Registering with the global registry, or using an entry point:

```python
# In a plugin or local module:
from cyoa.build.registry import registry

class MyCustomStep(StepHandler):
    step_type = "my_custom"

    def execute(self, context, params):
        # ...
        return StepResult(success=True)

registry.register(MyCustomStep)
```

3. Referencing in the build file with a module path for auto-discovery:

```yaml
steps:
  - name: "Custom step"
    uses: "my_plugin:MyCustomStep"
```

### Conditional Steps

The `if` field supports simple expressions evaluated against the build variables:

```yaml
steps:
  - name: "Optimize images"
    uses: media.optimize
    if: "${optimize_images}"
    with:
      # ...
```

## Implementation Plan

The work is split into incremental chunks. Each chunk produces working, testable code before moving to the next.

### Chunk 1: Foundation -- Data model, loader, registry

Create the `cyoa/build/` package skeleton with the core types that everything else depends on.

**Files:**

- `cyoa/build/__init__.py` -- Package marker, re-exports `run_build`.
- `cyoa/build/context.py` -- `BuildContext` dataclass.
- `cyoa/build/registry.py` -- `StepHandler` ABC, `StepResult` dataclass, `StepRegistry` class.
- `cyoa/build/loader.py` -- `BuildFile` dataclass, `StepDef` dataclass, `load_build_file()` function (YAML parsing), `resolve_vars()` (variable substitution).

**Details:**

`loader.py` handles:
1. Reading and parsing the YAML file.
2. Validating the top-level structure (`version`, `input`, `steps` are present; each step has `name` and `uses`).
3. Merging CLI variable overrides into the `vars` dict.
4. Resolving `${var}` references in all string values (vars, input path, step parameters) using iterative substitution with cycle detection.

```python
@dataclass
class StepDef:
    """Parsed step definition from the build file."""
    name: str
    uses: str
    params: dict          # resolved `with` block
    condition: str | None # `if` field
    on_error: str         # "stop" | "continue"

@dataclass
class BuildFile:
    """Parsed and resolved build file."""
    version: int
    input: str
    vars: dict[str, str]
    steps: list[StepDef]
```

**Testable outcome:** `load_build_file("build.yaml", cli_vars={})` returns a fully resolved `BuildFile` with all variables expanded. Invalid files raise `BuildError` with clear messages.

---

### Chunk 2: Engine -- Pipeline execution loop

Implement the engine that loads the project, runs steps, and collects results.

**Files:**

- `cyoa/build/engine.py` -- `BuildEngine`, `BuildResult`, `StepOutcome`.
- `cyoa/build/errors.py` -- `BuildError` exception class.

**Details:**

`BuildEngine.run()` does the following:
1. Call `load_build_file()` to get a `BuildFile`.
2. Load the input project JSON into memory.
3. Construct a `BuildContext`.
4. For each `StepDef`:
   a. Evaluate the `if` condition (skip if falsy).
   b. Look up the handler from `StepRegistry.get(step_def.uses)`.
   c. Instantiate the handler and call `execute(context, step_def.params)`.
   d. Catch exceptions, convert to failed `StepResult`.
   e. Record `StepOutcome`.
   f. If failed and `on_error == "stop"`, break.
5. Return `BuildResult`.

Support `--dry-run` by skipping step execution (validate file + resolve only).
Support `--step` by filtering the step list by name before execution.

**Testable outcome:** `BuildEngine` can run a pipeline with a no-op step handler and produce a correct `BuildResult`. Dry-run mode parses and validates without executing.

---

### Chunk 3: Output steps -- `save`, `export`, `format`

Implement the simplest steps that only do JSON serialization. These are self-contained and have no dependency on `cyoa.ops`.

**Files:**

- `cyoa/build/steps/__init__.py` -- Imports and registers all built-in handlers.
- `cyoa/build/steps/save.py` -- `SaveStep`: write `context.project` back to `context.input_path` as pretty-printed JSON.
- `cyoa/build/steps/export.py` -- `ExportStep`: write `context.project` as minified JSON to `params["output_dir"]/project.json`, creating the directory if needed.
- `cyoa/build/steps/format.py` -- `FormatStep`: re-serialize project in memory (a no-op for in-memory pipelines, included for completeness if someone wants to normalize key order mid-pipeline).

**Step parameters:**

| Step     | Params                  |
|----------|-------------------------|
| `save`   | *(none)*                |
| `export` | `output_dir` (required) |
| `format` | `minify` (optional bool)|

**Testable outcome:** A minimal pipeline of `[save]` or `[export]` writes the expected JSON to disk. Round-trip: load project, export, load exported file, compare.

---

### Chunk 4: `check` and `patch` steps

Implement the validation and patching steps that wrap existing `cyoa.ops.project` and `cyoa.patch` functionality.

**Files:**

- `cyoa/build/steps/check.py` -- `CheckStep`: calls `check_project()` and converts errors to `StepResult`.
- `cyoa/build/steps/patch.py` -- `PatchStep`: dynamically loads patch classes from `module:ClassName` strings and applies them via `visit_project()`.

**Details for `PatchStep`:**

1. Parse each entry in `params["patches"]` as `"module_path:ClassName"`.
2. `importlib.import_module(module_path)` + `getattr(module, class_name)`.
3. Validate the class is a `PatchBase` subclass.
4. Call `visit_project(context.project, patch_instance)` for each patch in order.
5. Collect any exceptions per-patch and report in `StepResult.warnings`.

This reuses the exact same dynamic loading logic currently in `ProjectPatchTool.run()` (`cyoa/tools/project_tools.py`), extracted into a shared helper.

**Testable outcome:** A pipeline with `[check, patch]` steps applies patches to the in-memory project and reports validation errors.

---

### Chunk 5: Media steps -- `media.extract`, `media.optimize`, `media.clean`

These steps wrap the media operations from `cyoa.ops.media` and are the most complex because they involve filesystem I/O (image files).

**Files:**

- `cyoa/build/steps/media.py` -- `MediaExtractStep`, `MediaOptimizeStep`, `MediaCleanStep`.

**Details:**

Each media step receives the same core parameters:
- `export_dir` -- Directory for image files (relative to `work_dir`).
- `export_url` -- Base URL for image references in the project.

The steps iterate over images using `list_all_images(context.project)` and delegate to the corresponding `cyoa.ops.media` functions, passing the project dict for in-place mutation.

`MediaOptimizeStep` additionally accepts:
- `size_gte` -- Only optimize images larger than this (bytes).
- `max_dim` -- `[width, height]` maximum dimensions.
- `optimize_urls` -- Whether to re-optimize URL-referenced images.

`MediaCleanStep` scans `export_dir` for files not referenced by the project and deletes them.

Progress reporting uses `rich.progress` through `context.console`.

**Testable outcome:** Running the three media steps in sequence on a project with embedded images produces the same file tree as the current `media.extract` + `media.optimize` + `media.clean` CLI commands.

---

### Chunk 6: `powers` step and auxiliary exports

**Files:**

- `cyoa/build/steps/powers.py` -- `PowersStep`: calls `write_powers_csv()` to export powers data.

**Step parameters:**

| Step     | Params                 |
|----------|------------------------|
| `powers` | `output` (file path)   |

Resolves `output` relative to `work_dir`. Delegates to `cyoa.ops.project.write_powers_csv()`.

**Testable outcome:** The step produces a CSV file identical to `cyoa project.powers --output ...`.

---

### Chunk 7: CLI integration

Wire the build engine into the `cyoa` CLI, replacing the current `BuildTool`.

**Files to modify:**

- `cyoa/tools/build.py` -- Replace current `BuildTool` with a new implementation that parses CLI args and delegates to `BuildEngine.run()`.
- `cyoa/tools/client.py` -- No changes needed (already registers `build.BuildTool`).

**New `BuildTool.run()`:**
1. Parse `--file`, `--var`, `--step`, `--dry-run`, `--continue-on-error`, `--verbose` from argparse.
2. Build a `dict[str, str]` from `--var KEY=VALUE` arguments.
3. Construct `BuildEngine(registry, console)`.
4. Call `engine.run(build_file, cli_vars, **options)`.
5. Print the summary table from `BuildResult`.
6. Exit with code 0 on success, 1 on failure.

**Testable outcome:** `cyoa build -f build.yaml` runs the full pipeline. `cyoa build --dry-run` validates without executing. Old `cyoa build --input X --output Y` invocations are no longer supported (breaking change, documented).

---

### Chunk 8: Build file for the project + validation

Write the actual `build.yaml` for this project and validate it produces identical output to `make.sh`.

**Files:**

- `build.yaml` -- The declarative pipeline matching `make.sh` (as shown in the Build File Format section above).

**Validation process:**

1. Run `make.sh` and capture output files (project JSON, viewer directories, powers CSV).
2. Run `cyoa build -f build.yaml` and capture the same output files.
3. Diff the outputs. They should be identical (byte-for-byte for JSON, equivalent for images).
4. Fix any discrepancies found.

**Testable outcome:** `build.yaml` is a drop-in replacement for `make.sh`.

---

### Chunk 9: Cleanup

- Remove `make.sh` (or keep as a thin wrapper that calls `cyoa build` for backward compat).
- Update any documentation references.
- Extract the shared patch-loading logic from `ProjectPatchTool` into a utility used by both the tool and the build step (avoid duplication from chunk 4).

---

### Summary

| Chunk | Scope                          | New files | Modified files |
|-------|--------------------------------|-----------|----------------|
| 1     | Data model, loader, registry   | 4         | 0              |
| 2     | Engine execution loop          | 2         | 0              |
| 3     | save / export / format steps   | 4         | 0              |
| 4     | check / patch steps            | 2         | 0              |
| 5     | media.* steps                  | 1         | 0              |
| 6     | powers step                    | 1         | 0              |
| 7     | CLI integration                | 0         | 1              |
| 8     | build.yaml + validation        | 1         | 0              |
| 9     | Cleanup                        | 0         | 2-3            |

## Dependencies

No new dependencies required. The build system uses:
- `pyyaml` (already in `pyproject.toml`) for YAML parsing.
- `rich` (already in `pyproject.toml`) for console output and progress.
- Standard library `importlib` for dynamic step/patch loading.
- Standard library `re` for variable substitution.
