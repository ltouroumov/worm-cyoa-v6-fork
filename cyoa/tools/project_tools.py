import base64
import io
import operator
from pathlib import Path
from shutil import copyfile
from typing import List, Dict

import humanize
from PIL import Image
from rich.table import Table

from cyoa.tools.lib import *


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


class ProjectImagesTool(ToolBase, ProjectUtilsMixin):
    name = 'project.images'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        def image_info(image_data):
            try:
                header, contents = str.split(image_data, ';')
                encoding, data_str = str.split(contents, ',')

                if encoding == 'base64':
                    try:
                        data_bytes = base64.b64decode(data_str)
                    except Exception:
                        return 0, f"Failed to decode data"
                else:
                    return 0, f"Unsupported encoding {encoding}"

                image_size = len(data_bytes)
                image = Image.open(io.BytesIO(data_bytes))
                return image_size, header, image.size
            except Exception as e:
                return 0, f"Error while reading '{image_data[:16]}': {type(e)}"

        images_table = Table("obj_id", "title", "Dimensions", "Size", "Type")
        for row_data in self.project['rows']:
            if (img := row_data['image']) != '':
                img_size, img_type, img_dim = image_info(img)
                images_table.add_row(
                    row_data['id'], row_data['title'],
                    "%d x %d" % img_dim, f"{img_size / 1024.0: >8.2f} kB", img_type
                )

            for object_data in row_data['objects']:
                if (img := object_data['image']) != '':
                    img_size, img_type, img_dim = image_info(img)
                    images_table.add_row(
                        object_data['id'], object_data['title'],
                        "%d x %d" % img_dim, f"{img_size / 1024.0: >8.2f} kB", img_type
                    )

        console.print(images_table)


class ProjectCheckTool(ToolBase, ProjectUtilsMixin):
    name = 'project.check'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        object_ids: Dict[str, List] = {}
        for row_data in self.project['rows']:
            for object_data in row_data['objects']:
                object_ids.setdefault(object_data['id'], [])
                object_ids[object_data['id']].append(object_data['title'])

        for obj_id, titles in object_ids.items():
            if len(titles) > 1:
                console.print(f"Duplicate {obj_id}: {str.join(', ', titles)}")


TOOLS = (
    ProjectFormatTool,
    ProjectPointsTool,
    ProjectImagesTool,
    ProjectCheckTool,
)
