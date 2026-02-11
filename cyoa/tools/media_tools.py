import io
import textwrap
import urllib.parse
from copy import copy
from os import makedirs
from pathlib import Path
from zipfile import ZipFile

from rich.progress import Progress, track
from rich.table import Table

from cyoa.ops.media import (
    ImageInfo,
    list_all_images,
    get_image_info,
    optimize_embedded_image,
    optimize_file_image,
    extract_embedded_image,
    download_external_image,
    migrate_image_url,
    decode_image,
    export_image_name,
    update_image,
)
from cyoa.tools.lib import *


# Backward compatibility helper (wraps file I/O around export_image_name)
def export_image(image_info: ImageInfo, image_type: str, image_data: bytes, dest_dir: Path):
    """Export an image to a file (backward compatibility wrapper).

    This is a CLI helper that combines export_image_name with file I/O.
    For new code, use the ops layer functions directly.
    """
    if dest_dir is None:
        return None

    file_name = export_image_name(image_info, image_type)
    with open(dest_dir / file_name, mode='wb') as fd:
        fd.write(image_data)

    return file_name


__all__ = [
    'ImageInfo',
    'list_all_images',
    'decode_image',
    'export_image',
    'export_image_name',
    'update_image',
]

class MediaListTool(ToolBase, ProjectUtilsMixin):
    name = 'media.list'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='List all images in the project')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--size-gte', dest='filter_size_gte', type=float,
                            default=None)

    def run(self, args):
        self._load_project(args.project_file)

        images_table = Table("obj_id", "title", "Dimensions", "Size", "Type")
        for image_info in list_all_images(self.project):
            metadata = get_image_info(image_info.image_data)
            if metadata.error:
                continue
            img_size_kb = metadata.size_bytes / 1024.0
            if args.filter_size_gte is None or img_size_kb >= args.filter_size_gte:
                images_table.add_row(
                    image_info.object_id, image_info.name,
                    "%d x %d" % metadata.dimensions,
                    f"{img_size_kb: >8.2f} kB",
                    metadata.header
                )

        console.print(images_table)


class MediaOptimizeTool(ToolBase, ProjectUtilsMixin):
    name = 'media.optimize'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Optimize and compress images')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--write', action='store_true')

        parser.add_argument('--size-gte', dest='filter_size_gte', type=float,
                            default=None)
        parser.add_argument('--max-dim', dest='max_dim', type=str,
                            default=None)
        parser.add_argument('--export-dir', type=Path, default=None)

        parser.add_argument('--optimize-urls', action='store_true')
        parser.add_argument('--export-url', type=str, default=None)

    def run(self, args):
        self._load_project(args.project_file)

        max_dim = None
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

                # Handle URL-based images
                if image_info.image_is_url:
                    if not args.optimize_urls:
                        continue

                    if not str.startswith(image_info.image_data, args.export_url):
                        print(f"Skipped {image_info.object_id}: Wrong Prefix", file=report_io)
                        continue

                    result = optimize_file_image(
                        self.project,
                        image_info,
                        args.filter_size_gte,
                        args.export_url,
                        dest_dir,
                        max_dim
                    )

                    if result.error:
                        pg.console.log(f"Skipped image: {result.skip_reason or result.error}", style="red")
                        print(f"Skipped {image_info.object_id}: {result.error}", file=report_io)
                        continue

                    if result.skipped:
                        continue

                    pg.console.log(
                        f"In-Place Optimization: {result.export_name} "
                        f"({result.original_size_kb:.2f} kB, {result.dimensions})"
                    )

                    images_table.add_row(
                        image_info.object_id, image_info.name,
                        "%d x %d" % result.dimensions,
                        f"{result.original_size_kb: >8.2f} kB",
                        f"{result.optimized_size_kb: >8.2f} kB",
                        result.image_type
                    )

                    print(
                        f"Optimized {image_info.object_id}: {result.export_name}; "
                        f"{result.original_size_kb:.2f} kB => {result.optimized_size_kb:.2f} kB",
                        file=report_io
                    )

                    total_before += result.original_size_kb
                    total_after += result.optimized_size_kb

                # Handle embedded images
                else:
                    result = optimize_embedded_image(
                        self.project,
                        image_info,
                        args.filter_size_gte,
                        args.export_url,
                        dest_dir,
                        max_dim
                    )

                    if result.error:
                        pg.console.print(f"Error: {result.error}")
                        continue

                    if result.skipped:
                        total_before += result.original_size_kb
                        total_after += result.optimized_size_kb
                        continue

                    images_table.add_row(
                        image_info.object_id, image_info.name,
                        "%d x %d" % result.dimensions,
                        f"{result.original_size_kb: >8.2f} kB",
                        f"{result.optimized_size_kb: >8.2f} kB",
                        result.image_type
                    )

                    total_before += result.original_size_kb
                    total_after += result.optimized_size_kb

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
        parser = parent.add_parser(cls.name, help='Extract embedded images to files')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--export-dir', type=Path, required=True)
        parser.add_argument('--export-url', type=str, required=True)

    def run(self, args):
        self._load_project(args.project_file)

        base_url = args.export_url
        dest_dir = args.export_dir
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
                # Download external image
                result = download_external_image(
                    self.project, image_info, dest_dir, base_url
                )

                if result.error:
                    error_table.add_row(
                        image_info.object_id, image_info.name, result.error
                    )
            else:
                # Extract embedded image
                result = extract_embedded_image(
                    self.project, image_info, dest_dir, base_url
                )

                if result.error:
                    console.log(f'[red]Could not extract image: {result.error}')
                else:
                    images_table.add_row(
                        image_info.object_id, image_info.name,
                        f"{result.image_size_kb: >8.2f} kB",
                        result.image_type
                    )

        console.print(error_table)
        console.print(images_table)
        self._save_project(args.project_file)


class MediaMigrateTool(ToolBase, ProjectUtilsMixin):
    name = 'media.migrate'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Migrate image URLs to a new base URL')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--old-base-url', type=str, required=True)
        parser.add_argument('--new-base-url', type=str, required=True)

    def run(self, args):
        self._load_project(args.project_file)

        migrated_count = 0
        project_images = list(list_all_images(self.project))
        for image_info in track(project_images, total=len(project_images)):
            if image_info.image_data is None:
                continue

            if image_info.image_is_url:
                migrated = migrate_image_url(
                    self.project,
                    image_info,
                    args.old_base_url,
                    args.new_base_url
                )
                if migrated:
                    migrated_count += 1

        console.print(f"Migrated {migrated_count} image(s)")
        self._save_project(args.project_file)

class MediaCleanTool(ToolBase, ProjectUtilsMixin):
    name = 'media.clean'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Remove orphan images from export directory')
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
        parser = parent.add_parser(cls.name, help='List images by row')
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
        parser = parent.add_parser(cls.name, help='Archive images into ZIP files by row')
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
