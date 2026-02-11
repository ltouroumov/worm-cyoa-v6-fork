import copy
import functools
import json
from abc import ABC
from pathlib import Path
from typing import Sequence

from rich.console import Console

from cyoa.ops.common import find_first, find_first_index, gen_id, is_empty
# Re-export ops functions for backwards compatibility during transition
from cyoa.ops.objects import (
    copy_objects_from_row, remove_objects_from_row, insert_objects_in_row
)

__all__ = (
    'console',
    'ToolBase', 'ProjectUtilsMixin',
    'find_first', 'find_first_index', 'gen_id',
    'copy_objects_from_row', 'remove_objects_from_row', 'insert_objects_in_row',
    'update_row_data', 'update_obj_data',
    'redistribute_to_rows',
    'is_empty',
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

        with path.open(mode='r', encoding='utf-8') as fd:
            return json.load(fd)

    def _save_project(self, project_file: Path, neat: bool = True):
        console.log(f"Saving project to {project_file}")
        with project_file.open(mode='w+') as fd:
            if neat:
                json.dump(self.project, fd, indent=2, sort_keys=True)
            else:
                json.dump(self.project, fd, separators=(',', ':'), sort_keys=True)


def remove_rows_from_project(project, row_ids):
    for row_id in row_ids:
        row_idx = find_first_index(project['rows'],
                                   lambda row: row['id'] == row_id)

        del project['rows'][row_idx]


def update_row_data(project, row_id: str, lens):
    if (row_idx := find_first_index(project['rows'], lambda row: row.get('id', None) == row_id)) is None:
        return

    row_data = project['rows'][row_idx]
    if isinstance(lens, Sequence):
        row_data = functools.reduce(
            lambda acc, lens: lens(acc),
            lens,
            row_data
        )
    else:
        row_data = lens(row_data)

    project['rows'][row_idx] = row_data


def update_obj_data(project, row_id: str, obj_id: str, lens):
    if (row_idx := find_first_index(project['rows'], lambda row: row.get('id', None) == row_id)) is None:
        return

    row_data = project['rows'][row_idx]
    if (obj_idx := find_first_index(row_data['objects'], lambda obj: obj.get('id', None) == obj_id)) is None:
        return

    obj_data = project['rows'][row_idx]['objects'][obj_idx]
    if isinstance(lens, (list, tuple)):
        obj_data = functools.reduce(
            lambda acc, lens: lens(acc),
            lens,
            obj_data
        )
    else:
        obj_data = lens(obj_data)

    project['rows'][row_idx]['objects'][obj_idx] = obj_data


def redistribute_to_rows(project, row_ids, pages, title, template_row):
    """Assign pages of objects to physical rows, creating/removing rows as needed.

    Mutates project['rows'] and the row_ids list in place.
    Returns the list of row dicts that received objects.
    """
    num_pages = len(pages)
    num_existing = len(row_ids)

    # Remove excess rows
    if num_pages < num_existing:
        excess_ids = row_ids[num_pages:]
        remove_rows_from_project(project, row_ids=excess_ids)
        del row_ids[num_pages:]
        console.print(f"Removed {len(excess_ids)} excess row(s)")

    # Create missing rows
    if num_pages > num_existing:
        last_row_idx = find_first_index(
            project["rows"],
            lambda r, rid=row_ids[-1]: r["id"] == rid
        )
        for i in range(num_existing, num_pages):
            new_row = copy.deepcopy(template_row)
            new_row["id"] = gen_id()
            new_row["objects"] = []
            last_row_idx += 1
            project["rows"].insert(last_row_idx, new_row)
            row_ids.append(new_row["id"])
            console.print(f"Created new row {new_row['id']}")

    # Assign objects and titles
    assigned = []
    for i, page_objects in enumerate(pages):
        row = find_first(project["rows"],
                         lambda r, rid=row_ids[i]: r["id"] == rid)
        row["objects"] = page_objects
        if num_pages == 1:
            row["title"] = title
        else:
            row["title"] = f"{title} (Page {i + 1})"
        assigned.append(row)
        console.print(f"  {row['id']}: {row['title']} — {len(page_objects)} objects")

    return assigned
