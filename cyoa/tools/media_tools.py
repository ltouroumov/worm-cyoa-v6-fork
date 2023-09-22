import base64
import io
from dataclasses import dataclass, replace
from os import makedirs
from pathlib import Path
from typing import Optional, Iterator

from PIL import Image
from lenses import lens
import requests
from rich.progress import track
from rich.table import Table

from cyoa.tools.lib import *


@dataclass
class ImageInfo:
    image_data: str
    object_type: str = None
    row_id: Optional[str] = None
    obj_id: Optional[str] = None
    name: Optional[str] = None
    style_prop: Optional[str] = None
    image_is_url: bool = False

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
    def extract_image_from_item(item) -> ImageInfo:
        image_data = item.get('image')
        image_is_url = item.get('imageIsUrl', False)

        if image_data != '':
            return ImageInfo(image_data=image_data,
                             image_is_url=image_is_url)
        return None

    def extract_image_from_style(item, prop) -> ImageInfo:
        style_data = item['styling']
        if (image := style_data[prop]) != '':
            return ImageInfo(image_data=image)
        return None

    for style_prop in IMAGE_PROPS:
        if bgImage := extract_image_from_style(project, prop=style_prop):
            yield ImageInfo(object_type="proj", style_prop=style_prop,
                            image_data=bgImage, )

    for row in project['rows']:
        if rowImage := extract_image_from_item(row):
            yield replace(rowImage, object_type="row", row_id=row.get('id', None),
                          name=row.get('title', None))

        for style_prop in IMAGE_PROPS:
            if bgImage := extract_image_from_style(project, prop=style_prop):
                yield replace(bgImage, object_type="row", row_id=row.get('id', None),
                              style_prop=style_prop)

        for obj in row['objects']:
            if objImage := extract_image_from_item(obj):
                yield replace(objImage, object_type="obj", row_id=row.get('id', None), obj_id=obj.get('id', None),
                              name=obj.get('title', None))

            for style_prop in IMAGE_PROPS:
                if bgImage := extract_image_from_style(project, prop=style_prop):
                    yield replace(bgImage, object_type="obj", row_id=row.get('id', None), obj_id=obj.get('id', None),
                                  style_prop=style_prop)


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


def get_image_info(image_data, decode=True):
    try:
        if decode:
            header, data_bytes = decode_image(image_data)
        else:
            header, data_bytes = None, image_data

        image_size = len(data_bytes)
        image = Image.open(io.BytesIO(data_bytes))
        return image, image_size, header, image.size
    except Exception as e:
        return None, 0, f"Error while reading '{image_data[:16]}': {type(e)}", (0, 0)


def optimize_image(image: Image):
    image_data = io.BytesIO()
    image.save(image_data, format='webp',
               lossless=False,
               quality=80,
               method=4)
    return image_data.getvalue()


def export_image(image_info: ImageInfo, image_type: str, image_data: bytes, dest_dir: Path):
    if dest_dir is None:
        return

    file_name = export_image_name(image_info, image_type)

    with open(dest_dir / file_name, mode='wb+') as fd:
        fd.write(image_data)

    return file_name


def export_image_name(image_info, image_type):
    if image_info.object_type == "proj":
        file_name = f"{image_info.object_type}-{image_info.short_id}.{image_type}"
    elif image_info.object_type == "row":
        file_name = f"{image_info.object_type}-{image_info.short_id}.{image_type}"
    elif image_info.object_type == "obj":
        file_name = f"{image_info.object_type}-{image_info.short_id}.{image_type}"
    else:
        raise Exception("Invalid image info")
    return file_name


def _set_image_lenses(encoded_image, image_is_url):
    return (lens.Get('image').set(encoded_image),
            lens.Get('imageLink').set(encoded_image
                                      if image_is_url
                                      else None),
            lens.Get('imageIsUrl').set(image_is_url))


def update_image(project, image_info, image_type=None, image_data=None, image_path=None):
    if image_data:
        encoded_image = (
            f"data:image/{image_type};base64," +
            base64.b64encode(image_data).decode('utf-8')
        )
        image_is_url = False
    elif image_path:
        encoded_image = image_path
        image_is_url = True
    else:
        raise Exception("image_data or image_path must be set")

    if image_info.object_type == 'proj' and image_info.style_prop:
        project &= lens['styling'][image_info.style_prop].set(
            encoded_image
        )
    elif image_info.object_type == 'proj' and image_info.style_prop is None:
        for L in _set_image_lenses(encoded_image, image_is_url):
            project &= L
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
            lens=_set_image_lenses(encoded_image, image_is_url)
        )
    elif image_info.object_type == 'obj' and image_info.style_prop:
        update_obj_data(
            project=project,
            row_id=image_info.row_id,
            obj_id=image_info.obj_id,
            lens=lens['styling'][image_info.style_prop].set(
                encoded_image
            )
        )
    elif image_info.object_type == 'obj' and image_info.style_prop is None:
        update_obj_data(
            project=project,
            row_id=image_info.row_id,
            obj_id=image_info.obj_id,
            lens=_set_image_lenses(encoded_image, image_is_url)
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
        parser.add_argument('--write', action='store_true')

        parser.add_argument('--size-gte', dest='filter_size_gte', type=float,
                            default=None)
        parser.add_argument('--export-dir', type=Path, default=None)

        parser.add_argument('--optimize-urls', action='store_true')
        parser.add_argument('--export-url', type=str, default=None)

    def optimize_and_extract(self, image_info, images_table, filter_size_gte, dest_dir, base_url):
        img, img_size, img_type, img_dim = get_image_info(
            image_info.image_data
        )
        img_size_kb = img_size / 1024.0

        if img is None:
            console.print(img_type)
            return 0

        if (
            (filter_size_gte is None or img_size_kb >= filter_size_gte) and
            img_type not in ('data:image/webp',)
        ):
            optimized_image = optimize_image(img)
            optimized_image_size = len(optimized_image) / 1024.0

            images_table.add_row(
                image_info.object_id, image_info.name,
                "%d x %d" % img_dim,
                f"{img_size_kb: >8.2f} kB",
                f"{optimized_image_size: >8.2f} kB",
                img_type
            )

            image_name = export_image(
                image_info, "webp",
                image_data=optimized_image,
                dest_dir=dest_dir
            )
            image_url = f"{base_url}/{image_name}"

            update_image(
                self.project, image_info, "webp",
                image_path=image_url
            )

            return optimized_image_size, img_size_kb
        else:
            return img_size_kb, img_size_kb

    def optimize_file_inplace(
        self,
        image_info: ImageInfo,
        images_table,
        filter_size_gte: float,
        base_url: str,
        base_path: Path
    ):
        image_name = str.replace(image_info.image_data, base_url, '')
        image_path = base_path / image_name

        if not image_path.exists():
            return 0, 0

        with image_path.open(mode='rb') as fd:
            image_bytes = fd.read()

        img, img_size, img_type, img_dim = get_image_info(
            image_bytes, decode=False
        )
        img_size_kb = img_size / 1024.0

        if (
            (filter_size_gte is None or img_size_kb >= filter_size_gte) and
            str.endswith(image_name, '.webp')
        ):
            optimized_image = optimize_image(img)
            optimized_image_size = len(optimized_image) / 1024.0

            images_table.add_row(
                image_info.object_id, image_info.name,
                "%d x %d" % img_dim,
                f"{img_size_kb: >8.2f} kB",
                f"{optimized_image_size: >8.2f} kB",
                img_type
            )

            image_name = export_image(
                image_info, "webp",
                image_data=optimized_image,
                dest_dir=base_path
            )
            image_url = f"{base_url}/{image_name}"

            update_image(
                self.project, image_info, "webp",
                image_path=image_url
            )

            image_path.unlink()

            return optimized_image_size, img_size_kb
        else:
            return img_size_kb, img_size_kb

    def run(self, args):
        self._load_project(args.project_file)

        if dest_dir := args.export_dir:
            makedirs(dest_dir, exist_ok=True)

        images_table = Table("obj_id", "title", "Dimensions",
                             "Size", "Optimized", "Type")

        total_before = 0
        total_after = 0

        project_images = list(list_all_images(self.project))
        for image_info in track(project_images, total=len(project_images)):
            # Skip all missing images
            if image_info.image_data is None:
                continue

            # Skip all non-embedded images
            if image_info.image_is_url:
                if not args.optimize_urls:
                    continue
                if not str.startswith(image_info.image_data, args.base_url):
                    continue

                size_after, size_before = self.optimize_file_inplace(
                    image_info,
                    images_table,
                    args.filter_size_gte,
                    args.export_url,
                    dest_dir,
                )
            else:
                size_after, size_before = self.optimize_and_extract(
                    image_info,
                    images_table,
                    args.filter_size_gte,
                    dest_dir,
                )

                total_before += size_before
                total_after += size_after

        images_table.add_row(
            "", "Total", "",
            f"{total_before: >8.2f} kB",
            f"{total_after: >8.2f} kB",
            ""
        )
        console.print(images_table)
        if args.write:
            self._save_project(args.project_file)


class MediaExtractTool(ToolBase, ProjectUtilsMixin):
    name = 'media.extract'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--export-dir', type=Path, required=True)
        parser.add_argument('--export-url', type=str, required=True)

    def extract_image(self, image_info, dest_dir, base_url, images_table):
        header, image_data = decode_image(
            image_info.image_data
        )
        image_type = header[header.rfind('/') + 1:]
        imgage_size_kb = len(image_data) / 1024.0

        # Write the image file to disk
        image_name = export_image(image_info, image_type,
                                  image_data=image_data,
                                  dest_dir=dest_dir)

        image_url = f"{base_url}/{image_name}"
        update_image(self.project, image_info, image_type,
                     image_path=image_url)

        images_table.add_row(
            image_info.object_id, image_info.name,
            f"{imgage_size_kb: >8.2f} kB",
            image_type,
        )

    def download_image(self, image_info: ImageInfo, dest_dir, base_url, images_table):
        if str.startswith(image_info.image_data, base_url):
            return

        response = requests.get(image_info.image_data)
        if response.ok:
            image_bytes = response.content
            image = Image.open(io.BytesIO(image_bytes))
            image_type = str.lower(image.format)
            image_name = export_image_name(image_info, image_type)
            image_url = f"{base_url}/{image_name}"

            with open(dest_dir / image_name, mode='wb+') as fd:
                fd.write(image_bytes)

            update_image(self.project, image_info, image_type,
                         image_path=image_url)
        else:
            console.log(f"Failed to download {image_info.image_data}")
            console.log(response.content)

    def run(self, args):
        self._load_project(args.project_file)

        base_url = args.export_url
        if dest_dir := args.export_dir:
            makedirs(dest_dir, exist_ok=True)

        images_table = Table("obj_id", "title",
                             "Size", "Type")

        project_images = list(list_all_images(self.project))
        for image_info in track(project_images, total=len(project_images)):
            if image_info.image_data is None:
                continue

            if image_info.image_is_url:
                self.download_image(image_info, dest_dir,
                                    base_url, images_table)
            else:
                self.extract_image(image_info, dest_dir,
                                   base_url, images_table)

        console.print(images_table)
        self._save_project(args.project_file)


class MediaMigrateTool(ToolBase, ProjectUtilsMixin):
    name = 'media.migrate'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--old-base-url', type=str, required=True)
        parser.add_argument('--new-base-url', type=str, required=True)

    def update_image(self, image_info: ImageInfo, old_base_url, new_base_url):
        if str.startswith(image_info.image_data, new_base_url):
            return

        if str.startswith(image_info.image_data, old_base_url):
            update_image(
                self.project,
                image_info,
                image_path=str.replace(
                    image_info.image_data, old_base_url, new_base_url)
            )

    def run(self, args):
        self._load_project(args.project_file)

        project_images = list(list_all_images(self.project))
        for image_info in track(project_images, total=len(project_images)):
            if image_info.image_data is None:
                continue

            if image_info.image_is_url:
                self.update_image(
                    image_info,
                    args.old_base_url,
                    args.new_base_url
                )

        self._save_project(args.project_file)


TOOLS = (
    MediaListTool,
    MediaOptimizeTool,
    MediaExtractTool,
    MediaMigrateTool,
)
