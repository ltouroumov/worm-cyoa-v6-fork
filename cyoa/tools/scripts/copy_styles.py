from pathlib import Path

from rich.table import Table
from rich.box import MARKDOWN

from cyoa.tools.lib import ToolBase, ProjectUtilsMixin, console


class CopyStylesTool(ToolBase, ProjectUtilsMixin):
    name = 'script.copy_styles'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='List all rows in project')
        parser.add_argument('--project', dest='project_file',
                            type=Path, required=True)
        parser.add_argument('--from', dest='from_file', 
                            type=Path, required=True)

    def run(self, args):
        self._load_project(args.project_file)
        from_project = self._load_file(args.from_file)
        
        style_map = {}
        for row_data in from_project['rows']:
            if 'styling' not in row_data:
                console.log(f"[red]Missing styles for {row_data['id']}")
            style_map[row_data['id']] = row_data['styling']

        for row_data in from_project['backpack']:
            if 'styling' not in row_data:
                console.log(f"[red]Missing styles for {row_data['id']}")
            style_map[row_data['id']] = row_data['styling']
        
        for row_data in self.project['rows']:
            if row_data['id'] in style_map:
                row_data['styling'] = style_map[row_data['id']]
                
        for row_data in self.project['backpack']:
            if row_data['id'] in style_map:
                row_data['styling'] = style_map[row_data['id']]
        
        self._save_project(args.project_file)
