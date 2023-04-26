from os import makedirs
from pathlib import Path

from cyoa.tools.lib import ProjectUtilsMixin, ToolBase
from cyoa.tools.media_tools import (
    list_all_images,
    export_image,
    update_image,
    decode_image,
)


class BuildTool(ToolBase, ProjectUtilsMixin):
    name = "build"

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help="Format a project file")
        parser.add_argument("--input", dest="project_file", type=Path, required=True)
        parser.add_argument("--output", dest="output_dir", type=Path, required=True)

    def run(self, args):
        self._load_project(args.project_file)

        if dest_dir := args.output_dir:
            makedirs(dest_dir, exist_ok=True)

        images_dir = dest_dir / "images"
        for image_file in images_dir.glob("*.*"):
            if image_file.name in (".gitkeep",):
                continue

            image_file.unlink()

        project_images = list(list_all_images(self.project))
        for image_info in project_images:
            # Skip images that are URLs
            if image_info.image_is_url:
                continue

            header, image_data = decode_image(image_info.image_data)
            image_type = header[header.rfind("/") + 1 :]

            file_name = export_image(
                image_info,
                image_type,
                image_data=image_data,
                dest_dir=dest_dir / "images",
            )
            update_image(
                self.project, image_info, image_type, image_path=f"./images/{file_name}"
            )

        self._save_project(dest_dir / "project.json")
