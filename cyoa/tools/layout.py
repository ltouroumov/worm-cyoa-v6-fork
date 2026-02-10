from bisect import bisect_right

# Common denominator for col-* (12-grid) and w-* (percentage) widths.
# 300 = LCM-friendly: col-3→75, col-4→100, col-6→150, col-12→300,
#                      w-20→60, w-25→75, w-50→150.
LINE_TOTAL = 300


def parse_col_width(col_class):
  """Parse a width class to normalized grid units (out of LINE_TOTAL).

  Supports Bootstrap col-* classes (12-column grid) and w-* classes
  (percentage widths). Returns LINE_TOTAL (full width) for empty or
  unparseable values.
  """
  if not col_class:
    return LINE_TOTAL
  try:
    if col_class.startswith("w-"):
      pct = int(col_class.split("-")[1])
      return pct * LINE_TOTAL // 100
    return int(col_class.rsplit("-", 1)[-1]) * LINE_TOTAL // 12
  except (ValueError, IndexError):
    return LINE_TOTAL


def effective_obj_width(obj, row_default_width):
  """Get an object's effective grid width, falling back to the row default."""
  obj_width = obj.get("objectWidth", "")
  if obj_width:
    return parse_col_width(obj_width)
  return parse_col_width(row_default_width)


def compute_line_boundaries(objects, row_default_width):
  """Return sorted list of object indices that start a new visual line.

  Index 0 is always included. An index i means that object[i] is the first
  object on a new visual line, so slicing before i produces complete lines.
  """
  boundaries = [0]
  line_used = 0
  for i, obj in enumerate(objects):
    w = effective_obj_width(obj, row_default_width)
    if line_used > 0 and line_used + w > LINE_TOTAL:
      boundaries.append(i)
      line_used = 0
    line_used += w
    if line_used >= LINE_TOTAL:
      if i + 1 < len(objects):
        boundaries.append(i + 1)
      line_used = 0
  return boundaries


def distribute_objects(objects, max_objects, row_default_width):
  """Split a flat list of objects into pages of at most max_objects each.

  Splits only at visual line boundaries so no page ends with an
  incomplete grid line. Falls back to a hard split at max_objects if
  no line boundary is found.
  """
  if len(objects) <= max_objects:
    return [objects]

  boundaries = compute_line_boundaries(objects, row_default_width)
  pages = []
  start = 0

  while start < len(objects):
    if len(objects) - start <= max_objects:
      pages.append(objects[start:])
      break

    target = start + max_objects
    # Find the largest boundary that is <= target and > start
    idx = bisect_right(boundaries, target)
    split_at = start
    for j in range(idx - 1, -1, -1):
      if boundaries[j] > start:
        split_at = boundaries[j]
        break

    if split_at == start:
      split_at = target  # no line boundary found, force split

    pages.append(objects[start:split_at])
    start = split_at

  return pages
