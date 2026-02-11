from os import makedirs
from pathlib import Path

from cyoa.tools.lib import ToolBase, ProjectUtilsMixin


class BuildTool(ToolBase, ProjectUtilsMixin):
  name = "build"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Build project output to a directory")
    parser.add_argument("--input", dest="project_file", type=Path, required=True)
    parser.add_argument("--output", dest="output_dir", type=Path, required=True)

  def run(self, args):
    self._load_project(args.project_file)

    if dest_dir := args.output_dir:
      makedirs(dest_dir, exist_ok=True)

    self._save_project(dest_dir / "project.json", neat=False)
