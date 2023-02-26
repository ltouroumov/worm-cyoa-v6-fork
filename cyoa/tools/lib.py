import copy
import json
import random
import string
from abc import ABC
from pathlib import Path

from rich.console import Console

__all__ = (
    'console',
    'ToolBase', 'ProjectUtilsMixin',
    'find_first', 'find_first_index', 'gen_id',
    'copy_objects_from_row', 'remove_objects_from_row', 'insert_objects_in_row'
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

    def _save_project(self, project_file: Path):
        console.log(f"Saving project to {project_file}")
        with project_file.open(mode='w+') as fd:
            json.dump(self.project, fd, indent=2)


def find_first(values, f):
    for value in values:
        if f(value):
            return value
    return None


def find_first_index(values, f):
    for index, value in enumerate(values):
        if f(value):
            return index
    return None


def gen_id():
    return str.join('', random.choices(
        string.ascii_lowercase + string.digits,
        k=4
    ))


def remove_rows_from_project(project, row_ids):
    for row_id in row_ids:
        row_idx = find_first_index(project['rows'],
                                   lambda row: row['id'] == row_id)

        del project['rows'][row_idx]

def copy_objects_from_row(row_data, object_ids: list = None, object_ranges: list = None, object_all: bool = False):
    if object_all:
        return copy.deepcopy(row_data['objects'])
    else:
        objects_data = []
        if object_ids and len(object_ids) > 0:
            objects_data.extend([
                object_data
                for object_data in row_data['objects']
                if object_data['id'] in object_ids
            ])

        if object_ranges and len(object_ranges) > 0:
            for object_range in object_ranges:
                range_start, range_end = map(int, str.split(object_range, '-'))
                objects_data.extend(
                    row_data['objects'][range_start:range_end + 1])

        return objects_data


def remove_objects_from_row(row_data, object_ids: list = None, object_ranges: list = None, object_all: bool = False):
    if object_all:
        list.clear(row_data['objects'])

    if object_ranges and len(object_ranges) > 0:
        # Sort ranges in from last to first otherwise the indices get messed up
        sorted_ranges = list(sorted(
            (tuple(map(int, str.split(object_range, '-')))
             for object_range in object_ranges),
            reverse=True
        ))
        for range_start, range_end in sorted_ranges:
            del row_data['objects'][range_start:range_end + 1]

    if object_ids and len(object_ids) > 0:
        row_data['objects'] = [
            object_data
            for object_data in row_data['objects']
            if object_data['id'] not in object_ids
        ]


def insert_objects_in_row(row_data, objects_data, after_idx: int = None, after_obj: str = None):
    if after_idx:
        insert_index = after_idx + 1
        row_data['objects'][insert_index:insert_index] = objects_data
    elif after_obj:
        insert_index = find_first_index(row_data['objects'],
                                        lambda obj: obj['id'] == after_obj)
        row_data['objects'][insert_index:insert_index] = objects_data
    else:
        row_data['objects'].extend(objects_data)


def update_row_data(project, row_id: str, lens):
    if (row_idx := find_first_index(project['rows'], lambda row: row.get('id', None) == row_id)) is None:
        return

    row_data = project['rows'][row_idx]
    project['rows'][row_idx] = lens(row_data)


def update_obj_data(project, row_id: str, obj_id: str, lens):
    if (row_idx := find_first_index(project['rows'], lambda row: row.get('id', None) == row_id)) is None:
        return

    row_data = project['rows'][row_idx]
    if (obj_idx := find_first_index(row_data['objects'], lambda obj: obj.get('id', None) == obj_id)) is None:
        return

    obj_data = project['rows'][row_idx]['objects'][obj_idx]
    project['rows'][row_idx]['objects'][obj_idx] = lens(obj_data)
