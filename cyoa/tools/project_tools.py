import importlib
from io import TextIOBase
from pathlib import Path
from shutil import copyfile
import sys
from typing import List, Dict, Optional, Sequence
from asciidag.graph import Graph as DAG
from asciidag.node import Node as DAGNode

from rich.table import Table
from cyoa.graph.lib import Graph

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


def show_duplicates(obj_id, titles, graph: Graph):
    console.print(f"Duplicate {obj_id}: {str.join(', ', titles)}")
    vertex = graph.vertices[obj_id]
    for input_id in vertex.inputs:
        obj_data = graph.objects[input_id]
        console.print(f"  input: {obj_data.title} ({obj_data.obj_id})")

    for output_id in vertex.outputs:
        obj_data = graph.objects[output_id]
        console.print(f"  output: {obj_data.title} ({obj_data.obj_id})")


def check_duplicates(project):
    from cyoa.graph.lib import build_graph

    object_ids: Dict[str, List] = {}
    graph = build_graph(project)
    for row_data in project['rows']:
        for object_data in row_data['objects']:
            object_ids.setdefault(object_data['id'], [])
            object_ids[object_data['id']].append(object_data['title'])

    for obj_id, titles in object_ids.items():
        if len(titles) > 1:
            show_duplicates(obj_id, titles, graph)


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
                f"Missing inputs for {row.title} / {obj.title} ({oid}): {missing_inputs}"
            )
        if len(missing_outputs := (vertex.outputs - object_ids)) > 0:
            console.print(
                f"Missing outputs for {row.title} / {obj.title} ({oid}): {missing_outputs}"
            )


def check_backpack(project, ignore: set[str]):
    result_groups = {group['id']: group['name']
                     for group in project['groups']}

    for row_data in project['rows']:
        if row_data['id'] in ignore:
            continue

        gid = row_data.get('resultGroupId', None)
        if not gid:
            console.print(
                f'Row {row_data["title"]} ({row_data["id"]}) has no group'
            )
        elif gid not in result_groups:
            console.print(
                f'Row {row_data["title"]} ({row_data["id"]}) has invalid group {gid}'
            )


class ProjectCheckTool(ToolBase, ProjectUtilsMixin):
    name = 'project.check'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        console.print('[b]Check Duplicates[/]')
        check_duplicates(self.project)

        console.print('[b]Check Requirements[/]')
        check_requirements(self.project)

        console.print('[b]Check Backpack[/]')
        check_backpack(
            self.project,
            {'ckrc', '0v3n', 'otza', 'dlut',
             '4dzp', 'dn8o', 'h4ce', 'kgqo', 'g51j'}
        )


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


class ProjectCostsTool(ToolBase, ProjectUtilsMixin):
    name = 'project.costs'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file',
                            type=Path, required=True)
        parser.add_argument('--min-score', dest='min_score',
                            type=int, default=0)
        parser.add_argument('--max-score', dest='max_score',
                            type=int, default=10000)
        parser.add_argument('--output', dest='output_file',
                            type=Path, default=None)

    def run(self, args):
        from cyoa.graph.lib import build_graph, topological_sort, collect_object_deps, Score

        self._load_project(args.project_file)

        MIN_THRESHOLD = args.min_score
        MAX_THRESHOLD = args.max_score

        POWER_ROWS = {
            'dljy',  # Tier 0 / Lesser Powers
            'tc7n',  # Tier 1 - Mover
            'wtn7',  # Tier 1 - Shaker
            'vs8q',  # Tier 1 - Brute
            'r2u5',  # Tier 1 - Breaker
            'ghw4',  # Tier 1 - Master
            'nwgn',  # Tier 1 - Tinker
            'z0zb',  # Tier 1 - Blaster
            '4x5f',  # Tier 1 - Thinker
            'xu5q',  # Tier 1 - Striker
            'b7r5',  # Tier 1 - Changer
            'bbyi',  # Tier 1 - Trump
            'hyzg',  # Tier 1 - Stranger
            'jsch',  # Power Copy
            'zg2f',  # Tier 2 Powers
            'e018',  # Tier 3 Powers
            'qldk',  # Power Fusions (Shard)
            'hd9l',  # Power Upgrades (Shard)
            'iu9w',  # (Entity) Shard Clusters
            'p2ty',  # Physical Powers
            'd4pp',  # Mental and Psychic Powers
            'tg45',  # Magic and Mystic Powers
            '1ok7',  # Spiritual and Divine Powers
            'y3gb',  # Technology and Artifice Powers
            '3pua',  # Esoteric and Abstract Powers
            # 'mbxo',  # Ascension Path
            'xk24',  # Foundation Powers
            'umg9',  # Keystone Powers
            # 't6in',  # Paragon Powers
            'rbdo',  # Objects of Power
        }

        UPGRADE_ROWS = {
            'o58j',  # (Master) Custom Endbringer Powers
            'qd5r',  # (Master) Custom Endbringer Appearance
            'jmco',  # (Changer) Custom Endbringer Powers
            'ab0a',  # (Changer) Custom Endbringer Appearance
            'wy6p',  # Doll Powers
            'qldk',  # Power Fusions (Shard)
            'hd9l',  # Power Upgrades (Shard)
            'a0dv',  # Base Power Upgrades
            'fqrt',  # Physical Power Upgrades
            '8lqj',  # Mental and Psychic Power Upgrades
            'arnl',  # Magic and Mystic Power Upgrades
            '0ye0',  # Spiritual and Divine Power Upgrades
            'rw0w',  # Technology and Artifice Power Upgrades
            'ufcz',  # Esoteric and Abstract Power Upgrades
            'c369',  # Ascension Upgrades
            'pmie',  # Eternal Mangekyō Sharingan Abilities
            '0d43',  # Destiny Upgrades
            'dj3w',  # Foundation Upgrades
            'jzns',  # Paragon Upgrades
            's92s',  # Object of Power Upgrades
            'a3ql',  # Ascension Fusions
        }

        EXCLUDE_POWERS = {
            'c26q',  # Cache
            'bbio',  # Gamer System
        }

        # Extract only objects that are in the power rows
        project_graph = build_graph(
            self.project,
            path_scores=False,
            path_addons=False,
            path_incompatibles=False,
            path_requirements=True
        )

        powers_graph = project_graph.filter(
            lambda obj, vrt: (obj.row_id in (POWER_ROWS | UPGRADE_ROWS)
                              and obj.obj_id not in EXCLUDE_POWERS)
        )

        console.log(f"Powers: {len(powers_graph.vertices)}")

        connected_graph = powers_graph.filter(
            lambda obj, vrt: len(vrt.inputs) > 0 or len(vrt.outputs) > 0
        )

        console.log(f"Vertices: {len(connected_graph.vertices)}")

        upgrade_graphs: dict[str, Graph] = {}

        def backtrack_graph_paths(graph: Graph, root_id: str):
            def dfs_inputs(node_id: str, path: list[str]):
                next_path = [*path, node_id]
                vertex = graph.vertices[node_id]
                if len(vertex.inputs) == 0:
                    yield next_path
                else:
                    for output_id in vertex.inputs:
                        yield from dfs_inputs(output_id, next_path)

            yield from dfs_inputs(root_id, [])

        for obj_id, obj_data in connected_graph.objects.items():
            graph_paths = backtrack_graph_paths(connected_graph, obj_id)
            graph_nodes = set(node_id for path in graph_paths for node_id in path)

            upgrade_graphs[obj_id] = connected_graph.filter(
                lambda obj, _: obj.obj_id in graph_nodes
            )

        def show_prices(scores: Sequence[Score]):
            return str.join(', ', [
                f"{score.value} {connected_graph.point_types[score.points_id].suffix}"
                for score in scores
            ])

        def add_score(totals: dict[str, Score], scores: list[Score]):
            max_scores = {}
            for score in scores:
                if score.points_id not in max_scores:
                    max_scores[score.points_id] = score.value
                else:
                    max_scores[score.points_id] = max(
                        max_scores[score.points_id],
                        score.value
                    )

            for points_id, score in max_scores.items():
                if points_id not in totals:
                    totals[points_id] = Score(
                        points_id=points_id,
                        value=0,
                        requirements=None
                    )

                totals[points_id].value += score

        def get_score(totals: dict[str, Score], score_id: str):
            if score_id in totals:
                return totals[score_id].value
            else:
                return 0

        def print_tree(graph: Graph, root_id: str, file):
            nodes = {}
            tips = set()

            def print_node(node_id: str, parent_node: DAGNode):
                if node_id not in nodes:
                    node_data = graph.objects[node_id]
                    nodes[node_id] = DAGNode(
                        item=f"[{node_id}] {node_data.title} ({show_prices(node_data.scores)})",
                        parents=[parent_node] if parent_node else None
                    )

                children = graph.vertices[node_id].inputs
                if len(children) == 0:
                    tips.add(nodes[node_id])

                for child_id in children:
                    print_node(child_id, nodes[node_id])

            print_node(root_id, parent_node=None)

            DAG(file, use_color=False).show_nodes(tips)

        console.log(f"Graphs: {len(upgrade_graphs)}")

        output_file = sys.stdout
        if args.output_file:
            output_file = open(args.output_file, 'w+')

        for root_id, graph in upgrade_graphs.items():
            root_data = graph.objects[root_id]

            score_totals = {}
            for object_data in graph.objects.values():
                add_score(score_totals, object_data.scores)

            chain_score = get_score(score_totals, 'rm')
            if chain_score >= MIN_THRESHOLD and chain_score <= MAX_THRESHOLD:
                print(
                    f"### {root_data.title} => {show_prices(score_totals.values())}", 
                    file=output_file
                )
                print(f"```", file=output_file)
                print_tree(graph, root_id, output_file)
                print(f"```", file=output_file)


class ProjectAddonsTool(ToolBase, ProjectUtilsMixin):
    name = 'project.addons'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file',
                            type=Path, required=True)
        parser.add_argument('--output', dest='output_file',
                            type=Path, default=None)

    def run(self, args):
        from cyoa.graph.lib import (
            build_graph, Condition, 
            AndCondition, OrCondition, 
            RequiredCondition, IncompatibleCondition
        )
        
        self._load_project(args.project_file)
        graph = build_graph(self.project)

        if args.output_file:
            output: TextIOBase = open(args.output_file, mode='w+')
        else:
            output: TextIOBase = sys.stdout
        
        addon_rows = []
        for row_data in self.project['rows']:
            addon_objs = []
            for obj_data in row_data['objects']:
                if (addons := obj_data.get('addons', None)) and len(addons) > 0:
                    addon_objs.append(obj_data)

            if len(addon_objs) > 0:
                addon_rows.append([row_data, addon_objs])


        def get_requirements(reqs: Optional[Condition], root: bool):
            match reqs:
                case AndCondition(terms) if root:
                    return [
                        req
                        for term in terms
                        for req in get_requirements(term, root=False)
                    ]
                case OrCondition(terms) if root:
                    return [
                        req
                        for term in terms
                        for req in get_requirements(term, root=False)
                    ]
                case RequiredCondition(object_id):
                    obj_data = graph.objects[object_id]
                    return [f"Required: {obj_data.title}"]
                case IncompatibleCondition(object_id):
                    obj_data = graph.objects[object_id]
                    return [f"Incompatible: {obj_data.title}"]
                case _:
                    return []


        for row_data, objects in addon_rows:
            output.write(f"## {row_data['title']}\n")

            for obj_data in objects:
                output.write(f"**{obj_data['title']}**\n")
                
                obj_meta = graph.objects[obj_data['id']]

                for addon in obj_meta.addons:
                    output.write(f"  * __{addon.title}__<br/>\n")
                    output.write(f"    {addon.requirements}<br/>\n")
                    reqs = str.join("<br/>\n", [
                        f"    {req}"
                        for req in get_requirements(addon.requirements, root=True)
                    ])
                    output.write(f"{reqs}\n")
                
                output.write("\n")


TOOLS = (
    ProjectFormatTool,
    ProjectPointsTool,
    ProjectCheckTool,
    ProjectPatchTool,
    ProjectCostsTool,
    ProjectAddonsTool,
)
