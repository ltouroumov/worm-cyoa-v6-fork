import textwrap
from difflib import SequenceMatcher
import importlib
import json
from pathlib import Path
from shutil import copyfile
from typing import List, Dict
from hashlib import sha1

from rich.table import Table

from cyoa.tools.lib import *
from cyoa.tools.patch import PatchBase, PatchContext, patch


class ProjectFormatTool(ToolBase, ProjectUtilsMixin):
    name = 'project.format'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--skip-backup', action='store_true')

    def run(self, args):
        self._load_project(args.project_file)

        if args.skip_backup is False:
            backup_file = args.project_file.parent / \
                          f"{args.project_file.name}.bak"
            console.log(f"Backing up project to {backup_file}")
            copyfile(args.project_file, backup_file)

        self._save_project(args.project_file)


class ProjectPointsTool(ToolBase, ProjectUtilsMixin):
    name = 'project.points'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--row-id', dest='row_ids',
                            type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--point-id', dest='point_ids',
                            type=str, nargs='+', action='extend', default=[])

    def run(self, args):
        self._load_project(args.project_file)

        points_data = {
            point_type['id']: point_type
            for point_type in self.project['pointTypes']
            if len(args.point_ids) == 0 or point_type['id'] in args.point_ids
        }
        console.print_json(data=points_data)

        points_columns = tuple(
            point_type_id
            for point_type_id in sorted(points_data.keys())
        )
        points_table = Table("row_id", "obj_id", "title",
                             *(f"{points_data[pid]['name']} ({pid})" for pid in points_columns))
        for row_data in self.project['rows']:
            if len(args.row_ids) > 0 and row_data['id'] not in args.row_ids:
                continue

            for object_data in row_data['objects']:
                object_scores = {
                    score['id']: f"{score['value']} {score['afterText']}"
                    for score in object_data['scores']
                }
                points_table.add_row(
                    row_data['id'], object_data['id'], object_data['title'],
                    *(object_scores.get(pid, "") for pid in points_columns)
                )

        console.print(points_table)


def check_duplicates(project):
    object_ids: Dict[str, List] = {}
    for row_data in project['rows']:
        for object_data in row_data['objects']:
            object_ids.setdefault(object_data['id'], [])
            object_ids[object_data['id']].append(object_data['title'])

    for obj_id, titles in object_ids.items():
        if len(titles) > 1:
            console.print(f"Duplicate {obj_id}: {str.join(', ', titles)}")


def check_requirements(project):
    from cyoa.graph.lib import build_graph

    graph = build_graph(project)
    object_ids = set(graph.objects.keys())
    for oid, vertex in graph.vertices.items():
        if (obj := graph.objects.get(oid, None)) is None:
            console.print(f"Unknown object {oid}")
            continue

        row = graph.rows[obj.row_id]

        if len(missing_inputs := (vertex.inputs - object_ids)) > 0:
            console.print(
                f"Missing inputs for {row.title} / {obj.title} ({oid}): {missing_inputs}")
        if len(missing_outputs := (vertex.outputs - object_ids)) > 0:
            console.print(
                f"Missing outputs for {row.title} / {obj.title} ({oid}): {missing_outputs}")


class ProjectCheckTool(ToolBase, ProjectUtilsMixin):
    name = 'project.check'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        check_duplicates(self.project)
        check_requirements(self.project)


def visit_project(project, visitor: PatchBase):
    context = PatchContext(
        point_types={d['id']: d for d in project['pointTypes']},
        groups={d['id']: d for d in project['groups']},
    )

    visitor.visit(
        node_type='project',
        node_data=project,
        parents={},
        context=context
    )

    for row_data in project['backpack']:
        visitor.visit(
            node_type='backpack.row',
            node_data=row_data,
            parents={'project': project},
            context=context
        )

    for row_data in project['rows']:
        visitor.visit(
            node_type='row',
            node_data=row_data,
            parents={'project': project},
            context=context
        )
        visitor.visit(
            node_type='row.styling',
            node_data=row_data['styling'],
            parents={'project': project, 'row': row_data},
            context=context
        )

        for object_data in row_data['objects']:
            visitor.visit(
                node_type='object',
                node_data=object_data,
                parents={'project': project, 'row': row_data},
                context=context
            )
            if styling := object_data.get('styling', None):
                visitor.visit(
                    node_type='object.styling',
                    node_data=styling,
                    parents={'project': project,
                             'row': row_data, 'obj': object_data},
                    context=context
                )

            for addon in object_data['addons']:
                visitor.visit(
                    node_type='object.addon',
                    node_data=addon,
                    parents={'project': project,
                             'row': row_data, 'obj': object_data},
                    context=context
                )

            for points in object_data['scores']:
                visitor.visit(
                    node_type='object.score',
                    node_data=points,
                    parents={'project': project,
                             'row': row_data, 'obj': object_data},
                    context=context
                )

            for points in object_data['requireds']:
                visitor.visit(
                    node_type='object.condition',
                    node_data=points,
                    parents={'project': project,
                             'row': row_data, 'obj': object_data},
                    context=context
                )


class ProjectPatchTool(ToolBase, ProjectUtilsMixin):
    name = 'project.patch'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--patch', dest='patches',
                            nargs='+', action='extend')

    def run(self, args):
        self._load_project(args.project_file)

        for patch in args.patches:
            module_name, class_name = str.split(patch, ':', maxsplit=2)
            try:
                module_inst = importlib.import_module(module_name)
            except:
                console.log(f"Cannot load [b cyan]{module_name}[/]")
                console.print_exception()
                continue

            if class_inst := getattr(module_inst, class_name, None):
                if not issubclass(class_inst, PatchBase):
                    console.log(
                        f"Class [b][cyan]{module_name}[/].[magenta]{class_name}[/][/] is not a [b]PatchBase[/]")
                    continue

                console.log(
                    f"Applying [b][cyan]{module_name}[/].[magenta]{class_name}[/][/]")
                patch_inst = class_inst()
                visit_project(self.project, patch_inst)
            else:
                console.log(
                    f"Cannot find [b][cyan]{module_name}[/].[red]{class_name}[/][/]")

        self._save_project(args.project_file)


def obj_hash(value):
    value_ser = json.dumps(value, sort_keys=True, indent=0)
    return sha1(value_ser.encode('utf-8')).hexdigest()


def default_delete_item(seq_a, a_start, a_end):
    del seq_a[a_start:a_end]


def default_insert_item(seq_a, a_start, a_end, seq_b):
    seq_a[a_start:a_end] = seq_b


def default_summary(equal_count, replace_count, delete_count, insert_count):
    console.log(f"{equal_count=}, {replace_count=}, {delete_count=}, {insert_count=}")


def diff_sequence(seq_a: list, seq_b: list, update_item,
                  delete_item=default_delete_item,
                  insert_item=default_insert_item,
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
    for tag, a_start, a_end, b_start, b_end in seq_match.get_opcodes():
        if tag == 'equal':
            equal_count += 1  # No changes, skip
        elif tag == 'replace':
            old_rows = seq_a[a_start:a_end]
            new_rows = seq_b[b_start:b_end]
            for old_row, new_row in zip(old_rows, new_rows):
                update_item(old_row, new_row)

            replace_count += a_end - a_start
        elif tag == 'delete':
            delete_item(seq_a, a_start, a_end)
            delete_count += a_end - a_start
        elif tag == 'insert':
            insert_item(seq_a, a_start, a_end, seq_b[b_start:b_end])
            insert_count += b_end - b_start

    summary(equal_count, replace_count, delete_count, insert_count)


def update_dict(old_data: dict, new_data: dict, indent=""):
    def hash_values(seq: dict):
        return [
            (k, obj_hash(v))
            for k, v in sorted(seq.items())
        ]

    def diff_text(old_str: str, new_str: str):
        if len(old_str) < 20 and len(new_str) < 20:
            console.log(f"'{old_str}' -> '{new_str}'")
            return

        str_match = SequenceMatcher(a=old_str, b=new_str)
        for tag, a_start, a_end, b_start, b_end in str_match.get_opcodes():
            if tag == 'equal':
                console.log("==", textwrap.shorten(old_str[a_start:a_end], width=80), style="grey50")
            elif tag == 'replace':
                console.log("--", textwrap.shorten(old_str[a_start:a_end], width=80), style="red")
                console.log("++", textwrap.shorten(new_str[b_start:b_end], width=80), style="green")
            elif tag == 'delete':
                console.log("--", textwrap.shorten(old_str[a_start:a_end], width=80), style="red")
            elif tag == 'insert':
                console.log("++", textwrap.shorten(new_str[b_start:b_end], width=80), style="green")

    seq_a_hash = hash_values(old_data)
    seq_b_hash = hash_values(new_data)
    seq_match = SequenceMatcher(a=seq_a_hash, b=seq_b_hash)
    for tag, a_start, a_end, b_start, b_end in seq_match.get_opcodes():
        if tag == 'equal':
            continue  # No changes, skip
        elif tag == 'replace':
            updated_keys_a = {k for k, _ in seq_a_hash[a_start:a_end]}
            updated_keys_b = {k for k, _ in seq_b_hash[b_start:b_end]}
            for key in sorted(
                (updated_keys_a & updated_keys_b) |
                (updated_keys_b - updated_keys_a)
            ):
                console.log(f"{indent}Updated Key '{key}'")
                console.log(f"{indent}--", textwrap.shorten(str(old_data[key]), width=80), style="red")
                console.log(f"{indent}++", textwrap.shorten(str(new_data[key]), width=80), style="green")
                old_data[key] = new_data[key]
            for key in (updated_keys_a - updated_keys_b):
                console.log(f"{indent}Removed Key '{key}'")
                del old_data[key]
        elif tag == 'delete':
            deleted_keys = [k for k, _ in seq_a_hash[a_start:a_end]]
            for key in sorted(deleted_keys):
                console.log(f"{indent}Removed Key '{key}'")
                del old_data[key]
        elif tag == 'insert':
            added_keys = [k for k, _ in seq_b_hash[b_start:b_end]]
            for key in sorted(added_keys):
                console.log(f"{indent}Added Key '{key}' {new_data[key]}")
                old_data[key] = new_data[key]


class ProjectMergeTool(ToolBase, ProjectUtilsMixin):
    name = 'project.merge'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file',
                            type=Path, required=True)
        parser.add_argument('--patch', dest='patch',
                            type=Path, required=True)
        parser.add_argument('--write', dest='write',
                            action='store_true')

    def run(self, args):
        self._load_project(args.project_file)
        patch_project = self._load_file(args.patch)

        def update_object(old_obj, new_obj):
            console.log(f"  Updated Item ({old_obj['id']}): {old_obj['title']}")
            update_dict(old_obj, new_obj, indent="  " * 2)

        def delete_object(items, r_start, r_end):
            for item in items[r_start:r_end]:
                console.log(f"  Deleted Item ({item['id']}): {item['title']}")
            default_delete_item(items, r_start, r_end)

        def insert_object(items, r_start, r_end, new_items):
            for item in new_items:
                console.log(f"  Inserted Item ({item['id']}): {item['title']}")
            default_insert_item(items, r_start, r_end, new_items)

        def objects_summary(equal_count, replace_count, delete_count, insert_count):
            if replace_count > 0:
                console.log(f"  Total Updated Objects: {replace_count}")
            if delete_count > 0:
                console.log(f"  Total Deleted Objects: {delete_count}")
            if insert_count > 0:
                console.log(f"  Total Inserted Objects: {insert_count}")

        def update_row(old_row, new_row):
            console.log(f"Updated Row ({old_row['id']}): {old_row['title']}")
            old_objects = old_row.pop("objects", [])
            new_objects = new_row.pop("objects", [])

            # Handle updated properties
            if obj_hash(old_row) != obj_hash(new_row):
                console.log("  Updated Row Data")
                update_dict(old_row, new_row, indent="  ")

            # Handle updated objects
            if obj_hash(old_objects) != obj_hash(new_objects):
                diff_sequence(old_objects,
                              new_objects,
                              update_item=update_object,
                              delete_item=delete_object,
                              insert_item=insert_object,
                              summary=objects_summary)

            old_row["objects"] = old_objects

        def delete_row(rows, r_start, r_end):
            for row in rows[r_start:r_end]:
                console.log(f"Deleted Row ({row['id']}): {row['title']}")
            default_delete_item(rows, r_start, r_end)

        def insert_row(rows, r_start, r_end, new_rows):
            for row in new_rows:
                console.log(f"Inserted Row ({row['id']}): {row['title']}")
            default_insert_item(rows, r_start, r_end, new_rows)

        def rows_summary(equal_count, replace_count, delete_count, insert_count):
            if replace_count > 0:
                console.log(f"Total Updated Rows: {replace_count}")
            if delete_count > 0:
                console.log(f"Total Deleted Rows: {delete_count}")
            if insert_count > 0:
                console.log(f"Total Inserted Rows: {insert_count}")

        diff_sequence(self.project["rows"],
                      patch_project["rows"],
                      update_item=update_row,
                      delete_item=delete_row,
                      insert_item=insert_row,
                      summary=rows_summary)

        if args.write:
            self._save_project(args.project_file)


TOOLS = (
    ProjectFormatTool,
    ProjectPointsTool,
    ProjectCheckTool,
    ProjectPatchTool,
    ProjectMergeTool,
)
