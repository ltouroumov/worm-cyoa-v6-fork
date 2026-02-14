# Markdown Export Tool — Design Plan

## Goal

Replace the MediaWiki export (`wiki.update`) with a simpler markdown export that writes
a directory of `.md` files: one **index page** with sub-sections linking to individual
**content pages** (one per wiki "section" entry).

## Output Structure

```
output/
├── index.md                  # Table of contents with links to all content pages
├── meta.md
├── difficulty.md
├── scenario.md
├── character/
│   ├── identity.md
│   ├── body.md
│   └── ...
├── perks.md
├── drawbacks.md
│   ├── ...                   # sub-section files
├── powers/
│   ├── shard-tier1.md
│   └── ...
```

Flat where possible, sub-directories only for multi-level sections (Character, Drawbacks, Powers).

### index.md

Single file with heading per top-level section and bullet links to content pages:

```markdown
# Project V17

## Meta
- [Meta](meta.md)

## Character
- [Identity](character/identity.md)
- [Body](character/body.md)
- ...

## Powers
### Shard Powers
- [Tier 1](powers/shard-tier1.md)
- ...
```

### Content Pages

Each content page renders all objects from its `row_ids`, grouped by row when configured:

```markdown
# Meta

## Row Title (if group_by_row)

### Object Title
> **Cost:** 2 Choice Points

*Requirements: Requires X, Incompatible with Y*

Description text (HTML stripped to markdown).

#### Addon Title
Addon description.

---
```

## Architecture

### Layer Separation

Follow the existing pattern:

- **`cyoa/ops/md_export.py`** — Pure functions, no I/O.
  - `render_object(obj: dict) -> str` — Render one object to markdown.
  - `render_section(rows: list[dict], config: dict) -> str` — Render a full section page.
  - `render_index(structure: dict) -> str` — Build the index page.
  - `html_to_md(html: str) -> str` — Convert object HTML text to markdown.
  - `render_scores(obj: dict, point_types: dict) -> str` — Format cost/points as a blockquote line.
  - `render_requirements(obj: dict) -> str` — Format requirements as an italic line.

- **`cyoa/tools/md_export.py`** — CLI tool `md.export`.
  - Loads project, calls ops functions, writes files to output directory.
  - Options: `--output-dir`, `--project` (from `ProjectUtilsMixin`).

### HTML-to-Markdown Conversion

Object `text` fields contain simple HTML (bold, italic, lists, line breaks).
Use the `markdownify` library (lightweight, pure-python) to convert.
Falls back to stripping tags if conversion fails.

### Reuse of Wiki Config

Reuse the existing `cyoa/tools/wiki/config/` structure definitions (`STRUCTURE` dict).
They already define which row IDs belong to which sections, grouping mode, and hierarchy.
The `mode` / `index.depth` / `index.order` fields map directly to the new structure:

| Wiki config field | Markdown export meaning |
|---|---|
| `mode: "section"` | Leaf content page |
| `mode: "index"` | Directory grouping (no content, only links in index) |
| `mode: "combined"` | Content page that also has sub-section links |
| `index.order` | Sort order in index |
| `index.depth` | Sub-directory nesting |
| `section.group_by_row` | Use row titles as `##` sub-headings |
| `row_ids` | Which rows to include |

The page path (e.g. `"Project V17/Character/Identity"`) maps to a file path
by stripping the root prefix and lowercasing: `character/identity.md`.

## Implementation Steps

### Step 1 — Add `markdownify` dependency

```bash
uv add markdownify
```

### Step 2 — Create `cyoa/ops/md_export.py`

Implement pure rendering functions:

1. `html_to_md(html)` — Wrap `markdownify.markdownify()`, strip excess whitespace.
2. `render_scores(obj, point_types)` — Format scores as `> **Cost:** N Points`.
   Use the same `point_types` lookup the wiki tool uses.
3. `render_requirements(obj)` — Format `requireds` as `*Requires: ...*`.
4. `render_object(obj, point_types)` — Compose heading + scores + requirements + text + addons.
5. `render_section(rows, objects_by_row, config, point_types)` — Full page: title + objects,
   with optional row grouping.
6. `path_to_filename(page_path, root_prefix)` — Convert structure key to relative `.md` path.
7. `render_index(structure, root_prefix)` — Build index.md from structure dict, respecting
   `index.order` for sorting and nesting depth for sub-sections.

### Step 3 — Create `cyoa/tools/md_export.py`

Tool class `MarkdownExportTool`:

- `name = "md.export"`
- `setup_parser`: `--output-dir` (default `./export`), plus project args from mixin.
- `run`:
  1. Load project.
  2. Build `point_types` lookup dict from `project["pointTypes"]`.
  3. Build `rows_by_id` lookup from `project["rows"]`.
  4. Iterate `STRUCTURE`, for each section-mode entry:
     - Resolve rows from `row_ids`.
     - Call `render_section()`.
     - Write to `path_to_filename()` under output dir.
  5. Call `render_index()`, write `index.md`.
  6. Print summary (files written count).

### Step 4 — Register the tool

Add `MarkdownExportTool` to `cyoa/tools/wiki_tools.py` TOOLS tuple
(or create a new `md_tools.py` and register in `client.py`).

### Step 5 — Validate output

Run against the project file manually and spot-check a few sections.

## Design Decisions

- **Images:** Include as `![title](url)` markdown images (external URLs as-is).
- **Styling:** Ignored entirely. Objects are listed sequentially, first to last.
