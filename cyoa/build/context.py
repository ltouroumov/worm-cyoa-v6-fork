"""Build context for pipeline execution."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from rich.console import Console


@dataclass
class BuildContext:
  """Mutable state container for build pipeline execution.

  Attributes:
    project: In-memory project data (dict representation of CYOA JSON)
    vars: Resolved variable substitutions (key -> value)
    input_path: Path to the input project file
    work_dir: Working directory (directory containing build file)
    console: Rich console for formatted output
  """

  project: dict
  vars: dict[str, str]
  input_path: Path
  work_dir: Path
  console: Console
