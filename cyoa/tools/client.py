import argparse
from typing import Type, Dict

from cyoa.tools.lib import ToolBase
from cyoa.tools import (
  project_tools,
  row_tools,
  object_tools,
  media_tools,
  merge_tools,
  wiki_tools,
  md_tools,
  style_tools,
  build,
  scripts,
)

TOOLS: tuple[Type[ToolBase], ...] = (
  *project_tools.TOOLS,
  *row_tools.TOOLS,
  *object_tools.TOOLS,
  *media_tools.TOOLS,
  *merge_tools.TOOLS,
  *wiki_tools.TOOLS,
  *md_tools.TOOLS,
  *style_tools.TOOLS,
  build.BuildTool,
  *scripts.SCRIPTS,
)


def main():
  parser = argparse.ArgumentParser(prog="cyoa", description="CYOA manipulation tools")

  tools_by_name: Dict[str, Type[ToolBase]] = {tool.name: tool for tool in TOOLS}
  sub_parsers = parser.add_subparsers(
    title="Available Commands", dest="_tool_id", metavar="COMMAND"
  )
  for tool_cls in tools_by_name.values():
    tool_cls.setup_parser(sub_parsers)

  args = parser.parse_args()
  if (tool_id := getattr(args, "_tool_id", None)) and (
    tool_cls := tools_by_name.get(tool_id, None)
  ):
    tool_cls().run(args)
  else:
    parser.print_help()


if __name__ == "__main__":
  main()
