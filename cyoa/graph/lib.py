import itertools
import json
import hashlib
from collections import defaultdict
from dataclasses import dataclass
from operator import attrgetter
from typing import List, Dict, Optional, Generator, Set, OrderedDict
from abc import ABC


@dataclass
class PointType:
    points_id: str
    name: str
    suffix: str
    starting_sum: int


@dataclass
class Condition(ABC):
    def run(self, choices):
        raise NotImplementedError


@dataclass
class TermCondition(Condition):
    data: dict

    def run(self, choices):
        return False


@dataclass
class RequiredCondition(Condition):
    object_id: str

    def run(self, choices):
        return self.object_id in choices

    def __repr__(self):
        return self.object_id


@dataclass
class IncompatibleCondition(Condition):
    object_id: str

    def run(self, choices):
        return self.object_id not in choices

    def __repr__(self):
        return f"!{self.object_id}"


@dataclass
class AndCondition(Condition):
    terms: List[Condition]

    def run(self, choices):
        return all(term.run(choices) for term in self.terms)

    def __repr__(self):
        return "(" + str.join(" && ", map(repr, self.terms)) + ")"


@dataclass
class OrCondition(Condition):
    terms: List[Condition]

    def run(self, choices):
        return any(term.run(choices) for term in self.terms)

    def __repr__(self):
        return "(" + str.join(" || ", map(repr, self.terms)) + ")"


@dataclass
class Score:
    points_id: str
    value: int
    requirements: Optional[Condition]


@dataclass
class Addon:
    title: str
    requirements: Optional[Condition]


@dataclass
class RowObject:
    obj_id: str
    row_id: str
    title: str
    requirements: Optional[Condition]
    addons: List[Addon]
    scores: List[Score]


@dataclass
class RowData:
    row_id: str
    title: str


@dataclass
class Edge:
    start: str
    end: str


@dataclass
class Vertex:
    id: str
    inputs: Set[str]
    outputs: Set[str]


def collect_condition_deps(cond: Optional[Condition],
                           path_requirements: bool = True,
                           path_incompatibles: bool = True):
    if isinstance(cond, (AndCondition, OrCondition)):
        for item in cond.terms:
            yield from collect_condition_deps(item,
                                              path_requirements,
                                              path_incompatibles)
    elif isinstance(cond, RequiredCondition) and path_requirements:
        yield cond.object_id
    elif isinstance(cond, IncompatibleCondition) and path_incompatibles:
        yield cond.object_id


def collect_object_deps(obj: RowObject,
                        path_requirements: bool = True,
                        path_incompatibles: bool = True,
                        path_scores: bool = True,
                        path_addons: bool = True):
    yield from collect_condition_deps(obj.requirements,
                                      path_requirements,
                                      path_incompatibles)
    if path_scores:
        for score in obj.scores:
            yield from collect_condition_deps(score.requirements,
                                              path_requirements,
                                              path_incompatibles)
    if path_addons:
        for addon in obj.addons:
            yield from collect_condition_deps(addon.requirements,
                                              path_requirements,
                                              path_incompatibles)


@dataclass
class Graph:
    rows: Dict[str, RowData]
    objects: Dict[str, RowObject]
    point_types: Dict[str, PointType]

    path_requirements: bool = True
    path_incompatibles: bool = True
    path_scores: bool = True
    path_addons: bool = True

    _vertices: Dict[str, Vertex] = None

    def objects_in_row(self, row_id):
        return sorted(filter(lambda item: item.row_id == row_id, self.objects.values()), key=attrgetter('obj_id'))

    def filter(self, filter=None):
        self._build_vertices()
        objects = {obj_id: obj
                   for obj_id, obj in self.objects.items()
                   if filter is None or filter(obj, self._vertices.get(obj_id, None))}
        row_ids = {obj.row_id for obj in objects.values()}
        rows = {row_id: row
                for row_id, row in self.rows.items()
                if row_id in row_ids}
        
        return Graph(
            rows, objects,
            self.point_types,
            path_requirements=self.path_requirements,
            path_incompatibles=self.path_incompatibles,
            path_scores=self.path_scores,
            path_addons=self.path_addons
        )

    def _build_vertices(self):
        self._vertices = {}

        for obj in self.objects.values():
            self._vertices[obj.obj_id] = Vertex(
                obj.obj_id,
                set(), set()
            )

        deps = ((obj.obj_id, dep)
                for obj in self.objects.values()
                for dep in collect_object_deps(obj,
                                               path_requirements=self.path_requirements,
                                               path_incompatibles=self.path_incompatibles,
                                               path_scores=self.path_scores,
                                               path_addons=self.path_addons)
                if dep in self.objects)
        for oid, dep in deps:
            self._vertices[dep].outputs.add(oid)
            self._vertices[oid].inputs.add(dep)

    @property
    def vertices(self):
        if self._vertices is None:
            self._build_vertices()

        return self._vertices


@dataclass
class Component:
    component_id: str
    object_ids: Set[str]
    inputs: Set[str]
    outputs: Set[str]

    @property
    def object_id(self):
        return list(sorted(self.object_ids))[0]


@dataclass
class Stage:
    objects: OrderedDict[str, RowObject]


def build_graph(project_data,
                path_requirements: bool = True,
                path_incompatibles: bool = True,
                path_scores: bool = True,
                path_addons: bool = True):
    def build_requirement(data) -> Condition:
        if data['type'] == 'id' and data['required']:
            return RequiredCondition(data['reqId'])
        elif data['type'] == 'id' and not data['required']:
            return IncompatibleCondition(data['reqId'])
        elif data['type'] == 'or' and data['required']:
            return OrCondition([RequiredCondition(item['req'])
                                for item in data['orRequired'] if item['req']])
        else:
            return TermCondition(data)

    def build_requirements(data: list) -> Optional[Condition]:
        if len(data) == 0:
            return None
        elif len(data) == 1:
            return build_requirement(data[0])
        else:
            return AndCondition([build_requirement(item) for item in data])

    def build_score(data) -> Score:
        return Score(
            points_id=data['id'],
            value=int(data['value']),
            requirements=build_requirements(data['requireds'])
        )

    def build_addon(data) -> Addon:
        return Addon(
            title=data['title'],
            requirements=build_requirements(data['requireds'])
        )

    def build_object(object_data, row_id) -> RowObject:
        return RowObject(
            obj_id=object_data['id'],
            row_id=row_id,
            title=object_data['title'],
            requirements=build_requirements(object_data['requireds']),
            addons=[build_addon(data) for data in object_data['addons']],
            scores=[build_score(data) for data in object_data['scores']]
        )

    def build_row(row_data) -> RowData:
        return RowData(
            row_id=row_data['id'],
            title=row_data['title'],
        )

    return Graph(
        rows={row_data['id']: build_row(row_data)
              for row_data in project_data['rows']},
        objects={object_data['id']: build_object(object_data, row_data['id'])
                 for row_data in project_data['rows']
                 for object_data in row_data['objects']},
        point_types={data['id']: PointType(points_id=data['id'], name=data['name'], suffix=data['afterText'], starting_sum=data['startingSum'])
                     for data in project_data['pointTypes']},
        path_requirements=path_requirements,
        path_incompatibles=path_incompatibles,
        path_scores=path_scores,
        path_addons=path_addons
    )


def find_strongly_connected_components(graph: Graph):
    "Tarjan's Algorithm"
    last_group_index = 0
    stack = []
    index = {}
    lowlink = {}
    components = {}
    component_ownership = {}

    def strong_connect(key: str, vertex: Vertex):
        nonlocal last_group_index

        index[key] = last_group_index
        lowlink[key] = last_group_index
        last_group_index += 1
        stack.append(key)

        for child_key in vertex.outputs:
            if child_key not in lowlink:
                strong_connect(child_key, graph.vertices[child_key])
                lowlink[key] = min(lowlink[key], lowlink[child_key])
            elif child_key in stack:
                lowlink[key] = min(lowlink[key], index[child_key])

        if index[key] == lowlink[key]:
            object_ids = set()
            while stack[-1] != key:
                object_ids.add(stack.pop())
            object_ids.add(stack.pop())

            component_id = hashlib.sha256(
                str.join(';', object_ids).encode('utf-8')).hexdigest()[0:6]
            components[component_id] = Component(
                component_id=component_id,
                object_ids=object_ids,
                inputs=set(),
                outputs=set()
            )
            component_ownership.update({
                oid: component_id for oid in object_ids
            })

    for key, vertex in graph.vertices.items():
        if key not in index:
            strong_connect(key, vertex)

    # Build component connections
    for key, component in components.items():
        component.inputs = {
            component_ownership[vertex]
            for oid in component.object_ids
            for vertex in graph.vertices[oid].inputs
            if vertex not in component.object_ids
        }
        component.outputs = {
            component_ownership[vertex]
            for oid in component.object_ids
            for vertex in graph.vertices[oid].outputs
            if vertex not in component.object_ids
        }

    return components


def topological_sort(components: Dict[str, Component | Vertex]):
    """Sort values subject to dependency constraints"""
    num_heads = defaultdict(int)  # num arrows pointing in
    for key, component in components.items():
        num_heads[key] = len(component.inputs)

    ordered = [key for key in components.keys() if num_heads[key] == 0]
    for key in ordered:
        for child in components[key].outputs:
            num_heads[child] -= 1
            if num_heads[child] == 0:
                ordered.append(child)

    cycles = {key: (components[key], heads) for key,
              heads in num_heads.items() if key not in ordered}
    return ordered, cycles
