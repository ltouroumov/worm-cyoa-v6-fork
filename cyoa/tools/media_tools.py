import base64
from dataclasses import dataclass
from email.policy import default
import io
import operator
from os import makedirs
from pathlib import Path
from shutil import copyfile
from typing import List, Dict, Optional, Iterator

import humanize
from PIL import Image
from rich.table import Table
from rich.progress import track
from cyoa.tools.lib import update_obj_data, update_row_data
from lenses import lens

from cyoa.tools.lib import *


@dataclass
class ImageInfo:
    image_data: str
    object_type: str
    row_id: Optional[str] = None
    obj_id: Optional[str] = None
    name: Optional[str] = None
    style_prop: Optional[str] = None

    @property
    def object_id(self):
        result = []
        if self.row_id:
            result.append(self.row_id)
        if self.obj_id:
            result.append(self.obj_id)
        if self.style_prop:
            result.append(self.style_prop)

        return str.join('/', result)

    @property
    def short_id(self):
        result = []
        if self.obj_id:
            result.append(self.obj_id)
        elif self.row_id:
            result.append(self.row_id)
        if self.style_prop:
            result.append(self.style_prop)

        return str.join('-', result)


IMAGE_PROPS = ('backgroundImage',
               'objectBackgroundImage',
               'rowBackgroundImage')


def list_all_images(project) -> Iterator[ImageInfo]:
    def extract_image_from_item(item):
        if (image := item['image']) != '':
            return image
        return None

    def extract_image_from_style(item, prop):
        style_data = item['styling']
        if (image := style_data[prop]) != '':
            return image
        return None

    for style_prop in IMAGE_PROPS:
        if bgImage := extract_image_from_style(project, prop=style_prop):
            yield ImageInfo(object_type="proj", style_prop=style_prop,
                            image_data=bgImage,)

    for row in project['rows']:
        if rowImage := extract_image_from_item(row):
            yield ImageInfo(object_type="row", row_id=row.get('id', None),
                            name=row.get('title', None), image_data=rowImage)

        for style_prop in IMAGE_PROPS:
            if bgImage := extract_image_from_style(project, prop=style_prop):
                yield ImageInfo(object_type="row", row_id=row.get('id', None),
                                style_prop=style_prop, image_data=bgImage)

        for obj in row['objects']:
            if objImage := extract_image_from_item(obj):
                yield ImageInfo(object_type="obj", row_id=row.get('id', None), obj_id=obj.get('id', None),
                                name=obj.get('title', None), image_data=objImage)

            for style_prop in IMAGE_PROPS:
                if bgImage := extract_image_from_style(project, prop=style_prop):
                    yield ImageInfo(object_type="obj", row_id=row.get('id', None), obj_id=obj.get('id', None),
                                    style_prop=style_prop, image_data=bgImage)


def decode_image(image_data):
    header, contents = str.split(image_data, ';')
    encoding, data_str = str.split(contents, ',')

    if encoding == 'base64':
        try:
            data_bytes = base64.b64decode(data_str)
        except Exception:
            return 0, f"Failed to decode data"
    else:
        return 0, f"Unsupported encoding {encoding}"

    return header, data_bytes


def get_image_info(image_data):
    try:
        header, data_bytes = decode_image(image_data)

        image_size = len(data_bytes)
        image = Image.open(io.BytesIO(data_bytes))
        return image, image_size, header, image.size
    except Exception as e:
        return None, 0, f"Error while reading '{image_data[:16]}': {type(e)}", (0, 0)


def optimize_image(image: Image, format: str):
    image_data = io.BytesIO()
    image.save(image_data, format='webp',
               lossless=False,
               quality=80,
               method=4)
    return image_data.getvalue()


def export_image(image_info: ImageInfo, image_type: str, image_data: bytes, dest_dir: Path):
    if dest_dir is None:
        return

    if image_info.object_type == "proj":
        file_name = f"{image_info.object_type}-{image_info.short_id}.{image_type}"
    elif image_info.object_type == "row":
        file_name = f"{image_info.object_type}-{image_info.short_id}.{image_type}"
    elif image_info.object_type == "obj":
        file_name = f"{image_info.object_type}-{image_info.short_id}.{image_type}"
    else:
        raise Exception("Invalid image info")

    with open(dest_dir / file_name, mode='wb+') as fd:
        fd.write(image_data)

    return file_name
    

def update_image(project, image_info, image_type, image_data=None, image_path=None):
    if image_data:
        encoded_image = (
            f"data:image/{image_type};base64," +
            base64.b64encode(image_data).decode('utf-8')
        )
    elif image_path:
        encoded_image = image_path
    else:
        raise Exception("image_data or image_path must be set")

    if image_info.object_type == 'proj' and image_info.style_prop:
        project &= lens['styling'][image_info.style_prop].set(
            encoded_image
        )
    elif image_info.object_type == 'proj' and image_info.style_prop is None:
        project &= lens['image'].set(encoded_image)
    elif image_info.object_type == 'row' and image_info.style_prop:
        update_row_data(
            project=project,
            row_id=image_info.row_id,
            lens=lens['styling'][image_info.style_prop].set(
                encoded_image
            )
        )
    elif image_info.object_type == 'row' and image_info.style_prop is None:
        update_row_data(
            project=project,
            row_id=image_info.row_id,
            lens=lens['image'].set(encoded_image)
        )
    elif image_info.object_type == 'obj' and image_info.style_prop:
        update_obj_data(
            project=project,
            row_id=image_info.row_id,
            obj_id=image_info.obj_id,
            lens=lens['styling'][image_info.style_prop].set(
                encoded_image)
        )
    elif image_info.object_type == 'obj' and image_info.style_prop is None:
        update_obj_data(
            project=project,
            row_id=image_info.row_id,
            obj_id=image_info.obj_id,
            lens=lens['image'].set(encoded_image)
        )


class MediaListTool(ToolBase, ProjectUtilsMixin):
    name = 'media.list'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--size-gte', dest='filter_size_gte', type=float,
                            default=None)

    def run(self, args):
        self._load_project(args.project_file)

        images_table = Table("obj_id", "title", "Dimensions", "Size", "Type")
        for image_info in list_all_images(self.project):
            _, img_size, img_type, img_dim = get_image_info(
                image_info.image_data
            )
            img_size_kb = img_size / 1024.0
            if args.filter_size_gte is None or img_size_kb >= args.filter_size_gte:
                images_table.add_row(
                    image_info.object_id, image_info.name,
                    "%d x %d" % img_dim, f"{img_size_kb: >8.2f} kB", img_type
                )

        console.print(images_table)


class MediaOptimizeTool(ToolBase, ProjectUtilsMixin):
    name = 'media.optimize'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--size-gte', dest='filter_size_gte', type=float,
                            default=None)
        parser.add_argument('--export-to', type=Path, default=None)
        parser.add_argument('--write', action='store_true')

    def run(self, args):
        self._load_project(args.project_file)

        if dest_dir := args.export_to:
            makedirs(dest_dir, exist_ok=True)

        images_table = Table("obj_id", "title", "Dimensions",
                             "Size", "Optimized", "Type")

        total_before = 0
        total_after = 0

        project_images = list(list_all_images(self.project))
        for image_info in track(project_images, total=len(project_images)):
            img, img_size, img_type, img_dim = get_image_info(
                image_info.image_data
            )
            img_size_kb = img_size / 1024.0
            total_before += img_size_kb

            if (
                (args.filter_size_gte is None or img_size_kb >= args.filter_size_gte) and
                img_type not in ('data:image/webp',)
            ):
                optimized_image = optimize_image(img, img_type)
                optimized_image_size = len(optimized_image) / 1024.0

                images_table.add_row(
                    image_info.object_id, image_info.name,
                    "%d x %d" % img_dim,
                    f"{img_size_kb: >8.2f} kB",
                    f"{optimized_image_size: >8.2f} kB",
                    img_type
                )

                export_image(image_info, "webp", image_data=optimized_image, dest_dir=dest_dir)
                update_image(image_info, "webp", image_data=optimized_image)

                total_after += optimized_image_size
            else:
                total_after += img_size_kb

        images_table.add_row(
            "", "Total", "",
            f"{total_before: >8.2f} kB",
            f"{total_after: >8.2f} kB",
            ""
        )
        console.print(images_table)
        if args.write:
            self._save_project(args.project_file)


TOOLS = (
    MediaListTool,
    MediaOptimizeTool,
)
