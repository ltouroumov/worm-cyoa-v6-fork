import functools
import json
from abc import ABC
from pathlib import Path
from typing import Sequence

from rich.console import Console

from cyoa.ops.common import find_first_index

__all__ = (
  "console",
  "ToolBase",
  "ProjectUtilsMixin",
  "update_row_data",
  "update_obj_data",
)

console = Console()


class ToolBase(ABC):
  name: str

  @classmethod
  def setup_parser(cls, parent):
    raise NotImplementedError

  def run(self, args):
    raise NotImplementedError


class ProjectUtilsMixin:
  project: dict = None

  def _load_project(self, project_file: Path):
    console.log(f"Loading Project from {project_file}")
    self.project = self._load_file(project_file)

  def _load_file(self, path: Path):
    if not path.exists():
      raise Exception(f"Project file missing")

    with path.open(mode="r", encoding="utf-8") as fd:
      return json.load(fd)

  def _save_project(self, project_file: Path, neat: bool = True):
    console.log(f"Saving project to {project_file}")
    with project_file.open(mode="w+") as fd:
      if neat:
        json.dump(self.project, fd, indent=2, sort_keys=True)
      else:
        json.dump(self.project, fd, separators=(",", ":"), sort_keys=True)


def update_row_data(project, row_id: str, lens):
  if (
    row_idx := find_first_index(
      project["rows"], lambda row: row.get("id", None) == row_id
    )
  ) is None:
    return

  row_data = project["rows"][row_idx]
  if isinstance(lens, Sequence):
    row_data = functools.reduce(lambda acc, lens: lens(acc), lens, row_data)
  else:
    row_data = lens(row_data)

  project["rows"][row_idx] = row_data


def update_obj_data(project, row_id: str, obj_id: str, lens):
  if (
    row_idx := find_first_index(
      project["rows"], lambda row: row.get("id", None) == row_id
    )
  ) is None:
    return

  row_data = project["rows"][row_idx]
  if (
    obj_idx := find_first_index(
      row_data["objects"], lambda obj: obj.get("id", None) == obj_id
    )
  ) is None:
    return

  obj_data = project["rows"][row_idx]["objects"][obj_idx]
  if isinstance(lens, (list, tuple)):
    obj_data = functools.reduce(lambda acc, lens: lens(acc), lens, obj_data)
  else:
    obj_data = lens(obj_data)

  project["rows"][row_idx]["objects"][obj_idx] = obj_data
