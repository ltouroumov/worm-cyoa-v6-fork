"""Pure functions for rendering CYOA project data as Markdown."""

import re

import markdownify


def html_to_md(html: str) -> str:
  """Convert HTML text content to markdown, stripping excess whitespace."""
  if not html or not html.strip():
    return ""
  md = markdownify.markdownify(html, strip=["div", "span"])
  # Collapse multiple blank lines
  md = re.sub(r"\n{3,}", "\n\n", md)
  return md.strip()


def render_scores(obj: dict, point_types: dict) -> str:
  """Render object scores as a blockquote line."""
  scores = obj.get("scores", [])
  if not scores:
    return ""

  parts = []
  for score in scores:
    before = score.get("beforeText", "").strip()
    value = abs(int(score.get("value", 0)))
    after = score.get("afterText", "").strip()
    if not before and not after:
      continue
    part = f"{before} {value} {after}".strip()

    # Conditional scores
    reqs = score.get("requireds", [])
    if reqs:
      req_names = []
      for req in reqs:
        req_id = req.get("reqId", "")
        if req_id and req_id in point_types:
          req_names.append(point_types[req_id])
      if req_names:
        part += f" ({', '.join(req_names)})"

    parts.append(part)

  if not parts:
    return ""
  return "> " + " | ".join(parts)


def render_requirements(obj: dict, objects: dict) -> str:
  """Render object requirements as an italic line."""
  requireds = obj.get("requireds", [])
  if not requireds:
    return ""

  parts = []
  for req in requireds:
    before = req.get("beforeText", "").strip()
    after = req.get("afterText", "").strip()

    if req.get("type") == "id":
      req_id = req.get("reqId", "")
      name = objects.get(req_id, {}).get("title", "Unknown")
      parts.append(f"{before} {name} {after}".strip())
    elif req.get("type") == "or":
      or_names = []
      for or_req in req.get("orRequired", []):
        or_id = or_req.get("req", "")
        or_names.append(objects.get(or_id, {}).get("title", "Unknown"))
      names = ", ".join(or_names)
      parts.append(f"{before} {names} {after}".strip())

  if not parts:
    return ""
  return "*" + " | ".join(parts) + "*"


def render_object(obj: dict, point_types: dict, objects: dict) -> str:
  """Render a single object to markdown."""
  lines = []

  # Title
  lines.append(f"### {obj['title']}")
  lines.append("")

  # Image
  image = obj.get("imageLink", "")
  if image:
    lines.append(f"![{obj['title']}]({image})")
    lines.append("")

  # Scores
  scores_md = render_scores(obj, point_types)
  if scores_md:
    lines.append(scores_md)
    lines.append("")

  # Requirements
  reqs_md = render_requirements(obj, objects)
  if reqs_md:
    lines.append(reqs_md)
    lines.append("")

  # Text
  text = html_to_md(obj.get("text", ""))
  if text:
    lines.append(text)
    lines.append("")

  # Addons
  for addon in obj.get("addons", []):
    lines.append(f"#### {addon.get('title', 'Addon')}")
    lines.append("")
    addon_text = html_to_md(addon.get("text", ""))
    if addon_text:
      lines.append(addon_text)
      lines.append("")

  return "\n".join(lines)


def render_section(
  title: str,
  row_ids: list[str],
  rows_by_id: dict,
  config: dict,
  point_types: dict,
  objects: dict,
) -> str:
  """Render a full section page."""
  lines = []
  section_title = title.rsplit("/", 1)[-1]
  lines.append(f"# {section_title}")
  lines.append("")

  group_by_row = config.get("section", {}).get("group_by_row", False)
  skip_row_title = config.get("section", {}).get("skip_row_title", [])

  for row_id in row_ids:
    row = rows_by_id.get(row_id)
    if not row:
      continue

    if group_by_row and row["id"] not in skip_row_title:
      lines.append(f"## {row['title']}")
      lines.append("")

    for obj in row["objects"]:
      lines.append(render_object(obj, point_types, objects))
      lines.append("---")
      lines.append("")

  return "\n".join(lines)


def path_to_filename(page_path: str, root_prefix: str) -> str:
  """Convert a structure key to a relative .md file path."""
  relative = page_path[len(root_prefix) :].strip("/")
  if not relative:
    return "index.md"
  # Lowercase and replace spaces with hyphens
  parts = relative.lower().replace(" ", "-").split("/")
  return "/".join(parts) + ".md"


def render_index(structure: dict, root_prefix: str) -> str:
  """Build the index.md from the structure dict."""
  lines = []
  root_title = root_prefix.rstrip("/")
  lines.append(f"# {root_title}")
  lines.append("")

  # Collect top-level entries (direct children of root)
  top_entries = _children_of(structure, root_prefix, depth=1)

  for path, config in top_entries:
    name = path.rsplit("/", 1)[-1]
    mode = config["mode"]

    if mode == "index":
      # This is a grouping node — render as heading with sub-entries
      lines.append(f"## {name}")
      lines.append("")
      sub_entries = _children_of(structure, path, depth=1)
      for sub_path, sub_config in sub_entries:
        sub_name = sub_path.rsplit("/", 1)[-1]
        if sub_config["mode"] == "index":
          # Deeper grouping (e.g. Powers/Shard)
          lines.append(f"### {sub_name}")
          lines.append("")
          deep_entries = _children_of(structure, sub_path, depth=1)
          for deep_path, deep_config in deep_entries:
            deep_name = deep_path.rsplit("/", 1)[-1]
            if deep_config["mode"] == "index":
              lines.append(f"#### {deep_name}")
              lines.append("")
              deepest = _children_of(structure, deep_path, depth=1)
              for dp, dc in deepest:
                dn = dp.rsplit("/", 1)[-1]
                lines.append(f"- [{dn}]({path_to_filename(dp, root_prefix)})")
              if deepest:
                lines.append("")
            else:
              filename = path_to_filename(deep_path, root_prefix)
              lines.append(f"- [{deep_name}]({filename})")
          if deep_entries:
            lines.append("")
        else:
          filename = path_to_filename(sub_path, root_prefix)
          lines.append(f"- [{sub_name}]({filename})")
      lines.append("")
    elif mode in ("section", "combined"):
      filename = path_to_filename(path, root_prefix)
      lines.append(f"- [{name}]({filename})")
      lines.append("")

      # If combined, also list sub-sections
      if mode == "combined":
        sub_entries = _children_of(structure, path, depth=1)
        for sub_path, sub_config in sub_entries:
          sub_name = sub_path.rsplit("/", 1)[-1]
          sub_filename = path_to_filename(sub_path, root_prefix)
          lines.append(f"  - [{sub_name}]({sub_filename})")
        if sub_entries:
          lines.append("")

  return "\n".join(lines)


def _children_of(
  structure: dict, parent: str, depth: int = 1
) -> list[tuple[str, dict]]:
  """Get direct children of a path in the structure, sorted by index order."""
  parent_depth = parent.count("/") + 1
  children = []
  for path, config in structure.items():
    if path == parent:
      continue
    if not path.startswith(parent + "/"):
      continue
    path_depth = path.count("/") + 1
    if (path_depth - parent_depth) > depth:
      continue
    order = config.get("index", {}).get("order", 999)
    children.append((order, path, config))
  children.sort(key=lambda t: (t[0], t[1]))
  return [(path, config) for _, path, config in children]
