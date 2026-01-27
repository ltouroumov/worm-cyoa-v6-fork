import copy
from fnmatch import fnmatch

import yaml
from pathlib import Path

from rich.table import Table

from cyoa.tools.lib import ToolBase, ProjectUtilsMixin, console
from cyoa.tools.styles import STYLES_DEF


def diff_project_styles(project):
    styles_table = Table("type", "id", "title", "diff")

    global_styling = project.get('styling', {})
    global_styling_table = Table("key", "value", box=None, pad_edge=False, padding=(0, 1))
    for k, v in global_styling.items():
        global_styling_table.add_row(str(k), str(v))

    styles_table.add_row("project", "default", "Global Styles", global_styling_table)

    def diff_styles(styling_1, styling_2):
        styling_diff = [(k, v) for k, v in styling_1.items() if
                        k not in styling_2 or v != styling_2[k]]
        diff_table = Table("key", "value", box=None, pad_edge=False, padding=(0, 1))
        for k, v in styling_diff:
            diff_table.add_row(str(k), str(v))

        return diff_table

    for row_data in project['rows']:
        if row_data.get('isPrivateStyling', False):
            row_styling = row_data.get('styling', {})
            styles_table.add_row("row", row_data['id'], row_data['title'],
                                 diff_styles(row_styling, global_styling))

        for obj_data in row_data['objects']:
            if obj_data.get('isPrivateStyling', False):
                obj_styling = obj_data.get('styling', {})
                styles_table.add_row("object", obj_data['id'], obj_data['title'],
                                     diff_styles(obj_styling, global_styling))

    return styles_table

class StylesListTool(ToolBase, ProjectUtilsMixin):
    name = 'styles.list'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='List all styles in project')
        parser.add_argument('--project', dest='project_file',
                            type=Path, required=True)

    def run(self, args):
        self._load_project(args.project_file)

        styles_table = diff_project_styles(self.project)
        console.print(styles_table)


class StyleTransformer:
    def __init__(self, style_data: dict, project):
        self.project = project
        self.variables = style_data.get('variables', {})
        self.classes = style_data.get('classes', {})
        self.project_style = style_data.get('project', {})
        self.object_styles = {key: value for key, value in style_data.items()
                              if str.startswith(key, "row/") or str.startswith(key, "obj/")}

    def update_styles(self):
        self.update_properties(self.project['styling'], self.project_style['properties'], "project")

        for row_data in self.project['rows']:
            self.apply_styles(row_data, "row")

            for obj_data in row_data['objects']:
                self.apply_styles(obj_data, "obj")

    def apply_styles(self, obj_data, context: str):
        obj_ref = f"{context}/{obj_data['id']}"

        if (row_styling_data := self.object_styles.get(obj_ref, None)) is not None:
            console.print(f"Apply private style to '{obj_data['title']}' ({obj_data['id']})")
            self.apply_object_styles(obj_data, obj_ref, row_styling_data)
        elif (class_styling_data := self.find_classes_for(obj_ref)) is not None:
            for class_id, class_data in class_styling_data:
                console.print(f"Apply class {class_id} to '{obj_data['title']}' ({obj_data['id']})")
                self.apply_object_styles(obj_data, obj_ref, class_data)
        elif obj_data.get('isPrivateStyling', False):
            console.print(f"Update private styles of row '{obj_data['title']}' ({obj_data['id']})")
            self.update_properties(obj_data['styling'], self.project_style['properties'], obj_ref)
        elif context == "row":
            # For rows, copy the global styles
            obj_data['styling'] = self.project['styling'].copy()
        else:
            obj_data['styling'] = None

    def apply_object_styles(self, obj_data, obj_ref, style_props):
        match style_props:
            case {"isPrivateStyling": False}:
                if obj_data.get('isPrivateStyling', False):
                    console.print(f"[orange1]Reset private style of {obj_ref}")
                    obj_data['isPrivateStyling'] = False
                    obj_data['styling'] = copy.copy(self.project['styling'])
            case {"class": class_id}:
                console.print(f"[green]Apply class {class_id} to {obj_ref}")
                class_data = self.classes.get(class_id, None)
                if class_data is not None:
                    obj_data['isPrivateStyling'] = True
                    if class_data.get('normalize', False):
                        console.print(f"[orange1]Normalize {obj_ref}")
                        obj_data['styling'] = copy.copy(self.project['styling'])
                    self.update_properties(obj_data['styling'], class_data['properties'], obj_ref)
                else:
                    console.print(f"[red]Unknown class {class_id}")
            case {"properties": properties}:
                console.print(f"[green]Apply custom properties to {obj_ref}")
                obj_data['isPrivateStyling'] = True
                if style_props.get('normalize', False):
                    console.print(f"[orange1]Normalize {obj_ref}")
                    obj_data['styling'] = copy.copy(self.project['styling'])
                self.update_properties(obj_data['styling'], properties, obj_ref)
            case _:
                console.print(f"[red]Unknown style properties {style_props}")

    def find_classes_for(self, obj_id):
        result_acc = []
        for class_id, class_data in self.classes.items():
            if obj_id in class_data['matching']:
                result_acc.append((class_id, class_data))
            elif any(fnmatch(obj_id, pat) for pat in class_data['matching']):
                result_acc.append((class_id, class_data))

        return result_acc if len(result_acc) > 0 else None

    def update_properties(self, obj_styling, style_props, context: str):
        for prop_key, update in style_props.items():
            style_def = STYLES_DEF.get(prop_key, None)
            if style_def is None:
                console.log(f"[red]Unknown style property {prop_key}")
                continue

            current_value = obj_styling.get(prop_key, None)
            current_value = style_def.parse(current_value)

            match update:
                case {"op": "replace", "value": value, "old": old_value}:
                    old_value = style_def.parse(old_value, self.variables)
                    update_value = style_def.parse(value, self.variables)
                    if current_value == old_value:
                        obj_styling[prop_key] = update_value
                        console.print(f"[green]Updated {context}/{prop_key} from {current_value} to {update_value}")
                    else:
                        console.print(
                            f"[orange1]Skipped {context}/{prop_key}: expected {old_value} but got {current_value}")

                case {"op": "replace", "value": value}:
                    update_value = style_def.parse(value, self.variables)
                    obj_styling[prop_key] = update_value
                    console.print(f"[green]Updated {context}/{prop_key} from {current_value} to {update_value}")
                case other if style_def.is_valid(other):
                    obj_styling[prop_key] = style_def.parse(other, self.variables)
                    console.print(f"[green]Updated {context}/{prop_key} from {current_value} to {other}")
                case other:
                    console.print(f"[red]Invalid update {other!r} for {context}/{prop_key}")


class StylesUpdateTool(ToolBase, ProjectUtilsMixin):
    name = 'styles.update'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Apply style updates from a YAML file')
        parser.add_argument('--project', dest='project_file',
                            type=Path, required=True)
        parser.add_argument('--styling', dest='styling_file',
                            type=Path, required=True)
        parser.add_argument('--out', dest='out_file',
                            type=Path, required=False)

    def run(self, args):
        self._load_project(args.project_file)

        with args.styling_file.open() as fd:
            styling_data = yaml.load(fd, Loader=yaml.FullLoader)

        style_transformer = StyleTransformer(styling_data, self.project)
        style_transformer.update_styles()

        styles_table = diff_project_styles(self.project)
        console.print(styles_table)

        if args.out_file is not None:
            self._save_project(args.out_file)
        else:
            self._save_project(args.project_file)

TOOLS = (
    StylesListTool,
    StylesUpdateTool,
)
