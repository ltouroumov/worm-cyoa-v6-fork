import functools
import inspect
from dataclasses import dataclass
from typing import Any


@dataclass
class SortContext:
    project: dict[str, Any]
    point_types: dict[str, Any]
    groups: dict[str, Any]


def make_sort_key(comparator, row, context, args=None, rows=None):
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
