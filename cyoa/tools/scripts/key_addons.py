from pathlib import Path
import random
import string

from cyoa.tools.lib import ToolBase, ProjectUtilsMixin, console


def generate_id(length: int):
  """Generate a random string of lowercase letters and digits"""
  return "".join(random.choices(string.ascii_lowercase + string.digits, k=length))


class KeyAddonsTool(ToolBase, ProjectUtilsMixin):
  name = "script.key_addons"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Add IDs to all addons in the project")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)

  def run(self, args):
    self._load_project(args.project_file)

    for row_data in self.project["rows"]:
      for obj_data in row_data["objects"]:
        for addon_data in obj_data["addons"]:
          if addon_data["id"] != "":
            continue
          addon_data["id"] = generate_id(8)
          console.log(
            f"[green]Added ID {addon_data['id']} to addon {addon_data['title']}"
          )
    self._save_project(args.project_file)
