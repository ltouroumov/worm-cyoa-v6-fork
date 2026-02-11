import importlib
from pathlib import Path
from shutil import copyfile
import sys
from asciidag.graph import Graph as DAG
from asciidag.node import Node as DAGNode

from rich.table import Table
from cyoa.graph.lib import Graph

from cyoa.tools.lib import console, ToolBase, ProjectUtilsMixin
from cyoa.tools.meta import POWER_ROWS, UPGRADE_ROWS
from cyoa.tools.patch import PatchBase
from cyoa.ops.project import (
  check_project,
  visit_project,
  collect_addon_rows,
  collect_power_rows,
  write_addons_markdown,
  write_powers_csv,
  analyze_power_costs,
)


class ProjectFormatTool(ToolBase, ProjectUtilsMixin):
  name = "project.format"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Format a project file")
    parser.add_argument("--project", dest="project_file", type=Path)
    parser.add_argument("--min", dest="minify", action="store_true")
    parser.add_argument("--skip-backup", action="store_true")

  def run(self, args):
    self._load_project(args.project_file)

    if args.skip_backup is False:
      backup_file = args.project_file.parent / f"{args.project_file.name}.bak"
      console.log(f"Backing up project to {backup_file}")
      copyfile(args.project_file, backup_file)

    self._save_project(args.project_file, neat=not args.minify)


class ProjectPointsTool(ToolBase, ProjectUtilsMixin):
  name = "project.points"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(
      cls.name, help="Display point/score information for objects"
    )
    parser.add_argument("--project", dest="project_file", type=Path)
    parser.add_argument(
      "--row-id", dest="row_ids", type=str, nargs="+", action="extend", default=[]
    )
    parser.add_argument(
      "--point-id",
      dest="point_ids",
      type=str,
      nargs="+",
      action="extend",
      default=[],
    )

  def run(self, args):
    self._load_project(args.project_file)

    points_data = {
      point_type["id"]: point_type
      for point_type in self.project["pointTypes"]
      if len(args.point_ids) == 0 or point_type["id"] in args.point_ids
    }
    console.print_json(data=points_data)

    points_columns = tuple(
      point_type_id for point_type_id in sorted(points_data.keys())
    )
    points_table = Table(
      "row_id",
      "obj_id",
      "title",
      *(f"{points_data[pid]['name']} ({pid})" for pid in points_columns),
    )
    for row_data in self.project["rows"]:
      if len(args.row_ids) > 0 and row_data["id"] not in args.row_ids:
        continue

      for object_data in row_data["objects"]:
        object_scores = {
          score["id"]: f"{score['value']} {score['afterText']}"
          for score in object_data["scores"]
        }
        points_table.add_row(
          row_data["id"],
          object_data["id"],
          object_data["title"],
          *(object_scores.get(pid, "") for pid in points_columns),
        )

    console.print(points_table)


class ProjectCheckTool(ToolBase, ProjectUtilsMixin):
  name = "project.check"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(
      cls.name, help="Check project for duplicates and invalid references"
    )
    parser.add_argument("--project", dest="project_file", type=Path)

  def run(self, args):
    self._load_project(args.project_file)

    # Run all checks
    ignored_rows = {
      "ckrc",
      "0v3n",
      "otza",
      "dlut",
      "umg9",
      "lip0",
      "4dzp",
      "dn8o",
      "h4ce",
      "kgqo",
      "g51j",
      "hd9l",
      "0v52",
      "ObjectOP",
      "nsof",
      "v62t",
    }
    result = check_project(self.project, ignored_rows)

    # Display empty ID issues
    console.print("[b]Check Empty IDs[/]")
    if result.empty_id_issues:
      for issue in result.empty_id_issues:
        console.print(
          f"[red]{issue.item_type.title()} [b]'{issue.title}'[/] {issue.location} has an empty ID[/]"
        )
    else:
      console.print("[green]No empty ID issues found[/]")

    # Display duplicates
    console.print("\n[b]Check Duplicates[/]")
    if result.duplicate_issues:
      for issue in result.duplicate_issues:
        console.print(f"Duplicate {issue.obj_id}: {str.join(', ', issue.titles)}")
        for input_id, input_title in issue.inputs:
          console.print(f"  input: {input_title} ({input_id})")
        for output_id, output_title in issue.outputs:
          console.print(f"  output: {output_title} ({output_id})")
    else:
      console.print("[green]No duplicate issues found[/]")

    # Display requirement issues
    console.print("\n[b]Check Requirements[/]")
    if result.requirement_issues:
      for issue in result.requirement_issues:
        issue_label = (
          "Missing inputs"
          if issue.issue_type == "missing_inputs"
          else "Missing outputs"
        )
        console.print(
          f"{issue_label} for {issue.row_title} / {issue.obj_title} ({issue.obj_id}): {issue.missing_ids}"
        )
    else:
      console.print("[green]No requirement issues found[/]")

    # Display backpack issues
    console.print("\n[b]Check Backpack[/]")
    if result.backpack_issues:
      for issue in result.backpack_issues:
        if issue.issue_type == "no_group":
          console.print(f"Row {issue.row_title} ({issue.row_id}) has no group")
        else:
          console.print(
            f"Row {issue.row_title} ({issue.row_id}) has invalid group {issue.group_id}"
          )
    else:
      console.print("[green]No backpack issues found[/]")


class ProjectPatchTool(ToolBase, ProjectUtilsMixin):
  name = "project.patch"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Apply patches to a project file")
    parser.add_argument("--project", dest="project_file", type=Path)
    parser.add_argument("--patch", dest="patches", nargs="+", action="extend")

  def run(self, args):
    self._load_project(args.project_file)

    for patch in args.patches:
      module_name, class_name = str.split(patch, ":", maxsplit=2)
      try:
        module_inst = importlib.import_module(module_name)
      except:  # noqa: E722
        console.log(f"Cannot load [b cyan]{module_name}[/]")
        console.print_exception()
        continue

      if class_inst := getattr(module_inst, class_name, None):
        if not issubclass(class_inst, PatchBase):
          console.log(
            f"Class [b][cyan]{module_name}[/].[magenta]{class_name}[/][/] is not a [b]PatchBase[/]"
          )
          continue

        console.log(f"Applying [b][cyan]{module_name}[/].[magenta]{class_name}[/][/]")
        patch_inst = class_inst()
        visit_project(self.project, patch_inst)
      else:
        console.log(f"Cannot find [b][cyan]{module_name}[/].[red]{class_name}[/][/]")

    self._save_project(args.project_file)


class ProjectCostsTool(ToolBase, ProjectUtilsMixin):
  name = "project.costs"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Analyze power costs and upgrade chains")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--min-score", dest="min_score", type=int, default=0)
    parser.add_argument("--max-score", dest="max_score", type=int, default=10000)
    parser.add_argument("--output", dest="output_file", type=Path, default=None)

  def run(self, args):
    self._load_project(args.project_file)

    EXCLUDE_POWERS = {
      "c26q",  # Cache
      "bbio",  # Gamer System
    }

    # Analyze power costs
    cost_chains = analyze_power_costs(
      self.project,
      power_row_ids=POWER_ROWS,
      upgrade_row_ids=UPGRADE_ROWS,
      exclude_powers=EXCLUDE_POWERS,
      min_score=args.min_score,
      max_score=args.max_score,
    )

    console.log(f"Found {len(cost_chains)} upgrade chains")

    # Format and print results
    output_file = sys.stdout
    if args.output_file:
      output_file = open(args.output_file, "w+")

    for chain in cost_chains:
      print(
        f"### {chain.root_title} => {chain.total_cost}",
        file=output_file,
      )
      print("```", file=output_file)
      self._print_tree(chain.graph, chain.root_id, output_file)
      print("```", file=output_file)

    if args.output_file:
      output_file.close()

  def _print_tree(self, graph: Graph, root_id: str, file):
    """Print a dependency tree in ASCII format."""
    nodes = {}
    tips = set()

    def show_prices(scores):
      return str.join(
        ", ",
        [
          f"{score.value} {graph.point_types[score.points_id].suffix}"
          for score in scores
        ],
      )

    def print_node(node_id: str, parent_node: DAGNode):
      if node_id not in nodes:
        node_data = graph.objects[node_id]
        nodes[node_id] = DAGNode(
          item=f"[{node_id}] {node_data.title} ({show_prices(node_data.scores)})",
          parents=[parent_node] if parent_node else None,
        )

      children = graph.vertices[node_id].inputs
      if len(children) == 0:
        tips.add(nodes[node_id])

      for child_id in children:
        print_node(child_id, nodes[node_id])

    print_node(root_id, parent_node=None)
    DAG(file, use_color=False).show_nodes(tips)


class ProjectAddonsTool(ToolBase, ProjectUtilsMixin):
  name = "project.addons"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="List addons with their requirements")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--output", dest="output_file", type=Path, default=None)

  def run(self, args):
    from cyoa.graph.lib import build_graph

    self._load_project(args.project_file)
    graph = build_graph(self.project)

    # Collect addon data
    addon_rows = collect_addon_rows(self.project, graph)

    # Write output
    if args.output_file:
      with open(args.output_file, mode="w+") as output:
        write_addons_markdown(addon_rows, output)
    else:
      write_addons_markdown(addon_rows, sys.stdout)


class ProjectPowersTool(ToolBase, ProjectUtilsMixin):
  name = "project.powers"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Export powers as CSV with requirements")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--output", dest="output_file", type=Path, default=None)

  def run(self, args):
    from cyoa.graph.lib import build_graph

    self._load_project(args.project_file)
    graph = build_graph(self.project)

    # Collect power data
    power_entries = collect_power_rows(self.project, graph, POWER_ROWS)

    # Write output
    if args.output_file:
      with open(args.output_file, mode="w+") as output:
        write_powers_csv(power_entries, output)
    else:
      write_powers_csv(power_entries, sys.stdout)


TOOLS = (
  ProjectFormatTool,
  ProjectPointsTool,
  ProjectCheckTool,
  ProjectPatchTool,
  ProjectCostsTool,
  ProjectAddonsTool,
  ProjectPowersTool,
)
