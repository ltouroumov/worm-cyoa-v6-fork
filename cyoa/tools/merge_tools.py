from collections import OrderedDict
import copy
from itertools import chain
import operator
import textwrap
from difflib import SequenceMatcher
import json
from pathlib import Path
from hashlib import sha1

from rich.text import Text
from rich.table import Table

from cyoa.tools.lib import console, ToolBase, ProjectUtilsMixin


def obj_hash(value):
    value_ser = json.dumps(value, sort_keys=True, indent=0)
    return sha1(value_ser.encode('utf-8')).hexdigest()


def default_delete_item(seq_a):
    return []


def default_insert_item(seq_b):
    return seq_b

def default_equal_item(seq):
    console.print(seq)

def default_summary(equal_count, replace_count, delete_count, insert_count):
    console.log(
        f"{equal_count=}, {replace_count=}, {delete_count=}, {insert_count=}")


def diff_sequence(seq_a: list, seq_b: list, update_item,
                  delete_item=default_delete_item,
                  insert_item=default_insert_item,
                  equal_item=None,
                  summary=default_summary):
    def hash_objects(seq):
        return [
            (obj["id"], obj_hash(obj))
            for obj in seq
        ]

    seq_a_hash = hash_objects(seq_a)
    seq_b_hash = hash_objects(seq_b)

    seq_match = SequenceMatcher(a=seq_a_hash, b=seq_b_hash)
    equal_count = 0
    replace_count = 0
    delete_count = 0
    insert_count = 0
    seq_out = []
    for tag, a_start, a_end, b_start, b_end in seq_match.get_opcodes():
        if tag == 'equal':
            seq = seq_a[a_start:a_end]
            if equal_item:
                equal_item(seq)

            seq_out.extend(seq)
            equal_count += 1  # No changes, skip
        elif tag == 'replace' and a_end - a_start == b_end - b_start:
            # Same number of items get updated
            old_rows = seq_a[a_start:a_end]
            new_rows = seq_b[b_start:b_end]
            for old_row, new_row in zip(old_rows, new_rows):
                item_data = update_item(old_row, new_row)
                seq_out.append(item_data)

            replace_count += a_end - a_start
        elif tag == 'replace' and a_end - a_start != b_end - b_start:
            # List shrunk
            old_rows = list(map(operator.itemgetter(0),
                                seq_a_hash[a_start:a_end]))
            new_rows = list(map(operator.itemgetter(0),
                                seq_b_hash[b_start:b_end]))
            updated_ids = set(old_rows) & set(new_rows)

            old_rows_items = {
                item['id']: item for item in seq_a[a_start:a_end]}
            for old_row in seq_a[a_start:a_end]:
                if old_row['id'] in updated_ids:
                    continue

                del_items = delete_item([old_row])
                seq_out.extend(del_items)
                delete_count += 1 - len(del_items)

            for new_row in seq_b[b_start:b_end]:
                if (row_id := new_row['id']) in updated_ids:
                    item_data = update_item(old_rows_items[row_id], new_row)
                    seq_out.append(item_data)
                    replace_count += 1
                else:
                    ins_items = insert_item([new_row])
                    seq_out.extend(ins_items)
                    insert_count += len(ins_items)
        elif tag == 'delete':
            # Allow the delete function to keep some imtems
            del_res = delete_item(seq_a[a_start:a_end])
            seq_out.extend(del_res)
            delete_count += (a_end - a_start) - len(del_res)
        elif tag == 'insert':
            ins_res = insert_item(seq_b[b_start:b_end])
            seq_out.extend(ins_res)
            insert_count += len(ins_res)

    summary(equal_count, replace_count, delete_count, insert_count)
    return seq_out


IMPORTANT_KEYS = (
    'id', 'title', 'titleText', 'text', 'scores',
)

SPECIAL_KEYS = (
    *IMPORTANT_KEYS,
    'addons', 'image', 'requireds'
)

# Theses keys shouldn't be modified
IGNORE_KEYS = ('currentChoices', 'isActive', 'isEditModeOn','isNotSelectable')

SPECIAL_DISPLAY = {
    'scores': lambda scores: Text.assemble(*intercalate("\n", [
        Text.assemble(score['beforeText'], " ", str(score['value']), " ", score['afterText'],
                      " (", score['id'], ")", " (cond)" if len(
                          score['requireds']) > 0 else "",
                      " (show=%s)" % str(
                          score['showScore']) if 'showScore' in score else "",
                      " (active=%s)" % str(score['isActive']) if 'isActive' in score else "")
        for score in scores
    ])),
    'requireds': lambda items: Text.assemble(*intercalate("\n", [
        Text.assemble(
            item['beforeText'], " ",
            item['reqId'] if item['type'] == 'id' else
            str.join(", ", [n['req'] for n in item['orRequired']]) if item['type'] == 'or' else
            "Other",
            " ", item['afterText']
        )
        for item in items
    ]))
}


def intercalate(sep, items):
    for idx, item in enumerate(items):
        if idx > 0:
            yield sep
        yield item


def update_dict(old_data: dict, new_data: dict):
    merged_keys = set(old_data.keys() | new_data.keys())
    rest_keys = list(sorted(merged_keys - set(SPECIAL_KEYS)))

    def show_value(value, key=None):
        if key in SPECIAL_DISPLAY:
            return SPECIAL_DISPLAY[key](value)
        elif isinstance(value, str) and len(value) == 0:
            return Text('N/A', style="grey50")
        elif isinstance(value, str):
            return Text(value)
        elif isinstance(value, list) and len(value) == 0:
            return Text("[]")
        elif isinstance(value, list):
            return Text.assemble(*intercalate("\n", [
                show_value(val) for val in value
            ]))
        elif isinstance(value, dict):
            return Text(json.dumps(value, sort_keys=True, indent=2))
        else:
            return Text(str(value))

    result_dict = {}
    result_changed = False
    diff_table = Table(show_header=False, show_lines=False)
    for key in chain(SPECIAL_KEYS, rest_keys):
        if key in IGNORE_KEYS:
            if key in old_data:
                # Don't change an ignored key
                result_dict[key] = old_data[key]
        elif key in old_data and key in new_data and old_data[key] != new_data[key]:
            diff_table.add_row(key,
                               show_value(old_data[key], key),
                               show_value(new_data[key], key))
            result_dict[key] = new_data[key]
            result_changed |= True
        elif key in old_data and key not in new_data:
            diff_table.add_row(key,
                               show_value(old_data[key], key),
                               Text("N/A", style="grey50"))
            result_changed |= True
        elif key not in old_data and key in new_data:
            diff_table.add_row(key,
                               Text("N/A", style='grey50'),
                               show_value(new_data[key], key))
            result_dict[key] = new_data[key]
            result_changed |= True
        elif key in IMPORTANT_KEYS and key in old_data:
            diff_table.add_row(key,
                               show_value(old_data[key], key),
                               Text("==", style="grey50"))
            result_dict[key] = old_data[key]
        elif key in old_data:
            result_dict[key] = old_data[key]

    return result_dict, result_changed, diff_table


class ProjectMergeTool(ToolBase, ProjectUtilsMixin):
    name = 'merge'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Merge changes into a project file')
        parser.add_argument('--project', dest='project_file',
                            type=Path, required=True)
        parser.add_argument('--patch', dest='patch',
                            type=Path, required=True)
        parser.add_argument('--write', dest='write',
                            action='store_true')
        parser.add_argument('--quiet', dest='verbose',
                            action='store_false')
        parser.add_argument('--equal', dest='equal',
                            action='store_true')

        parser.add_argument('--skip-rows', dest='skip_rows',
                            nargs='+', action='extend',
                            default=[])
        parser.add_argument('--skip-rows-data', dest='skip_rows_data',
                            nargs='+', action='extend',
                            default=[])
        parser.add_argument('--skip-objs', dest='skip_objs',
                            nargs='+', action='extend',
                            default=[])

        parser.add_argument('--only-rows', dest='only_rows',
                            nargs='+', action='extend',
                            default=[])
        parser.add_argument('--only-objs', dest='only_objs',
                            nargs='+', action='extend',
                            default=[])

    def run(self, args):
        self._load_project(args.project_file)
        patch_project = self._load_file(args.patch)

        def equal_object(objs):
            if not args.equal:
                return
            
            for obj in objs:
                console.print(f"  Equal Item ({obj['id']}): {obj['title']}")

        def update_object(old_obj, new_obj):
            should_skip = (old_obj['id'] in args.skip_objs or
                           (len(args.only_objs) > 0 and old_obj['id'] not in args.only_objs))
            if should_skip:
                if args.verbose:
                    console.print(f"  Skipped Updated Item ({old_obj['id']}): {old_obj['title']}",
                                style="dark_slate_gray1 italic")
                return old_obj
            
            updated_obj, has_changed, diff_table = update_dict(old_obj, new_obj)
            if has_changed:
                console.print(f"  Updated Item ({old_obj['id']}): {old_obj['title']}",
                            style="orange1")
                if args.verbose:
                    console.print(diff_table)
                return updated_obj
            else:
                return old_obj

        def delete_object(items):
            excluded_rows = []
            for item in items:
                should_skip = (item['id'] in args.skip_objs or
                               (len(args.only_objs) > 0 and item['id'] not in args.only_objs))
                if should_skip:
                    if args.verbose:
                        console.print(
                            f"  Skipped Deleted Item ({item['id']}): {item['title']}",
                            style="dark_slate_gray1 italic"
                        )
                    excluded_rows.append(item)
                    continue
                
                _, _, diff_table = update_dict(item, item)
                console.print(
                    f"  Deleted Item ({item['id']}): {item['title']}", style="red"
                )
                if args.verbose:
                    console.print(diff_table)

            return excluded_rows

        def insert_object(new_items):
            included_rows = []
            for item in new_items:
                should_skip = (item['id'] in args.skip_objs or
                               (len(args.only_objs) > 0 and item['id'] not in args.only_objs))
                if should_skip:
                    if args.verbose:
                        console.print(
                            f"  Skipped Inserted Item ({item['id']}): {item['title']}", style="dark_slate_gray1 italic"
                        )
                    continue
                
                
                _, _, diff_table = update_dict(item, item)
                console.print(
                    f"  Inserted Item ({item['id']}): {item['title']}", style="green"
                )
                if args.verbose:
                    console.print(diff_table)
                included_rows.append(item)

            return included_rows

        def objects_summary(equal_count, replace_count, delete_count, insert_count):
            if replace_count > 0:
                console.print(f"  Total Updated Objects: {replace_count}")
            if delete_count > 0:
                console.print(f"  Total Deleted Objects: {delete_count}")
            if insert_count > 0:
                console.print(f"  Total Inserted Objects: {insert_count}")

        def equal_row(rows):
            if not args.equal:
                return
            
            for row in rows:
                console.print(f"Equal Row ({row['id']}): {row['title']}")

        def update_row(old_row, new_row):
            should_skip = (old_row['id'] in args.skip_rows or
                           (len(args.only_rows) > 0 and old_row['id'] not in args.only_rows))
            if should_skip:
                if args.verbose:
                    console.print(
                        f"Skipped Updated Row ({old_row['id']}): {old_row['title']}",
                        style="dark_slate_gray1 italic"
                    )
                return old_row

            console.print(
                f"Updated Row ({old_row['id']}): {old_row['title']}", style="orange1"
            )

            old_objects = old_row.pop("objects", [])
            new_objects = new_row.pop("objects", [])

            # Handle updated properties
            if obj_hash(old_row) != obj_hash(new_row):
                should_skip_data = (old_row['id'] in args.skip_rows_data or
                                    len(args.skip_rows_data) > 0)
                updated_row, has_changed, diff_table = update_dict(old_row, new_row)
                if should_skip_data:
                    console.print(
                        f"  Skipped Data Update",
                        style="dark_slate_gray1 italic"
                    )
                elif has_changed:
                    console.print("  Updated Row Data", style="orange1")
                    if args.verbose:
                        console.print(diff_table)
                else:
                    updated_row = old_row
            else:
                updated_row = old_row

            # Handle updated objects
            if obj_hash(old_objects) != obj_hash(new_objects):
                updated_objects = diff_sequence(
                    old_objects,
                    new_objects,
                    update_item=update_object,
                    delete_item=delete_object,
                    insert_item=insert_object,
                    equal_item=equal_object,
                    summary=objects_summary
                )
                updated_row["objects"] = updated_objects
            else:
                updated_row["objects"] = old_objects

            return updated_row

        def delete_row(rows):
            excluded_rows = []
            for row in rows:
                should_skip = (row['id'] in args.skip_rows or
                               (len(args.only_rows) > 0 and row['id'] not in args.only_rows))
                if should_skip:
                    if args.verbose:
                        console.print(
                            f"Skipped Deleted Row ({row['id']}): {row['title']}",
                            style="dark_slate_gray1 italic"
                        )
                    excluded_rows.append(row)
                    continue

                _, _, diff_table = update_dict(row, row)
                console.print(
                    f"Deleted Row ({row['id']}): {row['title']}", style="red"
                )
                if args.verbose:
                    console.print(diff_table)

            return excluded_rows

        def insert_row(new_rows):
            included_rows = []
            for row in new_rows:
                should_skip = (row['id'] in args.skip_rows or
                               (len(args.only_rows) > 0 and row['id'] not in args.only_rows))
                
                if should_skip:
                    if args.verbose:
                        console.print(
                            f"Skipped Inserted Row ({row['id']}): {row['title']}", style="dark_slate_gray1 italic"
                        )
                    continue
                console.print(
                    f"Inserted Row ({row['id']}): {row['title']}", style="green"
                )

                _, _, diff_table = update_dict(row, row)
                if args.verbose:
                    console.print(diff_table)

                insert_object(row['objects'])
                console.print(f"  {len(row['objects'])} Items")

                included_rows.append(row)

            return included_rows

        def rows_summary(equal_count, replace_count, delete_count, insert_count):
            if replace_count > 0:
                console.print(f"Total Updated Rows: {replace_count}")
            if delete_count > 0:
                console.print(f"Total Deleted Rows: {delete_count}")
            if insert_count > 0:
                console.print(f"Total Inserted Rows: {insert_count}")

        new_rows = diff_sequence(
            self.project["rows"],
            patch_project["rows"],
            update_item=update_row,
            delete_item=delete_row,
            insert_item=insert_row,
            equal_item=equal_row,
            summary=rows_summary
        )
        self.project["rows"] = new_rows

        if args.write:
            self._save_project(args.project_file)


TOOLS = (
    ProjectMergeTool,
)
