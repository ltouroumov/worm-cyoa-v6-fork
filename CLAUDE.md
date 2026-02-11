# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CLI tool suite (`cyoa-tools`) for manipulating ICYOA (ICC Neo) project files -- large JSON files (46-58 MB) representing a choose-your-own-adventure game. Python 3.13, managed with `uv`.

## Commands

```bash
# Run CLI tools
uv run cyoa <command> [options]
uv run cyoa -h                          # List all commands
uv run cyoa <command> -h                # Command-specific help

# Lint and format
uv run ruff check cyoa/                 # Lint
uv run ruff check --fix cyoa/           # Lint with auto-fix
uv run ruff format cyoa/                # Format

# Install dependencies
uv sync
```

There are no tests.

## Architecture

### Layer Separation

The codebase enforces a strict separation between **business logic** (`cyoa/ops/`) and **CLI tools** (`cyoa/tools/`).

- **`cyoa/ops/`** -- Pure functions operating on plain dicts. No I/O, no console output. Designed for reuse in the build pipeline.
- **`cyoa/tools/`** -- CLI wrappers that handle argument parsing, file I/O, and console output via `rich`. Each tool class extends `ToolBase` and optionally mixes in `ProjectUtilsMixin` for project file loading/saving.

### Tool Registration

Tools are registered in the `TOOLS` tuple in `cyoa/tools/client.py`. Each tool class defines a `name` (e.g. `"row.list"`), a `setup_parser` classmethod, and a `run` method. Entry point: `cyoa.tools.client:main`.

### Patch System

`cyoa/tools/patch.py` implements a visitor pattern for transforming project data. Subclass `PatchBase` and use the `@patch(target="...")` decorator to register handlers that visit specific node types (e.g. `"object"`, `"object.score"`, `"row"`). The `visit_project` function in `cyoa/patch/__init__.py` drives traversal.

### Graph Module

`cyoa/graph/lib.py` models the project as a directed graph for analyzing power/upgrade dependency chains. Uses an ABC `Condition` hierarchy (`RequiredCondition`, `IncompatibleCondition`, `AndCondition`, `OrCondition`).

### Build System (WIP)

Spec in `cyoa/build.md`. Replaces the imperative `make.sh` with declarative YAML pipelines (`build.yaml`). In-memory processing with a `BuildEngine` / `StepHandler` / `StepRegistry` architecture. Implementation is in progress on the `feature/build-system` branch.

## Code Style

- **Indent:** 2 spaces (configured in `pyproject.toml` under `[tool.ruff]`)
- **Quotes:** Double quotes
- **Formatter/Linter:** Ruff
