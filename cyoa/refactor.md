# CYOA Tools — Business Logic / CLI Refactor Plan

## Motivation

The current `cyoa/tools/` package mixes three distinct concerns into each
tool class:

1. **CLI wiring** — argparse setup, flag validation, output formatting (Rich
   tables, CSV, progress bars).
2. **Orchestration** — loading/saving project files, dispatching to the right
   operation based on flags.
3. **Business logic** — the actual data transformations (sorting, copying,
   optimizing images, validating the project, etc.).

This coupling makes the business logic hard to reuse (e.g. from scripts, tests,
or a future GUI) and hard to test without mocking I/O and console output.

## Goals

- Every data transformation should be callable as a plain Python function/class
  that receives data and returns data — no file I/O, no console output, no
  argparse types.
- The CLI layer becomes a thin adapter: parse flags → call business logic →
  format & print results → persist changes.
- Existing CLI behaviour must not change.

---

## What belongs where

### Business-logic layer (`cyoa/ops/`)

| Keep here | Examples |
|---|---|
| Pure data transformations | Sorting objects, copying/moving/cutting objects between rows, merging rows, splitting rows, redistributing objects across pages |
| Validation / checks | Duplicate detection, requirement graph validation, backpack group checks |
| Image processing | Decoding, optimizing, resizing — everything that takes bytes in and returns bytes out |
| Query / listing | Collecting image metadata, listing objects/rows with computed fields, building score tables |
| Configuration parsing | Parsing sort YAML configs into typed structures, parsing interval syntax |
| Graph operations | Building the dependency graph, filtering, path-finding, cost computation |

**Rules for business-logic code:**

- Functions receive plain Python data (dicts, lists, dataclasses). They never
  receive `argparse.Namespace`.
- Functions return results as data (a new list, a dataclass, a bool, a
  diff summary). They never call `console.print()` or write to stdout.
- Side effects on the project dict are acceptable (the project is an in-memory
  data structure), but file I/O is not.
- Errors are raised as exceptions, not printed.

### CLI layer (`cyoa/tools/`)

| Keep here | Examples |
|---|---|
| Argparse setup | `setup_parser()` with all flags and types |
| Flag validation & coercion | Mutual-exclusion checks, `KEY=VAL` parsing, Path resolution |
| File I/O | `_load_project`, `_save_project`, reading YAML configs, writing output files |
| Output formatting | Rich tables, CSV writers, progress bars, coloured messages |
| Exit codes | `raise SystemExit(1)` for lint failures |
| Orchestration glue | Deciding which business-logic function to call based on the flags |

---

## Proposed package structure

```
cyoa/
├── ops/                            # Business logic — no I/O, no CLI
│   ├── __init__.py
│   ├── common.py                   # Shared helpers (find_first, gen_id, is_empty, ...)
│   ├── objects.py                  # copy, cut, move, add, insert, remove, list objects
│   ├── rows.py                     # merge, split, balance, redistribute, list rows
│   ├── sort.py                     # sort_row, sort_composite_rows, parse_interval,
│   │                               #   apply_intervals, resolve_intervals, load_comparator
│   ├── project.py                  # check_duplicates, check_requirements, check_backpack,
│   │                               #   visit_project, compute_costs, list_addons, list_powers
│   ├── media.py                    # list_all_images, decode/encode, optimize_image,
│   │                               #   optimize_and_extract, export helpers
│   └── merge.py                    # project diff / merge logic
│
├── graph/                          # (unchanged) data model & graph builder
│   └── lib.py
│
├── patch/                          # (unchanged) visitor/patch framework
│   ├── __init__.py
│   └── schema.py
│
├── sort/                           # (unchanged or merged into ops/sort.py)
│   └── __init__.py                 # SortContext, make_sort_key, comparators
│
├── tools/                          # CLI layer — thin adapters
│   ├── client.py                   # (unchanged) entry point, tool registry
│   ├── lib.py                      # ToolBase, ProjectUtilsMixin (I/O only)
│   ├── object_tools.py             # CLI wrappers calling cyoa.ops.objects / cyoa.ops.sort
│   ├── row_tools.py                # CLI wrappers calling cyoa.ops.rows
│   ├── project_tools.py            # CLI wrappers calling cyoa.ops.project
│   ├── media_tools.py              # CLI wrappers calling cyoa.ops.media
│   ├── merge_tools.py              # CLI wrappers calling cyoa.ops.merge
│   ├── wiki_tools.py               # (left for later)
│   ├── style_tools.py              # (left for later)
│   ├── layout.py                   # move to ops/ (already pure logic)
│   ├── build.py                    # (left for later)
│   └── scripts/                    # (left for later)
│
└── ...
```

### Migration notes

- `cyoa/tools/lib.py` keeps `ToolBase`, `ProjectUtilsMixin`, and the `console`
  singleton. All pure helper functions (`find_first`, `gen_id`,
  `copy_objects_from_row`, `redistribute_to_rows`, etc.) move to `cyoa/ops/`.
  Temporary re-exports from `lib.py` can ease the transition but should be
  removed once all tools are migrated.
- `cyoa/tools/layout.py` is already pure logic — move it to `cyoa/ops/` as-is.
- `cyoa/sort/` can stay as a separate module or be folded into `cyoa/ops/sort.py`.
  Either way the comparator-loading, interval-parsing, and row-sorting logic
  currently inside `ObjectsSortTool` moves into `ops/sort`.
- `redistribute_to_rows` in `lib.py` currently calls `console.print`. The ops
  version should return a result summary instead; the CLI layer prints it.

---

## Refactoring pattern — step by step

For each tool:

1. **Identify the business logic.** Read the `run()` method and separate
   the lines that transform data from the lines that do I/O or formatting.
2. **Extract into `cyoa/ops/`.** Write a function (or small class) that takes
   the project dict (and any parameters) and returns a result.
3. **Update the tool.** The tool's `run()` calls the ops function, then
   formats and prints the result.
4. **Remove `console` imports from ops.** If the ops function needs to report
   progress or warnings, return them as part of the result instead.

---

## Examples

### Example 1 — `object.list`

**Before** (`cyoa/tools/object_tools.py`):

```python
class ObjectListTool(ToolBase, ProjectUtilsMixin):
    name = 'object.list'

    def run(self, args):
        self._load_project(args.project_file)

        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == args.row_id)

        if args.csv:
            # 20 lines of CSV formatting interleaved with score lookup logic
            ...
        else:
            table = Table('Idx', 'ID', 'Title')
            for idx, object_data in enumerate(row_data['objects']):
                table.add_row(str(idx), object_data['id'], object_data['title'])
            console.print(table)
```

**After — ops layer** (`cyoa/ops/objects.py`):

```python
from dataclasses import dataclass

@dataclass
class ObjectEntry:
    index: int
    object_id: str
    title: str
    scores: dict[str, "ScoreInfo"]   # point_name -> ScoreInfo

@dataclass
class ScoreInfo:
    value: int
    sign: str          # "Gain" or "Cost"

def list_objects(project: dict, row_id: str) -> list[ObjectEntry]:
    """Return a flat list of objects in the given row with their scores."""
    from cyoa.ops.common import find_first

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
            scores[pt_name] = ScoreInfo(value=abs(val),
                                        sign="Gain" if val < 0 else "Cost")
        result.append(ObjectEntry(index=idx,
                                  object_id=obj['id'],
                                  title=obj['title'],
                                  scores=scores))
    return result
```

**After — CLI layer** (`cyoa/tools/object_tools.py`):

```python
from cyoa.ops.objects import list_objects

class ObjectListTool(ToolBase, ProjectUtilsMixin):
    name = 'object.list'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='List all objects in a row')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str, required=True)
        parser.add_argument('--csv', action='store_true')

    def run(self, args):
        self._load_project(args.project_file)
        entries = list_objects(self.project, args.row_id)

        if args.csv:
            # Pure formatting — build CSV from entries
            ...
        else:
            table = Table('Idx', 'ID', 'Title')
            for e in entries:
                table.add_row(str(e.index), e.object_id, e.title)
            console.print(table)
```

---

### Example 2 — `objects.sort` (single row)

**Before:** `_sort_row()` in `ObjectsSortTool` mixes comparator loading, the
actual sort, dry-run table printing, and lint table printing — all in one
100-line method.

**After — ops layer** (`cyoa/ops/sort.py`):

```python
from dataclasses import dataclass

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
    sorted_objects: list[dict]     # the objects in their new order
    lint_diffs: list[LintDiff] | None   # populated only in lint mode
    is_sorted: bool                     # True if already in order

def sort_row(project, row_id, comparator, sort_args=None,
             intervals=None, context=None):
    """Sort one row and return a SortResult (does not mutate project)."""
    row_data = find_first(project['rows'], lambda r: r['id'] == row_id)
    if row_data is None:
        raise KeyError(f"Row {row_id!r} not found")

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
```

**After — CLI layer** (`cyoa/tools/object_tools.py`):

```python
from cyoa.ops.sort import sort_row, load_comparator

class ObjectsSortTool(ToolBase, ProjectUtilsMixin):
    ...

    def _run_sort_row(self, row_id, rule, sort_args, context,
                      dry_run, lint, intervals):
        comparator = load_comparator(rule)
        result = sort_row(self.project, row_id, comparator,
                          sort_args=sort_args, intervals=intervals,
                          context=context)

        if lint:
            if result.is_sorted:
                console.print(f"Row [b]{row_id}[/] is correctly sorted",
                              style="green")
            else:
                console.print(f"Row [b]{row_id}[/] is NOT correctly sorted",
                              style="red")
                table = Table('Idx', 'Current', '', 'Expected')
                for d in result.lint_diffs:
                    marker = '[red]*[/]' if not d.matches else ' '
                    table.add_row(str(d.index), d.current_title,
                                  marker, d.expected_title)
                console.print(table)
            return result.is_sorted

        # Apply the sort
        row_data = find_first(self.project['rows'],
                              lambda r: r['id'] == row_id)
        row_data['objects'] = result.sorted_objects

        if dry_run:
            table = Table('Idx', 'ID', 'Title')
            for idx, obj in enumerate(result.sorted_objects):
                table.add_row(str(idx), obj['id'], obj['title'])
            console.print(table)

        return True
```

---

### Example 3 — `row.split`

**Before** (`cyoa/tools/row_tools.py`):

```python
class RowSplitTool(ToolBase, ProjectUtilsMixin):
    def run(self, args):
        self._load_project(args.project_file)
        # ... find row, resolve split point, deepcopy, insert ...
        self._save_project(args.project_file)
```

**After — ops layer** (`cyoa/ops/rows.py`):

```python
@dataclass
class SplitResult:
    original_row_id: str
    original_count: int
    new_row_id: str
    new_count: int

def split_row(project, row_id, *, after_obj=None, after_idx=None) -> SplitResult:
    """Split a row at the given point. Mutates project['rows'] in place."""
    row_idx = find_first_index(project['rows'], lambda r: r['id'] == row_id)
    if row_idx is None:
        raise KeyError(f"Row {row_id!r} not found")

    row_data = project['rows'][row_idx]

    if after_obj is not None:
        split_idx = find_first_index(row_data['objects'],
                                     lambda o: o['id'] == after_obj)
        if split_idx is None:
            raise KeyError(f"Object {after_obj!r} not found in row {row_id!r}")
    else:
        split_idx = after_idx
        if split_idx < 0 or split_idx >= len(row_data['objects']):
            raise IndexError(f"Index {split_idx} out of range")

    new_row = copy.deepcopy(row_data)
    new_row['id'] = gen_id()
    new_row['objects'] = row_data['objects'][split_idx + 1:]
    row_data['objects'] = row_data['objects'][:split_idx + 1]

    project['rows'].insert(row_idx + 1, new_row)

    return SplitResult(
        original_row_id=row_id,
        original_count=len(row_data['objects']),
        new_row_id=new_row['id'],
        new_count=len(new_row['objects']),
    )
```

**After — CLI layer** (`cyoa/tools/row_tools.py`):

```python
from cyoa.ops.rows import split_row

class RowSplitTool(ToolBase, ProjectUtilsMixin):
    ...

    def run(self, args):
        self._load_project(args.project_file)

        try:
            result = split_row(self.project, args.row_id,
                               after_obj=args.after_obj,
                               after_idx=args.after_idx)
        except (KeyError, IndexError) as exc:
            console.print(str(exc), style="red")
            return

        console.print(f"Split row {result.original_row_id} after index ...")
        console.print(f"  {result.original_row_id}: {result.original_count} objects")
        console.print(f"  {result.new_row_id}: {result.new_count} objects")
        self._save_project(args.project_file)
```

---

### Example 4 — `redistribute_to_rows` (removing console calls)

**Before** (`cyoa/tools/lib.py`):

```python
def redistribute_to_rows(project, row_ids, pages, title, template_row):
    # ... mutates project ...
    console.print(f"Removed {len(excess_ids)} excess row(s)")
    console.print(f"Created new row {new_row['id']}")
    console.print(f"  {row['id']}: {row['title']} — {len(page_objects)} objects")
    return assigned
```

**After — ops layer** (`cyoa/ops/rows.py`):

```python
@dataclass
class RedistributeResult:
    assigned_rows: list[dict]     # the row dicts that received objects
    rows_created: list[str]       # IDs of newly created rows
    rows_removed: list[str]       # IDs of removed excess rows

def redistribute_to_rows(project, row_ids, pages, title, template_row):
    """Assign pages of objects to rows, creating/removing as needed.

    Mutates project['rows'] and the row_ids list in place.
    """
    rows_created = []
    rows_removed = []
    # ... same logic, but append to rows_created/rows_removed
    # ... instead of calling console.print() ...
    return RedistributeResult(assigned_rows=assigned,
                              rows_created=rows_created,
                              rows_removed=rows_removed)
```

---

## Migration order

The refactor can be done incrementally, one tool group at a time. Suggested
order (least coupled → most coupled):

1. ✅ **`cyoa/ops/common.py`** — Extract `find_first`, `find_first_index`,
   `gen_id`, `is_empty` from `lib.py`. These have zero dependencies and every
   other ops module will need them. Add re-exports in `lib.py` to avoid
   breaking existing imports during the transition.

2. **`cyoa/ops/objects.py`** — Extract `copy_objects_from_row`,
   `remove_objects_from_row`, `insert_objects_in_row`, `list_objects`.
   Migrate `object.list`, `object.copy`, `object.cut`, `object.move`,
   `object.add`.

3. **`cyoa/ops/rows.py`** — Extract `redistribute_to_rows` (without console),
   `remove_rows_from_project`, `split_row`, `merge_rows`, `balance_groups`.
   Move `layout.py` to `ops/layout.py`.
   Migrate `row.list`, `row.copy`, `row.merge`, `row.split`, `rows.balance`.

4. **`cyoa/ops/sort.py`** — Extract `parse_interval`, `apply_intervals`,
   `resolve_intervals`, `load_comparator`, `sort_row`,
   `sort_composite_rows`. Decide whether to fold `cyoa/sort/` into this
   module.
   Migrate `objects.sort`.

5. **`cyoa/ops/project.py`** — Extract `check_duplicates`,
   `check_requirements`, `check_backpack`, `visit_project`, cost/addon/power
   listing logic.
   Migrate `project.check`, `project.patch`, `project.costs`,
   `project.addons`, `project.powers`.

6. **`cyoa/ops/media.py`** — `list_all_images`, image decode/encode/optimize
   helpers are already mostly pure. Extract the optimize-and-extract and
   optimize-in-place pipelines as ops functions that return results instead of
   building Rich tables.
   Migrate `media.*` tools.

7. **Remaining tools** — `wiki_tools`, `style_tools`, `merge_tools`, `build`,
   `scripts` — follow the same pattern when convenient.

## Cleanup

After all tools are migrated:

- Remove re-exports and pure-logic functions from `cyoa/tools/lib.py`.
- `lib.py` should contain only `ToolBase`, `ProjectUtilsMixin`, and
  the `console` singleton.
- Delete `cyoa/tools/layout.py` (moved to `ops/`).
- Consider whether `cyoa/sort/` should remain standalone or merge into
  `ops/sort.py`.
