from pathlib import Path
import random
import re
import string

from cyoa.tools.lib import ToolBase, ProjectUtilsMixin, console


def generate_id(length: int):
  """Generate a random string of lowercase letters and digits"""
  return "".join(random.choices(string.ascii_lowercase + string.digits, k=length))


STANDARD_ID_RE = re.compile(r"^[a-zA-Z0-9_-]{4,16}$")


class KeyObjectsTool(ToolBase, ProjectUtilsMixin):
  name = "script.key_objects"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Normalize object IDs to standard format")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)

  def run(self, args):
    self._load_project(args.project_file)

    # Update all objects to have a standard ID
    update_map = {}
    for row_data in self.project["rows"]:
      for obj_data in row_data["objects"]:
        if STANDARD_ID_RE.fullmatch(obj_data["id"]):
          # console.log(f"Object [i]{obj_data['title']}[/] in [i]{row_data['title']}[/] has a standard ID '[b]{obj_data['id']}[/]'")
          continue

        console.log(
          f"Object [i]{obj_data['title']}[/] in [i]{row_data['title']}[/] has a  ID '[b]{obj_data['id']}[/]' (len: {len(obj_data['id'])})"
        )
        new_id = generate_id(8)
        update_map[obj_data["id"]] = new_id
        obj_data["id"] = new_id

    console.log(f"[green]Updated {len(update_map)} objects")
    # Update all links to use the new IDs

    # self._save_project(args.project_file)
