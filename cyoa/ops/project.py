"""Business logic for project-level operations.

This module contains functions for project validation, traversal, and analysis.
All functions work with plain Python data structures and return structured results.
"""

import csv
from dataclasses import dataclass
from typing import Optional, Sequence, TextIO, TYPE_CHECKING

from cyoa.graph.lib import (
    Graph,
    Score,
    Condition,
    AndCondition,
    OrCondition,
    RequiredCondition,
    IncompatibleCondition,
)

if TYPE_CHECKING:
    from cyoa.tools.patch import PatchBase


@dataclass
class DuplicateIssue:
    """Represents a duplicate object ID issue."""
    obj_id: str
    titles: list[str]  # List of "title in row_title (row_id)" strings
    inputs: list[tuple[str, str]]  # List of (obj_id, title) tuples
    outputs: list[tuple[str, str]]  # List of (obj_id, title) tuples


@dataclass
class EmptyIdIssue:
    """Represents an empty ID issue."""
    item_type: str  # "row" or "object"
    title: str
    location: str  # Description of where it was found


@dataclass
class RequirementIssue:
    """Represents a missing requirement issue."""
    obj_id: str
    obj_title: str
    row_title: str
    issue_type: str  # "missing_inputs" or "missing_outputs"
    missing_ids: set[str]


@dataclass
class BackpackIssue:
    """Represents a backpack group issue."""
    row_id: str
    row_title: str
    issue_type: str  # "no_group" or "invalid_group"
    group_id: Optional[str] = None


@dataclass
class CheckResult:
    """Results of project validation checks."""
    duplicate_issues: list[DuplicateIssue]
    empty_id_issues: list[EmptyIdIssue]
    requirement_issues: list[RequirementIssue]
    backpack_issues: list[BackpackIssue]

    @property
    def has_issues(self) -> bool:
        """Return True if any issues were found."""
        return bool(
            self.duplicate_issues
            or self.empty_id_issues
            or self.requirement_issues
            or self.backpack_issues
        )


@dataclass
class AddonEntry:
    """Represents an addon with its requirements."""
    addon_title: str
    addon_requirements_str: str  # String representation of requirements
    requirement_details: list[str]  # List of requirement strings


@dataclass
class ObjectWithAddons:
    """Represents an object that has addons."""
    obj_id: str
    obj_title: str
    addons: list[AddonEntry]


@dataclass
class RowWithAddons:
    """Represents a row containing objects with addons."""
    row_title: str
    objects: list[ObjectWithAddons]


@dataclass
class PowerEntry:
    """Represents a power object with its cost and requirements."""
    row_title: str
    obj_title: str
    obj_cost: str  # Formatted string like "100 rm | 50 sp"
    obj_reqs: str  # Formatted string of requirements or "N/A"


@dataclass
class CostChain:
    """Represents a power upgrade chain with costs."""
    root_id: str
    root_title: str
    total_cost: str  # Formatted string of total costs
    graph: Graph  # The subgraph for this chain


def check_duplicates(project: dict, graph: Optional[Graph] = None) -> tuple[list[DuplicateIssue], list[EmptyIdIssue]]:
    """Check project for duplicate object IDs and empty IDs.

    Args:
        project: The project dict
        graph: Optional pre-built graph (will build if not provided)

    Returns:
        Tuple of (duplicate_issues, empty_id_issues)
    """
    from cyoa.graph.lib import build_graph

    if graph is None:
        graph = build_graph(project)

    object_ids: dict[str, list[str]] = {}
    empty_id_issues: list[EmptyIdIssue] = []

    # Collect all object IDs and check for empty IDs
    for idx, row_data in enumerate(project["rows"]):
        if len(row_data["id"]) == 0:
            empty_id_issues.append(
                EmptyIdIssue(
                    item_type="row",
                    title=row_data["title"],
                    location=f"at index {idx}",
                )
            )

        for obj_idx, object_data in enumerate(row_data["objects"]):
            if len(object_data["id"]) == 0:
                empty_id_issues.append(
                    EmptyIdIssue(
                        item_type="object",
                        title=object_data["title"],
                        location=f"at index {obj_idx} in {row_data['title']} ({row_data['id']})",
                    )
                )
                continue

            object_ids.setdefault(object_data["id"], [])
            object_ids[object_data["id"]].append(
                f"{object_data['title']} in {row_data['title']} ({row_data['id']})"
            )

    # Find duplicates and build issue objects with graph info
    duplicate_issues: list[DuplicateIssue] = []
    for obj_id, titles in object_ids.items():
        if len(titles) > 1:
            vertex = graph.vertices[obj_id]
            inputs = [
                (input_id, graph.objects[input_id].title)
                for input_id in vertex.inputs
            ]
            outputs = [
                (output_id, graph.objects[output_id].title)
                for output_id in vertex.outputs
            ]
            duplicate_issues.append(
                DuplicateIssue(
                    obj_id=obj_id,
                    titles=titles,
                    inputs=inputs,
                    outputs=outputs,
                )
            )

    return duplicate_issues, empty_id_issues


def check_requirements(project: dict, graph: Optional[Graph] = None) -> list[RequirementIssue]:
    """Check project for missing requirement references.

    Args:
        project: The project dict
        graph: Optional pre-built graph (will build if not provided)

    Returns:
        List of requirement issues found
    """
    from cyoa.graph.lib import build_graph

    if graph is None:
        graph = build_graph(project)

    object_ids = set(graph.objects.keys())
    issues: list[RequirementIssue] = []

    for oid, vertex in graph.vertices.items():
        if (obj := graph.objects.get(oid, None)) is None:
            # Unknown object in graph but not in objects dict
            continue

        row = graph.rows[obj.row_id]

        if missing_inputs := (vertex.inputs - object_ids):
            issues.append(
                RequirementIssue(
                    obj_id=oid,
                    obj_title=obj.title,
                    row_title=row.title,
                    issue_type="missing_inputs",
                    missing_ids=missing_inputs,
                )
            )

        if missing_outputs := (vertex.outputs - object_ids):
            issues.append(
                RequirementIssue(
                    obj_id=oid,
                    obj_title=obj.title,
                    row_title=row.title,
                    issue_type="missing_outputs",
                    missing_ids=missing_outputs,
                )
            )

    return issues


def check_backpack(project: dict, ignore: set[str]) -> list[BackpackIssue]:
    """Check project rows for valid backpack group assignments.

    Args:
        project: The project dict
        ignore: Set of row IDs to ignore

    Returns:
        List of backpack issues found
    """
    result_groups = {group["id"]: group["name"] for group in project["groups"]}
    issues: list[BackpackIssue] = []

    for row_data in project["rows"]:
        if row_data["id"] in ignore:
            continue

        gid = row_data.get("resultGroupId", None)
        if not gid:
            issues.append(
                BackpackIssue(
                    row_id=row_data["id"],
                    row_title=row_data["title"],
                    issue_type="no_group",
                )
            )
        elif gid not in result_groups:
            issues.append(
                BackpackIssue(
                    row_id=row_data["id"],
                    row_title=row_data["title"],
                    issue_type="invalid_group",
                    group_id=gid,
                )
            )

    return issues


def check_project(project: dict, ignored_rows: Optional[set[str]] = None) -> CheckResult:
    """Run all project validation checks.

    Args:
        project: The project dict
        ignored_rows: Optional set of row IDs to ignore for backpack checks

    Returns:
        CheckResult with all validation issues
    """
    from cyoa.graph.lib import build_graph

    # Build graph once for efficiency
    graph = build_graph(project)

    duplicate_issues, empty_id_issues = check_duplicates(project, graph)
    requirement_issues = check_requirements(project, graph)
    backpack_issues = check_backpack(project, ignored_rows or set())

    return CheckResult(
        duplicate_issues=duplicate_issues,
        empty_id_issues=empty_id_issues,
        requirement_issues=requirement_issues,
        backpack_issues=backpack_issues,
    )


def visit_project(project: dict, visitor: "PatchBase"):
    """Traverse the project structure and call visitor methods.

    This implements the visitor pattern for project traversal,
    calling the visitor's visit() method for each node in the tree.

    Args:
        project: The project dict
        visitor: A PatchBase instance with visit methods
    """
    from cyoa.tools.patch import PatchContext

    context = PatchContext(
        point_types={d["id"]: d for d in project["pointTypes"]},
        groups={d["id"]: d for d in project["groups"]},
    )

    visitor.visit(node_type="project", node_data=project, parents={}, context=context)

    for row_data in project["backpack"]:
        visitor.visit(
            node_type="backpack.row",
            node_data=row_data,
            parents={"project": project},
            context=context,
        )

    for row_data in project["rows"]:
        visitor.visit(
            node_type="row",
            node_data=row_data,
            parents={"project": project},
            context=context,
        )
        if styling := row_data.get("styling", None):
            visitor.visit(
                node_type="row.styling",
                node_data=styling,
                parents={"project": project, "row": row_data},
                context=context,
            )

        for object_data in row_data["objects"]:
            visitor.visit(
                node_type="object",
                node_data=object_data,
                parents={"project": project, "row": row_data},
                context=context,
            )
            if styling := object_data.get("styling", None):
                visitor.visit(
                    node_type="object.styling",
                    node_data=styling,
                    parents={"project": project, "row": row_data, "obj": object_data},
                    context=context,
                )

            for addon in object_data["addons"]:
                visitor.visit(
                    node_type="object.addon",
                    node_data=addon,
                    parents={"project": project, "row": row_data, "obj": object_data},
                    context=context,
                )

            for points in object_data["scores"]:
                visitor.visit(
                    node_type="object.score",
                    node_data=points,
                    parents={"project": project, "row": row_data, "obj": object_data},
                    context=context,
                )

            for points in object_data["requireds"]:
                visitor.visit(
                    node_type="object.condition",
                    node_data=points,
                    parents={"project": project, "row": row_data, "obj": object_data},
                    context=context,
                )


def collect_addon_rows(project: dict, graph: Graph) -> list[RowWithAddons]:
    """Collect all rows that contain objects with addons.

    Args:
        project: The project dict
        graph: The built graph

    Returns:
        List of rows with their addon-containing objects
    """
    addon_rows = []

    for row_data in project["rows"]:
        addon_objs = []
        for obj_data in row_data["objects"]:
            if (addons := obj_data.get("addons", None)) and len(addons) > 0:
                addon_objs.append(obj_data)

        if len(addon_objs) > 0:
            objects_with_addons = []
            for obj_data in addon_objs:
                obj_meta = graph.objects[obj_data["id"]]
                addon_entries = []

                for addon in obj_meta.addons:
                    requirements_str = str(addon.requirements)
                    requirement_details = _get_requirements(addon.requirements, graph, root=True)
                    addon_entries.append(
                        AddonEntry(
                            addon_title=addon.title,
                            addon_requirements_str=requirements_str,
                            requirement_details=requirement_details,
                        )
                    )

                objects_with_addons.append(
                    ObjectWithAddons(
                        obj_id=obj_data["id"],
                        obj_title=obj_data["title"],
                        addons=addon_entries,
                    )
                )

            addon_rows.append(
                RowWithAddons(
                    row_title=row_data["title"],
                    objects=objects_with_addons,
                )
            )

    return addon_rows


def collect_power_rows(project: dict, graph: Graph, power_row_ids: set[str]) -> list[PowerEntry]:
    """Collect all power objects with their costs and requirements.

    Args:
        project: The project dict
        graph: The built graph
        power_row_ids: Set of row IDs to include

    Returns:
        List of power entries
    """
    power_entries = []

    for row_data in project["rows"]:
        if row_data["id"] not in power_row_ids:
            continue

        for obj_data in row_data["objects"]:
            obj_meta = graph.objects[obj_data["id"]]

            # Format requirements
            if obj_meta.requirements:
                obj_reqs = str.join(
                    "; ",
                    _get_requirements(obj_meta.requirements, graph, root=True)
                )
            else:
                obj_reqs = "N/A"

            # Format costs
            obj_cost = str.join(
                "| ",
                [
                    f"{score.value} {graph.point_types[score.points_id].suffix}"
                    for score in obj_meta.scores
                ]
            )

            power_entries.append(
                PowerEntry(
                    row_title=row_data["title"],
                    obj_title=obj_data["title"],
                    obj_cost=obj_cost,
                    obj_reqs=obj_reqs,
                )
            )

    return power_entries


def analyze_power_costs(
    project: dict,
    power_row_ids: set[str],
    upgrade_row_ids: set[str],
    exclude_powers: set[str],
    min_score: int = 0,
    max_score: int = 10000,
) -> list[CostChain]:
    """Analyze power upgrade chains and compute total costs.

    Args:
        project: The project dict
        power_row_ids: Set of power row IDs
        upgrade_row_ids: Set of upgrade row IDs
        exclude_powers: Set of power IDs to exclude
        min_score: Minimum score threshold
        max_score: Maximum score threshold

    Returns:
        List of cost chains within the score range
    """
    from cyoa.graph.lib import build_graph

    # Build graph with only requirements
    project_graph = build_graph(
        project,
        path_scores=False,
        path_addons=False,
        path_incompatibles=False,
        path_requirements=True,
    )

    # Filter to power and upgrade rows
    powers_graph = project_graph.filter(
        lambda obj, vrt: (
            obj.row_id in (power_row_ids | upgrade_row_ids)
            and obj.obj_id not in exclude_powers
        )
    )

    # Keep only connected vertices
    connected_graph = powers_graph.filter(
        lambda obj, vrt: len(vrt.inputs) > 0 or len(vrt.outputs) > 0
    )

    # Build upgrade chains by backtracking from each object
    upgrade_graphs: dict[str, Graph] = {}

    def backtrack_graph_paths(graph: Graph, root_id: str):
        """Generate all paths from root to leaf nodes by following inputs."""
        def dfs_inputs(node_id: str, path: list[str]):
            next_path = [*path, node_id]
            vertex = graph.vertices[node_id]
            if len(vertex.inputs) == 0:
                yield next_path
            else:
                for input_id in vertex.inputs:
                    yield from dfs_inputs(input_id, next_path)

        yield from dfs_inputs(root_id, [])

    for obj_id in connected_graph.objects.keys():
        graph_paths = backtrack_graph_paths(connected_graph, obj_id)
        graph_nodes = set(node_id for path in graph_paths for node_id in path)

        upgrade_graphs[obj_id] = connected_graph.filter(
            lambda obj, _: obj.obj_id in graph_nodes
        )

    # Calculate total costs for each chain and filter by score
    cost_chains = []

    for root_id, graph in upgrade_graphs.items():
        root_data = graph.objects[root_id]

        # Sum up all scores in the chain
        score_totals: dict[str, Score] = {}
        for object_data in graph.objects.values():
            _add_scores(score_totals, object_data.scores)

        # Check if chain score is within threshold
        chain_score = _get_score_value(score_totals, "rm")  # Default to "rm" point type
        if min_score <= chain_score <= max_score:
            total_cost = str.join(
                ", ",
                [
                    f"{score.value} {connected_graph.point_types[score.points_id].suffix}"
                    for score in score_totals.values()
                ]
            )
            cost_chains.append(
                CostChain(
                    root_id=root_id,
                    root_title=root_data.title,
                    total_cost=total_cost,
                    graph=graph,
                )
            )

    return cost_chains


def write_addons_markdown(addon_rows: list[RowWithAddons], output: TextIO):
    """Write addon information to markdown format.

    Args:
        addon_rows: List of rows with addons
        output: Text stream to write to
    """
    for row in addon_rows:
        output.write(f"## {row.row_title}\n")

        for obj in row.objects:
            output.write(f"**{obj.obj_title}**\n")

            for addon in obj.addons:
                output.write(f"  * __{addon.addon_title}__<br/>\n")
                output.write(f"    {addon.addon_requirements_str}<br/>\n")
                if addon.requirement_details:
                    reqs = str.join(
                        "<br/>\n",
                        [f"    {req}" for req in addon.requirement_details]
                    )
                    output.write(f"{reqs}\n")

            output.write("\n")


def write_powers_csv(power_entries: list[PowerEntry], output: TextIO):
    """Write power information to CSV format.

    Args:
        power_entries: List of power entries
        output: Text stream to write to
    """
    csv_writer = csv.DictWriter(
        output,
        fieldnames=["row_title", "obj_title", "obj_cost", "obj_reqs"]
    )
    csv_writer.writeheader()

    for entry in power_entries:
        csv_writer.writerow({
            "row_title": entry.row_title,
            "obj_title": entry.obj_title,
            "obj_cost": entry.obj_cost,
            "obj_reqs": entry.obj_reqs,
        })


# Private helper functions

def _get_requirements(reqs: Optional[Condition], graph: Graph, root: bool) -> list[str]:
    """Extract requirement strings from a condition tree."""
    match reqs:
        case AndCondition(terms) if root:
            return [
                req
                for term in terms
                for req in _get_requirements(term, graph, root=False)
            ]
        case OrCondition(terms) if root:
            return [
                req
                for term in terms
                for req in _get_requirements(term, graph, root=False)
            ]
        case RequiredCondition(object_id):
            if obj_data := graph.objects.get(object_id, None):
                return [f"Required: {obj_data.title}"]
            else:
                return [f"Required: {object_id}"]
        case IncompatibleCondition(object_id):
            if obj_data := graph.objects.get(object_id, None):
                return [f"Incompatible: {obj_data.title}"]
            else:
                return [f"Incompatible: {object_id}"]
        case _:
            return []


def _add_scores(totals: dict[str, Score], scores: Sequence[Score]):
    """Add scores to a running total, taking max per object."""
    max_scores = {}
    for score in scores:
        if score.points_id not in max_scores:
            max_scores[score.points_id] = score.value
        else:
            max_scores[score.points_id] = max(
                max_scores[score.points_id], score.value
            )

    for points_id, value in max_scores.items():
        if points_id not in totals:
            totals[points_id] = Score(
                points_id=points_id, value=0, requirements=None
            )
        totals[points_id].value += value


def _get_score_value(totals: dict[str, Score], score_id: str) -> int:
    """Get the value for a specific score type."""
    if score_id in totals:
        return totals[score_id].value
    else:
        return 0
