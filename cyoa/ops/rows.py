"""Row operations — business logic layer.

This module contains pure data transformations for row-level operations.
Functions receive plain Python data structures and return results without
performing I/O or console output.
"""

import copy
from dataclasses import dataclass

from cyoa.ops.common import find_first, find_first_index, gen_id


@dataclass
class RowEntry:
  """A single row entry for listing."""

  row_id: str
  title: str
  object_count: int


@dataclass
class SplitResult:
  """Result of splitting a row."""

  original_row_id: str
  original_count: int
  new_row_id: str
  new_count: int


@dataclass
class MergeResult:
  """Result of merging rows."""

  dest_row_id: str
  merged_row_ids: list[str]
  total_objects: int


@dataclass
class RedistributeResult:
  """Result of redistributing objects across rows."""

  assigned_rows: list[dict]  # the row dicts that received objects
  rows_created: list[str]  # IDs of newly created rows
  rows_removed: list[str]  # IDs of removed excess rows


@dataclass
class BalanceResult:
  """Result of balancing a single group."""

  title: str
  total_objects: int
  pages_needed: int
  pages_existing: int
  redistribute_result: RedistributeResult


def list_rows(project: dict) -> list[RowEntry]:
  """Return a flat list of all rows with their object counts."""
  result = []
  for row_data in project["rows"]:
    result.append(
      RowEntry(
        row_id=row_data["id"],
        title=row_data["title"],
        object_count=len(row_data["objects"]),
      )
    )
  return result


def remove_rows_from_project(project: dict, row_ids: list[str]) -> None:
  """Remove rows from project by their IDs. Mutates project in place."""
  for row_id in row_ids:
    row_idx = find_first_index(project["rows"], lambda row: row["id"] == row_id)
    if row_idx is not None:
      del project["rows"][row_idx]


def split_row(
  project: dict,
  row_id: str,
  *,
  after_obj: str | None = None,
  after_idx: int | None = None,
  before: bool = False,
) -> SplitResult:
  """Split a row at the given point. Mutates project['rows'] in place.

  Args:
      project: The project dict
      row_id: ID of the row to split
      after_obj: Split after this object ID (mutually exclusive with after_idx)
      after_idx: Split after this index (mutually exclusive with after_obj)
      before: Split before the object

  Returns:
      SplitResult with details about the split

  Raises:
      KeyError: If row_id or after_obj is not found
      IndexError: If after_idx is out of range
      ValueError: If neither or both split points are provided
  """
  if (after_obj is None) == (after_idx is None):
    raise ValueError("Must provide exactly one of after_obj or after_idx")

  row_idx = find_first_index(project["rows"], lambda r: r["id"] == row_id)
  if row_idx is None:
    raise KeyError(f"Row {row_id!r} not found")

  row_data = project["rows"][row_idx]

  if after_obj is not None:
    split_idx = find_first_index(row_data["objects"], lambda o: o["id"] == after_obj)
    if split_idx is None:
      raise KeyError(f"Object {after_obj!r} not found in row {row_id!r}")
  else:
    split_idx = after_idx
    if split_idx < 0 or split_idx >= len(row_data["objects"]):
      raise IndexError(f"Index {split_idx} out of range for row {row_id!r}")

  new_row = copy.deepcopy(row_data)
  new_row["id"] = gen_id()
  if before:
    new_row["objects"] = row_data["objects"][split_idx:]
    row_data["objects"] = row_data["objects"][:split_idx]
  else:
    new_row["objects"] = row_data["objects"][split_idx + 1 :]
    row_data["objects"] = row_data["objects"][: split_idx + 1]

  project["rows"].insert(row_idx + 1, new_row)

  return SplitResult(
    original_row_id=row_id,
    original_count=len(row_data["objects"]),
    new_row_id=new_row["id"],
    new_count=len(new_row["objects"]),
  )


def merge_rows(project: dict, from_row_ids: list[str], dest_row_id: str) -> MergeResult:
  """Merge multiple rows into a destination row. Mutates project in place.

  Args:
      project: The project dict
      from_row_ids: List of row IDs to merge from
      dest_row_id: ID of the destination row

  Returns:
      MergeResult with details about the merge

  Raises:
      KeyError: If any row ID is not found
  """
  dest_row_data = find_first(project["rows"], lambda row: row["id"] == dest_row_id)
  if dest_row_data is None:
    raise KeyError(f"Destination row {dest_row_id!r} not found")

  for from_row_id in from_row_ids:
    row_data = find_first(project["rows"], lambda row: row["id"] == from_row_id)
    if row_data is None:
      raise KeyError(f"Source row {from_row_id!r} not found")
    dest_row_data["objects"].extend(row_data["objects"])

  remove_rows_from_project(project, row_ids=from_row_ids)

  return MergeResult(
    dest_row_id=dest_row_id,
    merged_row_ids=from_row_ids,
    total_objects=len(dest_row_data["objects"]),
  )


def redistribute_to_rows(
  project: dict,
  row_ids: list[str],
  pages: list[list[dict]],
  title: str,
  template_row: dict,
) -> RedistributeResult:
  """Assign pages of objects to physical rows, creating/removing rows as needed.

  Mutates project['rows'] and the row_ids list in place.

  Args:
      project: The project dict
      row_ids: List of existing row IDs (will be mutated)
      pages: List of pages, each page is a list of object dicts
      title: Base title for the rows
      template_row: Template row dict to use for creating new rows

  Returns:
      RedistributeResult with details about rows created/removed
  """
  num_pages = len(pages)
  num_existing = len(row_ids)
  rows_created = []
  rows_removed = []

  # Remove excess rows
  if num_pages < num_existing:
    excess_ids = row_ids[num_pages:]
    remove_rows_from_project(project, row_ids=excess_ids)
    del row_ids[num_pages:]
    rows_removed.extend(excess_ids)

  # Create missing rows
  if num_pages > num_existing:
    last_row_idx = find_first_index(
      project["rows"], lambda r, rid=row_ids[-1]: r["id"] == rid
    )
    for i in range(num_existing, num_pages):
      new_row = copy.deepcopy(template_row)
      new_row["id"] = gen_id()
      new_row["objects"] = []
      last_row_idx += 1
      project["rows"].insert(last_row_idx, new_row)
      row_ids.append(new_row["id"])
      rows_created.append(new_row["id"])

  # Assign objects and titles
  assigned = []
  for i, page_objects in enumerate(pages):
    row = find_first(project["rows"], lambda r, rid=row_ids[i]: r["id"] == rid)
    row["objects"] = page_objects
    if num_pages == 1:
      row["title"] = title
    else:
      row["title"] = f"{title} (Page {i + 1})"
    assigned.append(row)

  return RedistributeResult(
    assigned_rows=assigned,
    rows_created=rows_created,
    rows_removed=rows_removed,
  )


def balance_groups(project: dict, group: dict) -> BalanceResult:
  """Balance objects across rows in a group according to max_objects constraint.

  This function pools all objects from the specified rows, redistributes them
  across pages using the layout logic, and updates the project with the new
  distribution. It also updates the group dict with the new row IDs.

  Args:
      project: The project dict
      group: Group config dict with keys:
          - title: str (group title)
          - max_objects: int (max objects per page)
          - rows: list[str] (row IDs in this group, will be mutated)

  Returns:
      BalanceResult with details about the rebalancing

  Raises:
      KeyError: If any row ID is not found
  """
  from cyoa.ops.layout import distribute_objects

  title = group["title"]
  max_objects = group["max_objects"]
  row_ids = group["rows"]

  # Resolve existing physical rows
  rows = []
  for row_id in row_ids:
    row = find_first(project["rows"], lambda r, rid=row_id: r["id"] == rid)
    if row is None:
      raise KeyError(f"Row {row_id!r} not found in group {title!r}")
    rows.append(row)

  # Use first row as the template for new rows and for default width
  template_row = rows[0]
  row_default_width = template_row.get("objectWidth", "")

  # Pool all objects in order
  all_objects = []
  for row in rows:
    all_objects.extend(row["objects"])

  # Distribute into pages
  pages = distribute_objects(all_objects, max_objects, row_default_width)

  # Redistribute to rows
  redistribute_result = redistribute_to_rows(
    project, row_ids, pages, title, template_row
  )

  return BalanceResult(
    title=title,
    total_objects=len(all_objects),
    pages_needed=len(pages),
    pages_existing=len(rows),
    redistribute_result=redistribute_result,
  )
