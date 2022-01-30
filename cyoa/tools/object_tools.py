import json
from pathlib import Path

from cyoa.tools.lib import *


class ObjectListTool(ToolBase, ProjectUtilsMixin):
    name = 'object.list'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='List all objects in a row')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str, required=True)
        parser.add_argument('--csv', action='store_true')

    def run(self, args):
        self._load_project(args.project_file)

        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == args.row_id)

        console.print(row_data['id'], row_data['title'])
        console.print(row_data['titleText'])

        for idx, object_data in enumerate(row_data['objects']):
            console.print(idx, object_data['id'], object_data['title'])


class ObjectCopyTool(ToolBase, ProjectUtilsMixin):
    name = 'object.copy'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Copy objects from a row into a file')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)

        parser.add_argument('--from-row-id', type=str, required=True)
        parser.add_argument('--obj-id', dest='object_ids', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--obj-range', dest='object_ranges', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--obj-all', dest='object_all', action='store_true')

        parser.add_argument('--dest-row-id', type=str)
        parser.add_argument('--dest-after-idx', type=int)
        parser.add_argument('--dest-after-obj', type=str)

        parser.add_argument('--output', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        from_row_data = find_first(self.project['rows'],
                                   lambda row: row['id'] == args.from_row_id)

        objects_data = copy_objects_from_row(from_row_data,
                                             object_ids=args.object_ids,
                                             object_ranges=args.object_ranges,
                                             object_all=args.object_all)

        if args.dest_row_id is not None:
            dest_row_data = find_first(self.project['rows'],
                                       lambda row: row['id'] == args.dest_row_id)

            paste_objects_data = [
                object_data | {'id': gen_id()}
                for object_data in objects_data
            ]

            insert_objects_in_row(dest_row_data,
                                  paste_objects_data,
                                  after_idx=args.dest_after_idx,
                                  after_obj=args.dest_after_obj)

            self._save_project(args.project_file)

        if args.output is not None:
            with args.output.open(mode='w+') as fd:
                json.dump(objects_data, fd, indent=2)


class ObjectCutTool(ToolBase, ProjectUtilsMixin):
    name = 'object.cut'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Remove/Cut objects from a row')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str, required=True)
        parser.add_argument('--obj-id', dest='object_ids', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--obj-range', dest='object_range', type=str, default=None)
        parser.add_argument('--output', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == args.row_id)

        objects_data = copy_objects_from_row(row_data,
                                             object_ids=args.object_ids,
                                             object_ranges=args.object_ranges)
        remove_objects_from_row(row_data,
                                object_ids=args.object_ids,
                                object_ranges=args.object_ranges)

        if args.output is not None:
            with args.output.open(mode='w+') as fd:
                json.dump(objects_data, fd, indent=2)

        self._save_project(args.project_file)


class ObjectMoveTool(ToolBase, ProjectUtilsMixin):
    name = 'object.move'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Move objects between rows')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--from-row', type=str, required=True)
        parser.add_argument('--dest-row', type=str, required=True)
        parser.add_argument('--dest-after-idx', type=int)
        parser.add_argument('--dest-after-obj', type=str)
        parser.add_argument('--obj-id', dest='object_ids', type=str, nargs='+', action='extend', default=[])
        parser.add_argument('--obj-all', dest='object_all', action='store_true')

    def run(self, args):
        self._load_project(args.project_file)

        if args.object_all is False and len(args.object_ids) == 0:
            console.print("Missing --obj-id or --obj-all", style="red")
            return

        from_row_data = find_first(self.project['rows'],
                                   lambda row: row['id'] == args.from_row)
        dest_row_data = find_first(self.project['rows'],
                                   lambda row: row['id'] == args.dest_row)

        console.print(f"Moving {str.join(' ', args.object_ids)}")
        # Move the objects into a temporary list
        objects_data = copy_objects_from_row(from_row_data,
                                             object_ids=args.object_ids,
                                             object_all=args.object_all)
        remove_objects_from_row(from_row_data,
                                object_ids=args.object_ids,
                                object_all=args.object_all)

        # Insert the object into the destination row
        insert_objects_in_row(dest_row_data, objects_data,
                              after_idx=args.dest_after_idx,
                              after_obj=args.dest_after_obj)

        self._save_project(args.project_file)


class ObjectAddTool(ToolBase, ProjectUtilsMixin):
    name = 'object.add'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Add objects to a row')
        parser.add_argument('--project', dest='project_file', type=Path, required=True)
        parser.add_argument('--row-id', type=str, required=True)
        parser.add_argument('--after-idx', type=int)
        parser.add_argument('--after-obj', type=str)
        parser.add_argument('--regen-ids', action='store_true')
        parser.add_argument('--data', type=Path, required=True)

    def run(self, args):
        self._load_project(args.project_file)

        row_data = find_first(self.project['rows'],
                              lambda row: row['id'] == args.row_id)

        insert_data = self._load_file(args.data)
        if not isinstance(insert_data, (list, tuple)):
            insert_data = [insert_data]

        if args.regen_ids:
            console.print("Generating new IDs")
            insert_data = [
                object_data | {'id': gen_id()}
                for object_data in insert_data
            ]

        if args.after_idx:
            insert_index = args.after + 1
            row_data['objects'][insert_index:insert_index] = insert_data
        elif args.after_obj:
            insert_index = find_first_index(self.project['rows'],
                                            lambda row: row['id'] == args.row_id)
            row_data['objects'][insert_index:insert_index] = insert_data
        else:
            row_data['objects'].extend(insert_data)

        self._save_project(args.project_file)


TOOLS = (
    ObjectListTool,
    ObjectCopyTool,
    ObjectCutTool,
    ObjectMoveTool,
    ObjectAddTool
)
