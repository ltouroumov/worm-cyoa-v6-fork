from pathlib import Path
import graphviz

from cyoa.graph.lib import build_graph
from cyoa.tools.lib import ProjectUtilsMixin, ToolBase, console


class GraphBuildTool(ToolBase, ProjectUtilsMixin):
  name = "graph.build"

  @classmethod
  def setup_parser(cls, parent):
    parser = parent.add_parser(cls.name, help="Create connection graph of project.")
    parser.add_argument("--project", dest="project_file", type=Path, required=True)
    parser.add_argument("--nodes", nargs='+', action='extend', required=True)
    parser.add_argument("--exclude", nargs='+', action='extend')
    parser.add_argument("--max-depth", type=int, default=3)

  def run(self, args):
    self._load_project(args.project_file)
    graph = build_graph(self.project)

    dot = graphviz.Digraph(engine="sfdp", graph_attr={'overlap_scaling': '10', 'K': "2"})

    max_depth = args.max_depth
    exclude_nodes = set(args.exclude or [])
    node_count = 0
    node_stack = [(0, node_id) for node_id in args.nodes]
    node_set = set()
    while len(node_stack) > 0:
      # Add node to the graph
      cur_depth, obj_id = node_stack.pop()
      if obj_id in exclude_nodes:
        continue

      obj_data = graph.objects[obj_id]
      vertex = graph.vertices[obj_id]
      dot.node(obj_id, obj_data.title)
      node_set.add(obj_id)
      node_count += 1

      if cur_depth < max_depth:
        # Add connected nodes to the graph
        for node_id in vertex.inputs | vertex.outputs:
          if node_id in node_set:
            continue

          node_stack.append((cur_depth+1, node_id))

    console.print(f"Added {node_count} nodes")

    edge_count = 0
    edge_set = set()
    for vertex_id in node_set:
      vertex = graph.vertices[vertex_id]
      if len(vertex.inputs) == 0 and len(vertex.outputs) == 0:
        continue  # skip nodes with no connections

      for input_id in vertex.inputs:
        if input_id not in node_set or (vertex.id, input_id) in edge_set or (input_id, vertex.id) in edge_set:
          continue # exclude connections outside the graph
        dot.edge(input_id, vertex.id)
        edge_set.add((input_id, vertex.id))
        edge_count += 1
      for output_id in vertex.outputs:
        if output_id not in node_set or (vertex.id, output_id) in edge_set or (output_id, vertex.id) in edge_set:
          continue # exclude connections outside the graph
        dot.edge(vertex.id, output_id)
        edge_set.add((vertex.id, output_id))
        edge_count += 1

    console.print(f"Added {edge_count} edges")

    console.print("Rendering ...")
    res = dot.render(f"tmp/cyoa-graph.gv")
    console.print(res)


TOOLS = [GraphBuildTool]
