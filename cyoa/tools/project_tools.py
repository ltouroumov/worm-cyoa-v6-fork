import importlib
from pathlib import Path
from shutil import copyfile
from typing import List, Dict

from rich.table import Table

from cyoa.tools.lib import *
from cyoa.tools.patch import PatchBase, PatchContext


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
            backup_file = args.project_file.parent / f"{args.project_file.name}.bak"
            console.log(f"Backing up project to {backup_file}")
            copyfile(args.project_file, backup_file)

        self._save_project(args.project_file)


class ProjectPointsTool(ToolBase, ProjectUtilsMixin):
    name = 'project.points'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--row-id', dest='row_ids', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--point-id', dest='point_ids', type=str, nargs='+', action='extend', default=[])

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
            console.print(f"Missing inputs for {row.title} / {obj.title} ({oid}): {missing_inputs}")
        if len(missing_outputs := (vertex.outputs - object_ids)) > 0:
            console.print(f"Missing outputs for {row.title} / {obj.title} ({oid}): {missing_outputs}")


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
                    parents={'project': project, 'row': row_data, 'obj': object_data},
                    context=context
                )

            for addon in object_data['addons']:
                visitor.visit(
                    node_type='object.addon',
                    node_data=addon,
                    parents={'project': project, 'row': row_data, 'obj': object_data},
                    context=context
                )

            for points in object_data['scores']:
                visitor.visit(
                    node_type='object.score',
                    node_data=points,
                    parents={'project': project, 'row': row_data, 'obj': object_data},
                    context=context
                )


class ProjectPatchTool(ToolBase, ProjectUtilsMixin):
    name = 'project.patch'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--patch', dest='patches', nargs='+', action='extend')

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
                    console.log(f"Class [b][cyan]{module_name}[/].[magenta]{class_name}[/][/] is not a [b]PatchBase[/]")
                    continue

                console.log(f"Applying [b][cyan]{module_name}[/].[magenta]{class_name}[/][/]")
                patch_inst = class_inst()
                visit_project(self.project, patch_inst)
            else:
                console.log(f"Cannot find [b][cyan]{module_name}[/].[red]{class_name}[/][/]")

        self._save_project(args.project_file)


TOOLS = (
    ProjectFormatTool,
    ProjectPointsTool,
    ProjectCheckTool,
    ProjectPatchTool,
)
