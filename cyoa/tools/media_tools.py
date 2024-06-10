import base64
from collections import OrderedDict
from copy import copy
from glob import glob
import io
import textwrap
from dataclasses import dataclass, replace
from os import makedirs
from pathlib import Path
from typing import Optional, Iterator, Tuple
from zipfile import ZipFile

from PIL import Image
from lenses import lens
import requests
from rich.console import Console
from rich.progress import Progress, track
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


def optimize_image(image: Image.Image, max_size=None):
    image_data = io.BytesIO()

    if max_size is not None:
        max_w, max_h = max_size
        cur_w, cur_h = image.size
        if cur_w > cur_h and cur_w > max_w:
            ratio = max_w / cur_w
            new_size = (max_w, round(cur_h * ratio))
            image.resize(size=new_size)
        
        if cur_h > cur_w and cur_h > max_h:
            ratio = max_h / cur_h
            new_size=(round(cur_w * ratio), max_h)
            image.resize(size=new_size)

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

def check_size(max_size: None | float, cur_size: float):
    if max_size is None:
        return True
    else:
        return cur_size <= max_size

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
        parser.add_argument('--max-dim', dest='max_dim', type=str,
                            default=None)
        parser.add_argument('--export-dir', type=Path, default=None)

        parser.add_argument('--optimize-urls', action='store_true')
        parser.add_argument('--export-url', type=str, default=None)

    def optimize_and_extract(self, image_info, images_table, filter_size_gte, base_url, dest_dir, max_dim):
        img, img_size, img_type, img_dim = get_image_info(
            image_info.image_data
        )
        img_size_kb = img_size / 1024.0

        if img is None:
            console.print(img_type)
            return 0

        if img_type in ('data:image/webp',) and check_size(filter_size_gte, img_size_kb):
            return img_size_kb, img_size_kb

        optimized_image = optimize_image(img, max_size=max_dim)
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

    def optimize_file_inplace(
        self,
        image_info: ImageInfo,
        images_table,
        filter_size_gte: float,
        base_url: str,
        base_path: Path, 
        max_dim: Tuple[int, int],
        console: Console,
        report_io: io.StringIO
    ):
        image_name = str.replace(image_info.image_data, base_url, '').strip('/')
        image_path = base_path / image_name

        if not image_path.exists():
            console.log(f"Skipped image: {image_name} (file missing)", style="red")
            print(f"Skipped {image_info.object_id} ({image_name}): File Missing", file=report_io)
            return 0, 0

        with image_path.open(mode='rb') as fd:
            image_bytes = fd.read()

        img, img_size, img_type, img_dim = get_image_info(
            image_bytes, decode=False
        )
        img_size_kb = img_size / 1024.0

        if img is None:
            console.log(f"Skipped image: {image_name} (decode error)", style="red")
            print(f"Skipped {image_info.object_id} ({image_name}): Decode Failed", file=report_io)
            return img_size_kb, img_size_kb

        if str.endswith(image_name, '.webp') and check_size(filter_size_gte, img_size_kb):
            return img_size_kb, img_size_kb

        console.log(f"In-Place Optimization: {image_name} ({img_size_kb:.2f} kB, {img_dim})")

        optimized_image = optimize_image(img, max_size=max_dim)
        optimized_image_size = len(optimized_image) / 1024.0

        images_table.add_row(
            image_info.object_id, image_info.name,
            "%d x %d" % img_dim,
            f"{img_size_kb: >8.2f} kB",
            f"{optimized_image_size: >8.2f} kB",
            img_type
        )

        export_name = export_image(
            image_info, "webp",
            image_data=optimized_image,
            dest_dir=base_path
        )
        export_url = f"{base_url}/{export_name}"
        console.log(f"{export_name=} => {export_url=}")

        update_image(
            self.project, image_info, "webp",
            image_path=export_url
        )

        if export_name != image_name:
            image_path.unlink()

        print(f"Optimized {image_info.object_id}: {export_name}; {img_size_kb:.2f} kB => {optimized_image_size:.2f} kB", file=report_io)
        return optimized_image_size, img_size_kb

    def run(self, args):
        self._load_project(args.project_file)

        if max_dim_val := args.max_dim:
            max_dim = tuple(map(int, str.split(max_dim_val, 'x')))

        if dest_dir := args.export_dir:
            makedirs(dest_dir, exist_ok=True)

        images_table = Table("obj_id", "title", "Dimensions",
                             "Size", "Optimized", "Type")

        total_before = 0
        total_after = 0

        report_io = io.StringIO()

        project_images = list(list_all_images(self.project))
        with Progress() as pg:
            pg_task = pg.add_task('Optimize Images', total=len(project_images))

            for image_info in project_images:
                pg.advance(pg_task)
                # Skip all missing images
                if image_info.image_data is None:
                    print(f"Skipped {image_info.object_id}: No Data", file=report_io)
                    continue

                # Skip all non-embedded images
                if image_info.image_is_url:
                    if not args.optimize_urls:
                        continue

                    if not str.startswith(image_info.image_data, args.export_url):
                        print(f"Skipped {image_info.object_id}: Wrong Prefix", file=report_io)
                        continue
                    
                    size_after, size_before = self.optimize_file_inplace(
                        image_info,
                        images_table,
                        args.filter_size_gte,
                        args.export_url,
                        dest_dir,
                        max_dim,
                        pg.console,
                        report_io
                    )

                    total_before += size_before
                    total_after += size_after
                else:
                    size_after, size_before = self.optimize_and_extract(
                        image_info,
                        images_table,
                        args.filter_size_gte,
                        args.export_url,
                        dest_dir,
                        max_dim,
                        pg.console,
                        report_io
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
        image_size_kb = len(image_data) / 1024.0

        # Write the image file to disk
        image_name = export_image(image_info, image_type,
                                  image_data=image_data,
                                  dest_dir=dest_dir)

        image_url = f"{base_url}/{image_name}"
        # console.log(f"Extract: {image_info.object_id} {image_url}")
        update_image(self.project, image_info, image_type,
                     image_path=image_url)

        images_table.add_row(
            image_info.object_id, image_info.name,
            f"{image_size_kb: >8.2f} kB",
            image_type,
        )

    def download_image(self, image_info: ImageInfo, dest_dir, base_url, error_table):
        if str.startswith(image_info.image_data, base_url):
            return

        # console.log(f'Download {image_info.object_id}: {image_info.image_data}')
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
            error_table.add_row(
                image_info.object_id, image_info.name,
                f"Status: {response.status_code}, Body: {textwrap.shorten(response.text, width=50)}"
            )

    def run(self, args):
        self._load_project(args.project_file)

        base_url = args.export_url
        if dest_dir := args.export_dir:
            makedirs(dest_dir, exist_ok=True)

        console.log(f"Base URL: {base_url}")
        console.log(f"Base DIR: {dest_dir}")

        images_table = Table("obj_id", "title", "Size", "Type")
        error_table = Table("obj_id", "title", "Error")

        project_images = list(list_all_images(self.project))
        for image_info in track(project_images, total=len(project_images)):
            if image_info.image_data is None:
                continue

            if image_info.image_is_url:
                self.download_image(image_info, dest_dir,
                                    base_url, error_table)
            else:
                self.extract_image(image_info, dest_dir,
                                   base_url, images_table)

        console.print(error_table)
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

class MediaCleanTool(ToolBase, ProjectUtilsMixin):
    name = 'media.clean'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--export-dir', type=Path, required=True)
        parser.add_argument('--export-url', type=str, required=True)

    def run(self, args):
        self._load_project(args.project_file)

        all_image_files = set(args.export_dir.glob('*'))
        console.log(f"Total Images: {len(all_image_files)}")
        image_files = copy(all_image_files)

        project_images = list(list_all_images(self.project))
        for image_info in project_images:
            if image_info.image_data is None:
                continue

            if (image_info.image_is_url and
                str.startswith(image_info.image_data, args.export_url)):
                image_name = str.replace(image_info.image_data, args.export_url, '').strip('/')
                image_path = args.export_dir / image_name

                if image_path not in all_image_files:
                    console.log(f"Missing Image: {repr(image_path)} ({image_info.image_data})", style="red")
                    
                if image_path in image_files:
                    image_files.remove(image_path)

        console.log(f"Orphan Images: {len(image_files)}")
        for image in image_files:
            console.log(f"Removing {image}")
            image.unlink()


class MediaListTool(ToolBase, ProjectUtilsMixin):
    name = 'media.list'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)

    def run(self, args):
        self._load_project(args.project_file)

        image_rows = dict()

        project_images = list(list_all_images(self.project))
        for image_info in project_images:
            if image_info.image_data is None:
                continue
            
            if image_info.row_id not in image_rows:
                image_rows[image_info.row_id] = 0
            
            image_rows[image_info.row_id] += 1

        row_names = [
            (row['id'], row['title'])
            for row in self.project['rows']
        ]

        total_images = 0
        console.print(f"! Row ID !! Row Name !! # Images")
        for row_id, row_name in row_names:
            if image_count := image_rows.get(row_id, None):
                console.print(f"|-")
                console.print(f"| {row_id} || {row_name} || {image_count}")
                total_images += image_count
        
        console.print(f"| Total || {total_images}")
        console.print(f"| Image Rows || {len(image_rows)}")


class MediaZipTool(ToolBase, ProjectUtilsMixin):
    name = 'media.zip'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--export-dir', type=Path, required=True)
        parser.add_argument('--export-url', type=str, required=True)
        parser.add_argument('--archive-dir', type=Path, required=True)

    def run(self, args):
        self._load_project(args.project_file)

        base_path = args.export_dir
        base_url = args.export_url
        archive_dir = args.archive_dir
        makedirs(archive_dir, exist_ok=True)

        images_per_row: dict[str, list] = dict()

        with Progress() as pg:
            project_images = list(list_all_images(self.project))
            group_task = pg.add_task('Group Images', total=len(project_images))
            for image_info in project_images:
                pg.advance(group_task)
                if (image_info.image_data is None or
                    not image_info.image_is_url or
                    not str.startswith(image_info.image_data, args.export_url)):
                    continue

                if image_info.row_id not in images_per_row:
                    images_per_row[image_info.row_id] = []
                
                images_per_row[image_info.row_id].append(image_info)

            archive_task = pg.add_task('Archive Groups', total=len(images_per_row))
            for row_id, images in sorted(images_per_row.items()):
                archive_row_task = pg.add_task(f"Row {row_id}", total=len(images))
                archive_file = archive_dir / f"row-{row_id}.zip"
                pg.console.print(f"Creating ZIP for {archive_file} ({len(images)} images)")

                archive = ZipFile(archive_file, mode='w')
                archive.mkdir(f"row-{row_id}")
                for image_info in images:
                    image_name = str.replace(image_info.image_data, base_url, '')
                    image_path = base_path / image_name

                    archive.write(
                        filename=image_path,
                        arcname=f"row-{row_id}/{image_name}"
                    )

                    pg.advance(archive_row_task)
                
                archive.close()

                pg.advance(archive_task)
                pg.remove_task(archive_row_task)


TOOLS = (
    MediaListTool,
    MediaOptimizeTool,
    MediaExtractTool,
    MediaMigrateTool,
    MediaCleanTool,
    MediaListTool,
    MediaZipTool,
)
