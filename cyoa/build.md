# Build System

A declarative build system that replaces the imperative `make.sh` script with a YAML-based pipeline. The project is loaded once into memory and transformed through a sequence of steps, only writing output when explicitly directed via `save` or `export` steps.

## Usage

```
cyoa build [options]
```

### Options

| Option                | Description                                      |
|-----------------------|--------------------------------------------------|
| `--file, -f FILE`     | Path to build YAML file (default: `build.yaml`)  |
| `--copy-from PATH`    | Copy this file as the input before building       |
| `--var KEY=VALUE`     | Override or add a variable (repeatable)           |
| `--step STEP_NAME`    | Run only the named step(s) (repeatable)          |
| `--dry-run`           | Parse and validate without executing             |
| `--continue-on-error` | Don't stop on step failure                       |
| `--verbose, -v`       | Increase log verbosity                           |

### Examples

```bash
# Run the full pipeline
cyoa build

# Copy an updated file from Discord, then build
cyoa build --copy-from ~/Downloads/project.json

# Override the version variable
cyoa build --var version=v18

# Run only specific steps
cyoa build --step "Save project" --step "Export to viewer"

# Validate without executing
cyoa build --dry-run
```

## Build File Format

Build files use YAML and live alongside the project (e.g. `build.yaml`).

### Structure

```yaml
version: 1

vars:
  version: "v17"
  image_dir: "images/${version}"
  image_url: "https://cyoa.ltouroumov.ch/images/${version}"

input: "project-${version}.json"

steps:
  - name: "Validate project"
    uses: check

  - name: "Enforce schema"
    uses: patch
    with:
      patches:
        - cyoa.patch.schema:ApplySchema
        - cyoa.patch:TrimSpaces

  - name: "Extract embedded images"
    uses: media.extract
    with:
      export_dir: "${image_dir}"
      export_url: "${image_url}"

  - name: "Save project"
    uses: save

  - name: "Export to viewer"
    uses: export
    with:
      output_dir: "viewer"
```

### Top-level Fields

| Field     | Type   | Required | Description                                    |
|-----------|--------|----------|------------------------------------------------|
| `version` | int    | yes      | Build file format version (must be `1`).       |
| `input`   | string | yes      | Path to the input project JSON file.           |
| `vars`    | map    | no       | Variable definitions for substitution.         |
| `steps`   | list   | yes      | Ordered list of build steps.                   |

### Step Fields

| Field      | Type                   | Required | Description                                       |
|------------|------------------------|----------|---------------------------------------------------|
| `name`     | string                 | yes      | Human-readable label for logging.                 |
| `uses`     | string                 | yes      | Step type identifier (see built-in steps below).  |
| `with`     | map                    | no       | Parameters passed to the step handler.            |
| `if`       | string                 | no       | Condition; step is skipped when falsy.            |
| `on_error` | `stop` \| `continue`   | no       | Override default error behavior for this step.    |

### Variable Substitution

Variables defined in `vars` are substituted in all string values using `${var}` syntax. Variables can reference other variables (resolved in definition order, with cycle detection). CLI `--var` arguments override file variables.

## Built-in Steps

### `check` -- Project Validation

Runs `check_project()` and reports duplicate IDs, empty IDs, missing requirements, and backpack issues.

**Parameters:** none

### `patch` -- Apply Patches

Dynamically loads and applies `PatchBase` subclasses via `visit_project()`.

**Parameters:**

| Param     | Type       | Required | Description                             |
|-----------|------------|----------|-----------------------------------------|
| `patches` | list[str]  | yes      | Patch references as `module:ClassName`. |

### `media.extract` -- Extract Embedded Images

Extracts embedded (base64) images to files and downloads external images.

**Parameters:**

| Param        | Type   | Required | Description                          |
|--------------|--------|----------|--------------------------------------|
| `export_dir` | string | yes      | Directory for image files.           |
| `export_url` | string | yes      | Base URL for image references.       |

### `media.optimize` -- Optimize Images

Resizes and converts images to WebP.

**Parameters:**

| Param           | Type       | Required | Description                              |
|-----------------|------------|----------|------------------------------------------|
| `export_dir`    | string     | yes      | Directory for image files.               |
| `export_url`    | string     | yes      | Base URL for image references.           |
| `size_gte`      | float      | no       | Only optimize images larger than this KB.|
| `max_dim`       | [int, int] | no       | Maximum width and height.                |
| `optimize_urls` | bool       | no       | Re-optimize URL-referenced images.       |

### `media.clean` -- Remove Orphan Images

Deletes files in `export_dir` that are not referenced by the project.

**Parameters:**

| Param        | Type   | Required | Description                          |
|--------------|--------|----------|--------------------------------------|
| `export_dir` | string | yes      | Directory for image files.           |
| `export_url` | string | yes      | Base URL for image references.       |

### `save` -- Save Project

Writes the in-memory project back to the input file as pretty-printed JSON.

**Parameters:** none

### `export` -- Export Minified Project

Writes the project as minified JSON to `output_dir/project.json`.

**Parameters:**

| Param        | Type   | Required | Description                |
|--------------|--------|----------|----------------------------|
| `output_dir` | string | yes      | Output directory.          |

### `powers` -- Export Powers CSV

Exports power data to a CSV file.

**Parameters:**

| Param  | Type   | Required | Description       |
|--------|--------|----------|-------------------|
| `output` | string | yes    | Output file path. |

### `format` -- Re-serialize Project

Normalizes key order in the in-memory project. Useful mid-pipeline.

**Parameters:**

| Param    | Type | Required | Description                        |
|----------|------|----------|------------------------------------|
| `minify` | bool | no       | Use compact JSON serialization.    |

## Error Handling

- **Step-level**: Each step returns a `StepResult`. Uncaught exceptions are caught by the engine and converted to a failed result.
- **Pipeline-level**: By default, the engine stops on the first failed step. Use `--continue-on-error` or per-step `on_error: continue` to override.
- **Reporting**: After execution, the engine prints a summary table:

```
Build Summary
┌───┬──────────────────────────┬─────────┬────────┐
│ # │ Step                     │ Type    │ Status │
├───┼──────────────────────────┼─────────┼────────┤
│ 1 │ Validate project         │ check   │ PASS   │
│ 2 │ Enforce schema           │ patch   │ PASS   │
│ 3 │ Extract embedded images  │ media   │ PASS   │
│ 4 │ Save project             │ save    │ PASS   │
│ 5 │ Export to viewer         │ export  │ PASS   │
└───┴──────────────────────────┴─────────┴────────┘
Build completed successfully (5/5 steps passed, 0 skipped)
```

## Architecture

### Package Layout

```
cyoa/
  build/
    __init__.py          # Package marker
    engine.py            # BuildEngine: load, resolve, execute pipeline
    context.py           # BuildContext: in-memory project state + vars
    errors.py            # BuildError exception
    loader.py            # YAML parsing, validation, variable resolution
    registry.py          # StepHandler ABC, StepResult, StepRegistry
    steps/
      __init__.py        # Registers all built-in step handlers
      check.py           # check
      patch.py           # patch
      media.py           # media.extract, media.optimize, media.clean
      save.py            # save
      export.py          # export
      powers.py          # powers
      format.py          # format
  ops/
    patch_loader.py      # Shared dynamic patch class loading
```

### Key Components

**`BuildContext`** -- Mutable state flowing through the pipeline: project dict, resolved variables, input path, working directory, and rich console.

**`StepHandler`** -- Abstract base class. Subclasses define a `step_type` string and implement `execute(context, params) -> StepResult`.

**`StepRegistry`** -- Maps step type identifiers to handler classes. Built-in steps are registered at import time in `cyoa/build/steps/__init__.py`.

**`BuildEngine`** -- Orchestrates the pipeline: parses the build file, resolves variables, loads the project, and executes steps in sequence.

### Step-to-Ops Mapping

Each built-in step delegates to existing functions in `cyoa.ops` and `cyoa.patch`. Steps contain only orchestration logic, not business logic.

| Step type        | Underlying function(s)                                              |
|------------------|---------------------------------------------------------------------|
| `check`          | `cyoa.ops.project.check_project()`                                 |
| `patch`          | `cyoa.ops.project.visit_project()` + `cyoa.ops.patch_loader`       |
| `media.extract`  | `cyoa.ops.media.extract_embedded_image()`, `download_external_image()` |
| `media.optimize` | `cyoa.ops.media.optimize_embedded_image()`, `optimize_file_image()` |
| `media.clean`    | `cyoa.ops.media.list_all_images()` + filesystem cleanup            |
| `save`           | `json.dump()` to `context.input_path`                              |
| `export`         | `json.dump()` (minified) to `output_dir/project.json`              |
| `powers`         | `cyoa.ops.project.collect_power_rows()`, `write_powers_csv()`      |
| `format`         | `json.loads(json.dumps())` with `sort_keys=True`                   |

## Extending the Build System

Register custom step handlers by subclassing `StepHandler` and calling `registry.register()`:

```python
from cyoa.build.registry import registry, StepHandler, StepResult

class MyCustomStep(StepHandler):
  step_type = "my_custom"

  def execute(self, context, params):
    # ...
    return StepResult(success=True)

registry.register(MyCustomStep)
```

Then reference it in the build file:

```yaml
steps:
  - name: "Custom step"
    uses: my_custom
```
