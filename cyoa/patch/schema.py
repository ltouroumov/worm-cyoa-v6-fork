from copy import deepcopy
import json
from pathlib import Path
import re
from cyoa.tools.lib import console
from cyoa.tools.patch import PatchBase, patch
from jsonschema import Draft202012Validator
from jsonpath_ng import parse

PROJECT_PROPS = {
  "activated": {},
}

ADDITIONAL_PROPS_MSG_RE = re.compile(
  r"Additional properties are not allowed \((?P<fields>'[^']+'(?:, '[^']+')*) (?:was|were) unexpected\)"
)


class ApplySchema(PatchBase):
  @patch(target="project")
  def patch_project(self, project: dict):
    schema_path = Path(__file__).parent / "schema.json"
    schema_text = schema_path.read_text()
    schema_data = json.loads(schema_text)

    validator = Draft202012Validator(schema_data)
    error_count = 0
    new_project = deepcopy(project)
    for error in validator.iter_errors(project):
      match error.validator:
        case "additionalProperties":
          if (match := re.match(ADDITIONAL_PROPS_MSG_RE, error.message)) is not None:
            field_names = set(
              [str.strip(fn, "' ") for fn in str.split(match.group("fields"), ",")]
            )

            console.print(
              f"remove {str.join(', ', field_names)} from {error.json_path}"
            )

            base_path_expr = parse(error.json_path)
            for json_mat in base_path_expr.find(project):
              json_val_old: dict = json_mat.value
              json_val_new: dict = {
                key: val for key, val in json_val_old.items() if key not in field_names
              }
              new_project = json_mat.full_path.update(new_project, json_val_new)

          else:
            console.log(f"{error.json_path} ({error.validator}): {error.message}")
        case _:
          console.log(f"{error.json_path} ({error.validator}): {error.message}")
      error_count += 1

    if error_count > 0:
      console.log(f"[red]{error_count} errors[/]")
    else:
      console.log("[green]no errors[/]")

    # write over the existing project data
    project.clear()
    project.update(new_project)
