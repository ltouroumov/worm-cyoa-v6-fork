"""Build tool: CLI wrapper for the declarative build system."""

import sys
from pathlib import Path

from cyoa.tools.lib import ToolBase


class BuildTool(ToolBase):
  name = "build"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Run a declarative build pipeline")
    parser.add_argument(
      "--file",
      "-f",
      dest="build_file",
      type=Path,
      default=Path("build.yaml"),
      help="Path to build YAML file (default: build.yaml)",
    )
    parser.add_argument(
      "--var",
      dest="vars",
      action="append",
      default=[],
      help="Override or add a variable (KEY=VALUE, repeatable)",
    )
    parser.add_argument(
      "--step",
      dest="steps",
      action="append",
      default=[],
      help="Run only the named step(s) (repeatable)",
    )
    parser.add_argument(
      "--copy-from",
      dest="copy_from",
      type=Path,
      default=None,
      help="Copy this file as the input before building",
    )
    parser.add_argument(
      "--dry-run",
      dest="dry_run",
      action="store_true",
      help="Parse and validate without executing",
    )
    parser.add_argument(
      "--continue-on-error",
      dest="continue_on_error",
      action="store_true",
      help="Don't stop on step failure",
    )
    parser.add_argument(
      "--verbose",
      "-v",
      dest="verbose",
      action="store_true",
      help="Increase log verbosity",
    )

  def run(self, args):
    # Import here to trigger step registration
    import cyoa.build.steps  # noqa: F401
    from cyoa.build.engine import BuildEngine

    # Parse --var KEY=VALUE arguments
    cli_vars = {}
    for var_str in args.vars:
      if "=" not in var_str:
        print(
          f"Invalid --var format: {var_str!r} (expected KEY=VALUE)", file=sys.stderr
        )
        sys.exit(1)
      key, value = var_str.split("=", maxsplit=1)
      cli_vars[key] = value

    # Build step name filter
    step_names = args.steps if args.steps else None

    # Run engine
    engine = BuildEngine()
    result = engine.run(
      build_file=args.build_file,
      cli_vars=cli_vars if cli_vars else None,
      step_names=step_names,
      dry_run=args.dry_run,
      continue_on_error=args.continue_on_error,
      copy_from=args.copy_from,
    )

    sys.exit(0 if result.success else 1)
