"""Business logic for object operations.

This module contains pure functions for manipulating objects in CYOA rows:
copying, removing, inserting, and listing. All functions operate on the
project dict (in-memory data structure) but do not perform I/O or console
output.
"""
import copy
from dataclasses import dataclass

from cyoa.ops.common import find_first, find_first_index


@dataclass
class ObjectEntry:
    """One object in a row with its computed metadata."""
    index: int
    object_id: str
    title: str
    scores: dict[str, "ScoreInfo"]   # point_name -> ScoreInfo


@dataclass
class ScoreInfo:
    """Score value and sign for one point type."""
    value: int
    sign: str          # "Gain" or "Cost"


def list_objects(project: dict, row_id: str) -> list[ObjectEntry]:
    """Return a flat list of objects in the given row with their scores.

    Args:
        project: The CYOA project dict
        row_id: ID of the row to list objects from

    Returns:
        List of ObjectEntry instances with index, ID, title, and scores

    Raises:
        KeyError: If row_id is not found in the project
    """
    point_types_map = {pt['id']: pt['name'] for pt in project['pointTypes']}
    row_data = find_first(project['rows'], lambda r: r['id'] == row_id)
    if row_data is None:
        raise KeyError(f"Row {row_id!r} not found")

    result = []
    for idx, obj in enumerate(row_data['objects']):
        scores = {}
        for score in obj['scores']:
            pt_name = point_types_map[score['id']]
            val = int(score['value'])
            scores[pt_name] = ScoreInfo(
                value=abs(val),
                sign="Gain" if val < 0 else "Cost"
            )
        result.append(ObjectEntry(
            index=idx,
            object_id=obj['id'],
            title=obj['title'],
            scores=scores
        ))
    return result


def copy_objects_from_row(
    row_data: dict,
    object_ids: list = None,
    object_ranges: list = None,
    object_all: bool = False
) -> list[dict]:
    """Copy objects from a row based on selection criteria.

    Returns a deep copy of selected objects. The original row is not modified.

    Args:
        row_data: The row dict containing objects
        object_ids: List of object IDs to copy
        object_ranges: List of range strings like "0-5" (inclusive)
        object_all: If True, copy all objects

    Returns:
        List of object dicts (deep copies)
    """
    if object_all:
        return copy.deepcopy(row_data['objects'])

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


def remove_objects_from_row(
    row_data: dict,
    object_ids: list = None,
    object_ranges: list = None,
    object_all: bool = False
) -> None:
    """Remove objects from a row based on selection criteria.

    Mutates row_data['objects'] in place.

    Args:
        row_data: The row dict containing objects
        object_ids: List of object IDs to remove
        object_ranges: List of range strings like "0-5" (inclusive)
        object_all: If True, remove all objects
    """
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


def insert_objects_in_row(
    row_data: dict,
    objects_data: list[dict],
    after_idx: int = None,
    after_obj: str = None
) -> None:
    """Insert objects into a row at a specific position.

    Mutates row_data['objects'] in place.

    Args:
        row_data: The row dict containing objects
        objects_data: List of object dicts to insert
        after_idx: Insert after this index (0-based)
        after_obj: Insert after the object with this ID

    If neither after_idx nor after_obj is provided, objects are appended
    to the end of the row.
    """
    if after_idx is not None:
        insert_index = after_idx + 1
        row_data['objects'][insert_index:insert_index] = objects_data
    elif after_obj:
        insert_index = find_first_index(row_data['objects'],
                                        lambda obj: obj['id'] == after_obj)
        if insert_index is not None:
            insert_index += 1
            row_data['objects'][insert_index:insert_index] = objects_data
        else:
            # If object not found, append to end
            row_data['objects'].extend(objects_data)
    else:
        row_data['objects'].extend(objects_data)
