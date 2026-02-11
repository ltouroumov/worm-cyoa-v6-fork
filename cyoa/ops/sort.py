"""Sorting operations for CYOA objects and rows.

This module provides business logic for sorting objects within rows or across
multiple rows. It handles:
- Loading comparator functions from module paths
- Parsing and applying interval-based sorting
- Single-row and composite (multi-row) sorting
- Lint mode to verify sort order
"""

import functools
import importlib
import inspect
import re
from dataclasses import dataclass
from typing import Any, Callable

from cyoa.ops.common import find_first
from cyoa.ops.layout import distribute_objects
from cyoa.ops.rows import redistribute_to_rows, RedistributeResult


@dataclass
class SortContext:
    """Context information passed to comparator functions."""
    project: dict[str, Any]
    point_types: dict[str, Any]
    groups: dict[str, Any]


@dataclass
class LintDiff:
    """One row in a lint comparison."""
    index: int
    current_title: str
    expected_title: str
    matches: bool


@dataclass
class SortResult:
    """Outcome of sorting a single row."""
    row_id: str
    sorted_objects: list[dict]        # the objects in their new order
    lint_diffs: list[LintDiff]        # comparison of current vs expected
    is_sorted: bool                   # True if already in correct order


@dataclass
class CompositeSortResult:
    """Outcome of sorting objects across multiple rows."""
    title: str
    row_ids: list[str]                # updated list of row IDs after redistribute
    sorted_objects: list[dict]        # all objects in sorted order
    pages: list[list[dict]]           # objects distributed across pages
    lint_diffs: list[LintDiff] | None # comparison (only in lint mode)
    is_sorted: bool                   # True if already in correct order
    redistribute_result: RedistributeResult | None  # only populated when not dry_run/lint


def make_sort_key(comparator: Callable, row: dict, context: SortContext,
                  args: dict[str, str] | None = None,
                  rows: list[dict] | None = None) -> Callable:
    """Create a sort key function from a comparator.

    Inspects the comparator signature and passes available context as needed.
    The comparator receives (a, b) plus any of: row, context/ctx, args, rows.
    """
    sig = inspect.signature(comparator)
    params = set(sig.parameters.keys())

    extra = {}
    if 'row' in params:
        extra['row'] = row
    if 'context' in params:
        extra['context'] = context
    elif 'ctx' in params:
        extra['ctx'] = context
    if 'args' in params:
        extra['args'] = args or {}
    if 'rows' in params:
        extra['rows'] = rows or []

    def cmp(a, b):
        return comparator(a, b, **extra)

    return functools.cmp_to_key(cmp)


def load_comparator(rule: str) -> Callable:
    """Load a comparator function from a module:function string.

    Args:
        rule: String like "cyoa.sort:lexicographic"

    Returns:
        The comparator function

    Raises:
        ValueError: If the module cannot be loaded or function not found
    """
    parts = rule.split(':', 1)
    if len(parts) != 2:
        raise ValueError(f"Invalid rule format {rule!r}, expected module:function")

    module_name, func_name = parts

    try:
        module_inst = importlib.import_module(module_name)
    except Exception as exc:
        raise ValueError(f"Cannot load module {module_name!r}") from exc

    comparator = getattr(module_inst, func_name, None)
    if comparator is None or not callable(comparator):
        raise ValueError(
            f"Cannot find callable {module_name}.{func_name}")

    return comparator


def parse_interval(objects: list[dict], interval: str) -> tuple[int, int]:
    """Parse "BEFORE:AFTER" into (start, end) indices for slicing.

    Boundaries are exclusive. Returns the half-open range [start, end)
    of the sortable region within *objects*.

    Args:
        objects: List of object dicts with 'id' keys
        interval: String like "obj1:obj2" or "*:obj2" or "obj1:*"

    Returns:
        Tuple of (start, end) indices (half-open interval)

    Raises:
        ValueError: If interval syntax is invalid or boundaries not found
    """
    parts = interval.split(':', 1)
    if len(parts) != 2:
        raise ValueError(f"Invalid interval syntax {interval!r}, "
                        f"expected BEFORE:AFTER")
    before_id, after_id = parts

    if before_id == '*':
        start = 0
    else:
        idx = next((i for i, o in enumerate(objects)
                   if o['id'] == before_id), None)
        if idx is None:
            raise ValueError(
                f"Interval boundary {before_id!r} not found in objects")
        start = idx + 1

    if after_id == '*':
        end = len(objects)
    else:
        idx = next((i for i, o in enumerate(objects)
                   if o['id'] == after_id), None)
        if idx is None:
            raise ValueError(
                f"Interval boundary {after_id!r} not found in objects")
        end = idx

    if start > end:
        raise ValueError(
            f"Invalid interval {interval!r}: start ({start}) > end ({end})")
    return (start, end)


def resolve_intervals(objects: list[dict], intervals: list[str]) -> list[tuple[int, int]]:
    """Parse interval strings and return sorted, validated ranges.

    Args:
        objects: List of object dicts
        intervals: List of interval strings

    Returns:
        Sorted list of (start, end) tuples

    Raises:
        ValueError: If intervals overlap
    """
    ranges = [parse_interval(objects, iv) for iv in intervals]
    ranges.sort()
    for i in range(1, len(ranges)):
        if ranges[i][0] < ranges[i - 1][1]:
            raise ValueError(
                f"Overlapping intervals: indices {ranges[i - 1]} "
                f"and {ranges[i]}")
    return ranges


def apply_intervals(objects: list[dict], ranges: list[tuple[int, int]],
                   sort_key: Callable) -> list[dict]:
    """Sort objects within each range independently, return new list.

    *ranges* is a list of (start, end) half-open intervals, assumed
    non-overlapping and sorted by start. Objects outside ranges are
    unchanged.

    Args:
        objects: List of object dicts to sort
        ranges: List of (start, end) tuples defining sortable regions
        sort_key: Sort key function for sorted()

    Returns:
        New list with objects sorted within specified ranges
    """
    result = []
    prev_end = 0
    for start, end in ranges:
        # Unsorted gap before this range
        result.extend(objects[prev_end:start])
        # Sorted slice
        result.extend(sorted(objects[start:end], key=sort_key))
        prev_end = end
    # Unsorted tail
    result.extend(objects[prev_end:])
    return result


def sort_row(project: dict, row_id: str, comparator: Callable,
             sort_args: dict[str, str] | None = None,
             intervals: list[str] | None = None,
             context: SortContext | None = None) -> SortResult:
    """Sort one row and return a SortResult (does not mutate project in-place).

    Args:
        project: The project dict
        row_id: ID of the row to sort
        comparator: Comparator function (a, b) -> int
        sort_args: Optional dict of arguments to pass to comparator
        intervals: Optional list of interval strings for partial sorting
        context: Optional sort context (defaults to building from project)

    Returns:
        SortResult with sorted objects and lint information

    Raises:
        KeyError: If row not found
    """
    row_data = find_first(project['rows'], lambda r: r['id'] == row_id)
    if row_data is None:
        raise KeyError(f"Row {row_id!r} not found")

    if context is None:
        context = SortContext(
            project=project,
            point_types={pt['id']: pt for pt in project['pointTypes']},
            groups={g['id']: g for g in project['groups']},
        )

    sort_key = make_sort_key(comparator, row_data, context, args=sort_args)
    objects = row_data['objects']

    if intervals:
        ranges = resolve_intervals(objects, intervals)
        sorted_objects = apply_intervals(objects, ranges, sort_key)
    else:
        sorted_objects = sorted(objects, key=sort_key)

    original_ids = [o['id'] for o in objects]
    sorted_ids = [o['id'] for o in sorted_objects]
    is_sorted = (original_ids == sorted_ids)

    lint_diffs = [
        LintDiff(index=i,
                current_title=cur['title'],
                expected_title=exp['title'],
                matches=(cur['id'] == exp['id']))
        for i, (cur, exp) in enumerate(zip(objects, sorted_objects))
    ]

    return SortResult(
        row_id=row_id,
        sorted_objects=sorted_objects,
        lint_diffs=lint_diffs,
        is_sorted=is_sorted,
    )


def sort_composite_rows(project: dict, row_ids: list[str], max_objects: int,
                       comparator: Callable,
                       sort_args: dict[str, str] | None = None,
                       intervals: list[str] | None = None,
                       context: SortContext | None = None,
                       title: str | None = None,
                       apply_changes: bool = False) -> CompositeSortResult:
    """Sort objects across multiple rows, then redistribute into pages.

    Args:
        project: The project dict
        row_ids: List of row IDs to sort across
        max_objects: Maximum objects per page/row
        comparator: Comparator function (a, b) -> int
        sort_args: Optional dict of arguments to pass to comparator
        intervals: Optional list of interval strings for partial sorting
        context: Optional sort context (defaults to building from project)
        title: Optional title for the composite group (derived from first row if None)
        apply_changes: If True, mutate project and row_ids list

    Returns:
        CompositeSortResult with sorted objects, pages, and redistribution info

    Raises:
        KeyError: If any row not found
    """
    # Resolve all rows; fail fast if any missing
    rows = []
    for row_id in row_ids:
        row = find_first(project['rows'], lambda r, rid=row_id: r['id'] == rid)
        if row is None:
            raise KeyError(f"Row {row_id!r} not found")
        rows.append(row)

    template_row = rows[0]
    row_default_width = template_row.get('objectWidth', '')

    # Derive title from template row, stripping " (Page N)" suffix
    if title is None:
        title = re.sub(r'\s*\(Page \d+\)$', '', template_row.get('title', ''))

    # Pool all objects from all rows in order
    all_objects = []
    for row in rows:
        all_objects.extend(row['objects'])

    if context is None:
        context = SortContext(
            project=project,
            point_types={pt['id']: pt for pt in project['pointTypes']},
            groups={g['id']: g for g in project['groups']},
        )

    sort_key = make_sort_key(comparator, template_row, context,
                            args=sort_args, rows=rows)

    if intervals:
        ranges = resolve_intervals(all_objects, intervals)
        sorted_objects = apply_intervals(all_objects, ranges, sort_key)
    else:
        sorted_objects = sorted(all_objects, key=sort_key)

    original_ids = [obj['id'] for obj in all_objects]
    sorted_ids = [obj['id'] for obj in sorted_objects]
    is_sorted = (original_ids == sorted_ids)

    lint_diffs = [
        LintDiff(index=i,
                current_title=cur['title'],
                expected_title=exp['title'],
                matches=(cur['id'] == exp['id']))
        for i, (cur, exp) in enumerate(zip(all_objects, sorted_objects))
    ]

    pages = distribute_objects(sorted_objects, max_objects, row_default_width)

    redistribute_result = None
    if apply_changes:
        redistribute_result = redistribute_to_rows(
            project, row_ids, pages, title, template_row)

    return CompositeSortResult(
        title=title,
        row_ids=row_ids,
        sorted_objects=sorted_objects,
        pages=pages,
        lint_diffs=lint_diffs,
        is_sorted=is_sorted,
        redistribute_result=redistribute_result,
    )
