"""Media step handlers for extracting, optimizing, and cleaning images."""

from os import makedirs

from rich.progress import Progress

from cyoa.build.errors import BuildError
from cyoa.build.registry import StepHandler, StepResult
from cyoa.ops.media import (
  download_external_image,
  extract_embedded_image,
  list_all_images,
  optimize_embedded_image,
  optimize_file_image,
)


class MediaExtractStep(StepHandler):
  """Extract embedded images to files and download external images."""

  step_type = "media.extract"

  def execute(self, context, params):
    """Extract embedded images to filesystem.

    Args:
      context: Build context containing project data
      params: Must contain "export_dir" and "export_url"

    Returns:
      StepResult with extraction summary

    Raises:
      BuildError: If required parameters are missing
    """
    if "export_dir" not in params:
      raise BuildError("media.extract step requires 'export_dir' parameter")
    if "export_url" not in params:
      raise BuildError("media.extract step requires 'export_url' parameter")

    export_dir = context.work_dir / params["export_dir"]
    export_url = params["export_url"]

    # Ensure export directory exists
    makedirs(export_dir, exist_ok=True)

    # Process all images
    project_images = list(list_all_images(context.project))
    success_count = 0
    error_count = 0
    skipped_count = 0

    with Progress(console=context.console) as progress:
      task = progress.add_task("Extracting images", total=len(project_images))

      for image_info in project_images:
        progress.advance(task)

        # Skip if no image data
        if image_info.image_data is None:
          skipped_count += 1
          continue

        # Download external images or extract embedded ones
        if image_info.image_is_url:
          result = download_external_image(
            context.project, image_info, export_dir, export_url
          )
          if result.error:
            error_count += 1
            progress.console.log(
              f"[red]Error downloading {image_info.object_id}: {result.error}"
            )
          elif result.skipped:
            skipped_count += 1
          else:
            success_count += 1
        else:
          result = extract_embedded_image(
            context.project, image_info, export_dir, export_url
          )
          if result.error:
            error_count += 1
            progress.console.log(
              f"[red]Error extracting {image_info.object_id}: {result.error}"
            )
          else:
            success_count += 1

    message = (
      f"Extracted {success_count} images, {error_count} errors, {skipped_count} skipped"
    )
    return StepResult(success=(error_count == 0), message=message)


class MediaOptimizeStep(StepHandler):
  """Optimize images by resizing and converting to WebP."""

  step_type = "media.optimize"

  def execute(self, context, params):
    """Optimize images in the project.

    Args:
      context: Build context containing project data
      params: Must contain "export_dir" and "export_url"
              Optional: "size_gte" (float), "max_dim" (list of 2 ints), "optimize_urls" (bool)

    Returns:
      StepResult with optimization summary

    Raises:
      BuildError: If required parameters are missing
    """
    if "export_dir" not in params:
      raise BuildError("media.optimize step requires 'export_dir' parameter")
    if "export_url" not in params:
      raise BuildError("media.optimize step requires 'export_url' parameter")

    export_dir = context.work_dir / params["export_dir"]
    export_url = params["export_url"]
    size_gte = params.get("size_gte")
    max_dim_list = params.get("max_dim")
    optimize_urls = params.get("optimize_urls", False)

    # Convert max_dim from list to tuple if provided
    max_dim = tuple(max_dim_list) if max_dim_list else None

    # Ensure export directory exists
    makedirs(export_dir, exist_ok=True)

    # Process all images
    project_images = list(list_all_images(context.project))
    total_before_kb = 0.0
    total_after_kb = 0.0
    optimized_count = 0
    skipped_count = 0
    error_count = 0

    with Progress(console=context.console) as progress:
      task = progress.add_task("Optimizing images", total=len(project_images))

      for image_info in project_images:
        progress.advance(task)

        # Skip if no image data
        if image_info.image_data is None:
          skipped_count += 1
          continue

        # Handle URL-based images
        if image_info.image_is_url:
          if not optimize_urls:
            skipped_count += 1
            continue

          # Skip if URL doesn't start with export_url
          if not str.startswith(image_info.image_data, export_url):
            skipped_count += 1
            continue

          result = optimize_file_image(
            context.project,
            image_info,
            size_gte,
            export_url,
            export_dir,
            max_dim,
          )

          if result.error:
            error_count += 1
            progress.console.log(
              f"[red]Error optimizing {image_info.object_id}: {result.error}"
            )
            continue

          if result.skipped:
            skipped_count += 1
            total_before_kb += result.original_size_kb
            total_after_kb += result.optimized_size_kb
            continue

          optimized_count += 1
          total_before_kb += result.original_size_kb
          total_after_kb += result.optimized_size_kb

        # Handle embedded images
        else:
          result = optimize_embedded_image(
            context.project,
            image_info,
            size_gte,
            export_url,
            export_dir,
            max_dim,
          )

          if result.error:
            error_count += 1
            progress.console.log(
              f"[red]Error optimizing {image_info.object_id}: {result.error}"
            )
            continue

          if result.skipped:
            skipped_count += 1
            total_before_kb += result.original_size_kb
            total_after_kb += result.optimized_size_kb
            continue

          optimized_count += 1
          total_before_kb += result.original_size_kb
          total_after_kb += result.optimized_size_kb

    message = (
      f"Optimized {optimized_count} images "
      f"({total_before_kb:.1f} KB -> {total_after_kb:.1f} KB), "
      f"{error_count} errors, {skipped_count} skipped"
    )
    return StepResult(success=(error_count == 0), message=message)


class MediaCleanStep(StepHandler):
  """Remove unreferenced image files from export directory."""

  step_type = "media.clean"

  def execute(self, context, params):
    """Clean unreferenced image files.

    Args:
      context: Build context containing project data
      params: Must contain "export_dir" and "export_url"

    Returns:
      StepResult with cleanup summary

    Raises:
      BuildError: If required parameters are missing
    """
    if "export_dir" not in params:
      raise BuildError("media.clean step requires 'export_dir' parameter")
    if "export_url" not in params:
      raise BuildError("media.clean step requires 'export_url' parameter")

    export_dir = context.work_dir / params["export_dir"]
    export_url = params["export_url"]

    # Check if export directory exists
    if not export_dir.exists():
      return StepResult(
        success=True, message="Export directory does not exist, nothing to clean"
      )

    # Find all files in export directory
    all_files = set(export_dir.glob("*"))
    all_files = {f for f in all_files if f.is_file()}

    # Find referenced files
    referenced_files = set()
    for image_info in list_all_images(context.project):
      if image_info.image_data is None:
        continue

      # Only check URL images that start with export_url
      if image_info.image_is_url and str.startswith(image_info.image_data, export_url):
        # Extract filename from URL
        filename = image_info.image_data.replace(export_url, "").strip("/")
        file_path = export_dir / filename
        if file_path.exists():
          referenced_files.add(file_path)

    # Find unreferenced files
    unreferenced_files = all_files - referenced_files

    # Delete unreferenced files
    deleted_count = 0
    for file_path in unreferenced_files:
      try:
        file_path.unlink()
        deleted_count += 1
        context.console.log(f"Deleted: {file_path.name}")
      except Exception as e:
        context.console.log(f"[red]Error deleting {file_path.name}: {e}")

    message = f"Deleted {deleted_count} unreferenced image files"
    return StepResult(success=True, message=message)
