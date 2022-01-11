import json
from pathlib import Path

from cyoa.tools.lib import *


class RowListTool(ToolBase, ProjectUtilsMixin):
    name = 'row.list'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='List all rows in project')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)

    def run(self, args):
        self._load_project(args.project_file)

        for row_data in self.project['rows']:
            console.print(row_data['id'], row_data['title'])


class RowCopyTool(ToolBase, ProjectUtilsMixin):
    name = 'row.copy'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Copy a row into a file')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str, required=True)
        parser.add_argument('--output', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == args.row_id)

        with args.output.open(mode='w+') as fd:
            json.dump(row_data, fd, indent=2)


TOOLS = (
    RowListTool,
    RowCopyTool
)
