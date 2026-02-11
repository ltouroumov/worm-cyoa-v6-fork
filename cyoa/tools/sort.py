"""DEPRECATED: Sort utilities have moved to cyoa.ops.sort.

This module is kept for backward compatibility only.
Import from cyoa.ops.sort instead.
"""

# Re-export for backward compatibility
from cyoa.ops.sort import SortContext, make_sort_key

__all__ = ['SortContext', 'make_sort_key']
