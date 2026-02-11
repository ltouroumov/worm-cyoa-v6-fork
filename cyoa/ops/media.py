"""Business logic for media operations (image processing, optimization, extraction).

This module contains pure data transformations for images:
- Listing all images in a project
- Decoding/encoding images
- Optimizing images (resize, compress to WebP)
- Extracting embedded images to files
- Updating image references in project data

All functions work with plain Python data structures and raise exceptions
on errors rather than printing to console.
"""

import base64
import functools
import io
import urllib.parse
from dataclasses import dataclass, replace
from pathlib import Path
from typing import Iterator, Optional, Sequence, Tuple

import requests
from lenses import lens
from PIL import Image

from cyoa.ops.common import find_first_index


# =============================================================================
# Data Structures
# =============================================================================


@dataclass
class ImageInfo:
  """Metadata about an image in the project."""

  image_data: str
  object_type: str = None
  row_id: Optional[str] = None
  obj_id: Optional[str] = None
  name: Optional[str] = None
  style_prop: Optional[str] = None
  image_is_url: bool = False

  @property
  def object_id(self):
    """Full hierarchical ID (e.g., 'row123/obj456/backgroundImage')."""
    result = []
    if self.row_id:
      result.append(self.row_id)
    if self.obj_id:
      result.append(self.obj_id)
    if self.style_prop:
      result.append(self.style_prop)
    return str.join("/", result)

  @property
  def short_id(self):
    """Shortened ID for file naming (e.g., 'obj456-backgroundImage')."""
    result = []
    if self.obj_id:
      result.append(self.obj_id)
    elif self.row_id:
      result.append(self.row_id)
    if self.style_prop:
      result.append(self.style_prop)
    return str.join("-", result)


@dataclass
class ImageMetadata:
  """Metadata about an image after decoding/processing."""

  image: Optional[Image.Image]
  size_bytes: int
  header: str  # MIME type (e.g., 'data:image/webp')
  dimensions: Tuple[int, int]  # (width, height)
  error: Optional[str] = None


@dataclass
class OptimizeResult:
  """Result of optimizing a single image."""

  image_info: ImageInfo
  original_size_kb: float
  optimized_size_kb: float
  dimensions: Tuple[int, int]
  image_type: str
  export_name: Optional[str] = None
  export_url: Optional[str] = None
  skipped: bool = False
  skip_reason: Optional[str] = None
  error: Optional[str] = None


@dataclass
class ExtractResult:
  """Result of extracting an embedded image."""

  image_info: ImageInfo
  image_type: str
  image_size_kb: float
  export_name: str
  export_url: str
  error: Optional[str] = None


@dataclass
class DownloadResult:
  """Result of downloading an external image."""

  image_info: ImageInfo
  image_type: str
  export_name: str
  export_url: str
  skipped: bool = False
  error: Optional[str] = None


# =============================================================================
# Constants
# =============================================================================


IMAGE_PROPS = ("backgroundImage", "objectBackgroundImage", "rowBackgroundImage")


# =============================================================================
# Core Business Logic Functions
# =============================================================================


def list_all_images(project: dict) -> Iterator[ImageInfo]:
  """Iterate over all images in the project.

  Yields ImageInfo for:
  - Project-level background images
  - Row images and row background images
  - Object images and object background images

  Args:
      project: The project dictionary

  Yields:
      ImageInfo for each image found in the project
  """

  def extract_image_from_item(item) -> Optional[ImageInfo]:
    image_data = item.get("image")
    image_is_url = item.get("imageIsUrl", False)
    if image_data != "":
      return ImageInfo(image_data=image_data, image_is_url=image_is_url)
    return None

  def extract_image_from_style(item, prop) -> Optional[ImageInfo]:
    if (style_data := item.get("styling", None)) is None:
      return None
    if (image := style_data.get(prop, "")) != "":
      return ImageInfo(image_data=image)
    return None

  # Project-level background images
  for style_prop in IMAGE_PROPS:
    if bgImage := extract_image_from_style(project, prop=style_prop):
      yield replace(bgImage, object_type="proj", style_prop=style_prop)

  # Row and object images
  for row in project["rows"]:
    if rowImage := extract_image_from_item(row):
      yield replace(
        rowImage, object_type="row", row_id=row.get("id"), name=row.get("title")
      )

    for style_prop in IMAGE_PROPS:
      if bgImage := extract_image_from_style(row, prop=style_prop):
        yield replace(
          bgImage,
          object_type="row",
          row_id=row.get("id"),
          style_prop=style_prop,
        )

    for obj in row["objects"]:
      if objImage := extract_image_from_item(obj):
        yield replace(
          objImage,
          object_type="obj",
          row_id=row.get("id"),
          obj_id=obj.get("id"),
          name=obj.get("title"),
        )

      for style_prop in IMAGE_PROPS:
        if bgImage := extract_image_from_style(obj, prop=style_prop):
          yield replace(
            bgImage,
            object_type="obj",
            row_id=row.get("id"),
            obj_id=obj.get("id"),
            style_prop=style_prop,
          )


def decode_image(image_data: str) -> Tuple[str, bytes]:
  """Decode a data URI image to bytes.

  Args:
      image_data: Data URI string (e.g., 'data:image/webp;base64,...')

  Returns:
      Tuple of (header, data_bytes) where header is the MIME type

  Raises:
      ValueError: If encoding is unsupported or decoding fails
  """
  header, contents = str.split(image_data, ";", 1)
  encoding, data_str = str.split(contents, ",", 1)

  if encoding == "base64":
    try:
      data_bytes = base64.b64decode(data_str)
    except Exception as e:
      raise ValueError(f"Failed to decode base64 data: {e}")
  else:
    raise ValueError(f"Unsupported encoding {encoding}")

  return header, data_bytes


def encode_image(image_type: str, image_data: bytes) -> str:
  """Encode image bytes as a data URI.

  Args:
      image_type: Image format (e.g., 'webp', 'jpeg', 'png')
      image_data: Raw image bytes

  Returns:
      Data URI string
  """
  return f"data:image/{image_type};base64," + base64.b64encode(image_data).decode(
    "utf-8"
  )


def get_image_info(image_data: str | bytes, decode: bool = True) -> ImageMetadata:
  """Get metadata about an image.

  Args:
      image_data: Either a data URI string (if decode=True) or raw bytes (if decode=False)
      decode: Whether to decode a data URI first

  Returns:
      ImageMetadata with image object, size, header, and dimensions
  """
  try:
    if decode:
      header, data_bytes = decode_image(image_data)
    else:
      header, data_bytes = None, image_data

    image_size = len(data_bytes)
    image = Image.open(io.BytesIO(data_bytes))
    return ImageMetadata(
      image=image, size_bytes=image_size, header=header, dimensions=image.size
    )
  except Exception as e:
    preview = str(image_data)[:16] if isinstance(image_data, str) else "<bytes>"
    return ImageMetadata(
      image=None,
      size_bytes=0,
      header="",
      dimensions=(0, 0),
      error=f"Error while reading '{preview}': {type(e).__name__}",
    )


def optimize_image(
  image: Image.Image, max_size: Optional[Tuple[int, int]] = None
) -> bytes:
  """Optimize an image by resizing and converting to WebP.

  Args:
      image: PIL Image to optimize
      max_size: Optional (max_width, max_height) tuple for resizing

  Returns:
      Optimized image bytes in WebP format
  """
  image_data = io.BytesIO()

  if max_size is not None:
    max_w, max_h = max_size
    cur_w, cur_h = image.size

    # Handle horizontal images
    # Resize when the image is wider than the maximum width
    if cur_w > cur_h and cur_w > max_w:
      # Compute the new size using the rule of three
      #  image width       max width
      # -------------- = --------------
      #  image height     [new height]
      #
      #               image height * max width
      # new height = --------------------------
      #               image width
      #
      new_h = round((cur_h * max_w) / cur_w)
      image = image.resize(size=(max_w, new_h))

    # Handle vertical images
    # Resize when the image is higher than the maximum height
    if cur_h > cur_w and cur_h > max_h:
      # Compute the new size using the rule of three
      #  image width      [max width]
      # -------------- = -------------
      #  image height     max height
      #
      #               image width * max height
      # new width = --------------------------
      #               image height
      #
      new_w = round((cur_w * max_h) / cur_h)
      image = image.resize(size=(new_w, max_h))

  image.save(image_data, format="webp", lossless=False, quality=100, method=4)

  return image_data.getvalue()


def export_image_name(image_info: ImageInfo, image_type: str) -> str:
  """Generate a file name for exporting an image.

  Args:
      image_info: ImageInfo describing the image
      image_type: Image format extension (e.g., 'webp', 'png')

  Returns:
      File name string

  Raises:
      ValueError: If image_info.object_type is invalid
  """
  if image_info.object_type in ("proj", "row", "obj"):
    return f"{image_info.object_type}-{image_info.short_id}.{image_type}"
  else:
    raise ValueError(f"Invalid object_type: {image_info.object_type}")


def check_size(max_size: Optional[float], cur_size: float) -> bool:
  """Check if current size is within the maximum size limit.

  Args:
      max_size: Maximum size in KB, or None for no limit
      cur_size: Current size in KB

  Returns:
      True if cur_size <= max_size (or max_size is None)
  """
  if max_size is None:
    return True
  else:
    return cur_size <= max_size


# =============================================================================
# Project Update Functions (mutate project dict)
# =============================================================================


def _set_image_lenses(encoded_image: str, image_is_url: bool):
  """Create lens operations for updating image fields.

  Args:
      encoded_image: The image data (data URI or URL)
      image_is_url: Whether the image is a URL

  Returns:
      Tuple of lens operations
  """
  return (
    lens.Get("image").set(encoded_image),
    lens.Get("imageLink").set(encoded_image if image_is_url else None),
    lens.Get("imageIsUrl").set(image_is_url),
  )


def _update_with_lens(
  project: dict, row_id: Optional[str], obj_id: Optional[str], lens_op
):
  """Apply a lens operation to project, row, or object.

  Helper function that applies lens transformations at the appropriate level.
  """
  if row_id is None:
    # Project-level update
    if isinstance(lens_op, Sequence):
      for L in lens_op:
        project &= L
    else:
      project &= lens_op
  elif obj_id is None:
    # Row-level update
    _update_row_data(project, row_id, lens_op)
  else:
    # Object-level update
    _update_obj_data(project, row_id, obj_id, lens_op)


def _update_row_data(project: dict, row_id: str, lens_op):
  """Apply lens operation to a row. Internal helper."""
  if (
    row_idx := find_first_index(project["rows"], lambda row: row.get("id") == row_id)
  ) is None:
    return

  row_data = project["rows"][row_idx]
  if isinstance(lens_op, Sequence):
    row_data = functools.reduce(lambda acc, L: L(acc), lens_op, row_data)
  else:
    row_data = lens_op(row_data)

  project["rows"][row_idx] = row_data


def _update_obj_data(project: dict, row_id: str, obj_id: str, lens_op):
  """Apply lens operation to an object. Internal helper."""
  if (
    row_idx := find_first_index(project["rows"], lambda row: row.get("id") == row_id)
  ) is None:
    return

  row_data = project["rows"][row_idx]
  if (
    obj_idx := find_first_index(
      row_data["objects"], lambda obj: obj.get("id") == obj_id
    )
  ) is None:
    return

  obj_data = project["rows"][row_idx]["objects"][obj_idx]
  if isinstance(lens_op, (list, tuple)):
    obj_data = functools.reduce(lambda acc, L: L(acc), lens_op, obj_data)
  else:
    obj_data = lens_op(obj_data)

  project["rows"][row_idx]["objects"][obj_idx] = obj_data


def update_image(
  project: dict,
  image_info: ImageInfo,
  image_type: Optional[str] = None,
  image_data: Optional[bytes] = None,
  image_path: Optional[str] = None,
):
  """Update an image reference in the project.

  Mutates the project dict in place.

  Args:
      project: Project dictionary to update
      image_info: ImageInfo describing which image to update
      image_type: Image format (required if image_data is provided)
      image_data: Raw image bytes (mutually exclusive with image_path)
      image_path: Image URL (mutually exclusive with image_data)

  Raises:
      ValueError: If neither image_data nor image_path is provided
  """
  if image_data:
    encoded_image = encode_image(image_type, image_data)
    image_is_url = False
  elif image_path:
    encoded_image = image_path
    image_is_url = True
  else:
    raise ValueError("Either image_data or image_path must be provided")

  # Determine the lens operation based on object type
  if image_info.style_prop:
    # Background image (styling property)
    lens_op = lens["styling"][image_info.style_prop].set(encoded_image)
  else:
    # Regular image (image, imageLink, imageIsUrl fields)
    lens_op = _set_image_lenses(encoded_image, image_is_url)

  # Apply the lens operation at the appropriate level
  _update_with_lens(project, image_info.row_id, image_info.obj_id, lens_op)


# =============================================================================
# High-level Operations (return structured results)
# =============================================================================


def optimize_embedded_image(
  project: dict,
  image_info: ImageInfo,
  filter_size_gte: Optional[float],
  base_url: str,
  dest_dir: Path,
  max_dim: Optional[Tuple[int, int]],
) -> OptimizeResult:
  """Optimize an embedded image and export it to a file.

  Args:
      project: Project dictionary (will be mutated to update image reference)
      image_info: ImageInfo for the embedded image
      filter_size_gte: Minimum size in KB to optimize (skip smaller images)
      base_url: Base URL for the exported image
      dest_dir: Directory to export the image file
      max_dim: Optional (max_width, max_height) for resizing

  Returns:
      OptimizeResult with optimization details
  """
  metadata = get_image_info(image_info.image_data)

  if metadata.error:
    return OptimizeResult(
      image_info=image_info,
      original_size_kb=0,
      optimized_size_kb=0,
      dimensions=(0, 0),
      image_type="",
      error=metadata.error,
    )

  img_size_kb = metadata.size_bytes / 1024.0

  # Skip if already WebP and within size limit
  if metadata.header == "data:image/webp" and check_size(filter_size_gte, img_size_kb):
    return OptimizeResult(
      image_info=image_info,
      original_size_kb=img_size_kb,
      optimized_size_kb=img_size_kb,
      dimensions=metadata.dimensions,
      image_type=metadata.header,
      skipped=True,
      skip_reason="Already WebP and within size limit",
    )

  # Optimize the image
  optimized_bytes = optimize_image(metadata.image, max_size=max_dim)
  optimized_size_kb = len(optimized_bytes) / 1024.0

  # Export to file
  image_name = export_image_name(image_info, "webp")
  if dest_dir is not None:
    with open(dest_dir / image_name, mode="wb") as fd:
      fd.write(optimized_bytes)

  # Update project with new URL
  image_url = f"{base_url}/{image_name}"
  update_image(project, image_info, "webp", image_path=image_url)

  return OptimizeResult(
    image_info=image_info,
    original_size_kb=img_size_kb,
    optimized_size_kb=optimized_size_kb,
    dimensions=metadata.dimensions,
    image_type=metadata.header,
    export_name=image_name,
    export_url=image_url,
  )


def optimize_file_image(
  project: dict,
  image_info: ImageInfo,
  filter_size_gte: Optional[float],
  base_url: str,
  base_path: Path,
  max_dim: Optional[Tuple[int, int]],
) -> OptimizeResult:
  """Optimize an image file in place.

  Args:
      project: Project dictionary (will be mutated to update image reference)
      image_info: ImageInfo for the file-based image
      filter_size_gte: Minimum size in KB to optimize (skip smaller images)
      base_url: Base URL for images
      base_path: Base path for image files
      max_dim: Optional (max_width, max_height) for resizing

  Returns:
      OptimizeResult with optimization details
  """
  # Extract file name from URL
  image_name = str.replace(image_info.image_data, base_url, "").strip("/")
  image_path = base_path / image_name

  if not image_path.exists():
    return OptimizeResult(
      image_info=image_info,
      original_size_kb=0,
      optimized_size_kb=0,
      dimensions=(0, 0),
      image_type="",
      skipped=True,
      skip_reason="File missing",
      error=f"File not found: {image_path}",
    )

  # Read the file
  with image_path.open(mode="rb") as fd:
    image_bytes = fd.read()

  metadata = get_image_info(image_bytes, decode=False)

  if metadata.error:
    return OptimizeResult(
      image_info=image_info,
      original_size_kb=0,
      optimized_size_kb=0,
      dimensions=(0, 0),
      image_type="",
      error=metadata.error,
    )

  img_size_kb = metadata.size_bytes / 1024.0

  # Skip if already WebP and within size limit
  if image_name.endswith(".webp") and check_size(filter_size_gte, img_size_kb):
    return OptimizeResult(
      image_info=image_info,
      original_size_kb=img_size_kb,
      optimized_size_kb=img_size_kb,
      dimensions=metadata.dimensions,
      image_type="webp",
      skipped=True,
      skip_reason="Already WebP and within size limit",
    )

  # Optimize the image
  optimized_bytes = optimize_image(metadata.image, max_size=max_dim)
  optimized_size_kb = len(optimized_bytes) / 1024.0

  # Export to file
  export_name = export_image_name(image_info, "webp")
  with open(base_path / export_name, mode="wb") as fd:
    fd.write(optimized_bytes)

  # Update project with new URL
  export_url = f"{base_url}/{export_name}"
  update_image(project, image_info, "webp", image_path=export_url)

  # Delete old file if name changed
  if export_name != image_name:
    image_path.unlink()

  return OptimizeResult(
    image_info=image_info,
    original_size_kb=img_size_kb,
    optimized_size_kb=optimized_size_kb,
    dimensions=metadata.dimensions,
    image_type="webp",
    export_name=export_name,
    export_url=export_url,
  )


def extract_embedded_image(
  project: dict, image_info: ImageInfo, dest_dir: Path, base_url: str
) -> ExtractResult:
  """Extract an embedded image to a file and update the project reference.

  Args:
      project: Project dictionary (will be mutated to update image reference)
      image_info: ImageInfo for the embedded image
      dest_dir: Directory to extract the image to
      base_url: Base URL for the extracted image

  Returns:
      ExtractResult with extraction details
  """
  try:
    header, image_data = decode_image(image_info.image_data)
  except (ValueError, Exception) as e:
    return ExtractResult(
      image_info=image_info,
      image_type="",
      image_size_kb=0,
      export_name="",
      export_url="",
      error=f"Failed to decode image: {e}",
    )

  image_type = header[header.rfind("/") + 1 :]
  image_size_kb = len(image_data) / 1024.0

  # Write the image file to disk
  image_name = export_image_name(image_info, image_type)
  with open(dest_dir / image_name, mode="wb") as fd:
    fd.write(image_data)

  # Update project reference
  image_url = f"{base_url}/{image_name}"
  update_image(project, image_info, image_type, image_path=image_url)

  return ExtractResult(
    image_info=image_info,
    image_type=image_type,
    image_size_kb=image_size_kb,
    export_name=image_name,
    export_url=image_url,
  )


def download_external_image(
  project: dict, image_info: ImageInfo, dest_dir: Path, base_url: str
) -> DownloadResult:
  """Download an external image and update the project reference.

  Args:
      project: Project dictionary (will be mutated to update image reference)
      image_info: ImageInfo for the external image
      dest_dir: Directory to download the image to
      base_url: Base URL for the downloaded image

  Returns:
      DownloadResult with download details
  """
  # Skip if already using the target base URL
  if str.startswith(image_info.image_data, base_url):
    return DownloadResult(
      image_info=image_info,
      image_type="",
      export_name="",
      export_url=image_info.image_data,
      skipped=True,
    )

  try:
    response = requests.get(str.strip(image_info.image_data))
    if not response.ok:
      parsed_url = urllib.parse.urlparse(str.strip(image_info.image_data))
      return DownloadResult(
        image_info=image_info,
        image_type="",
        export_name="",
        export_url="",
        error=f"HTTP {response.status_code}: Domain {parsed_url.hostname}",
      )

    image_bytes = response.content
    image = Image.open(io.BytesIO(image_bytes))
    image_type = str.lower(image.format)
    image_name = export_image_name(image_info, image_type)
    image_url = f"{base_url}/{image_name}"

    # Save to file
    with open(dest_dir / image_name, mode="wb") as fd:
      fd.write(image_bytes)

    # Update project reference
    update_image(project, image_info, image_type, image_path=image_url)

    return DownloadResult(
      image_info=image_info,
      image_type=image_type,
      export_name=image_name,
      export_url=image_url,
    )
  except Exception as e:
    return DownloadResult(
      image_info=image_info,
      image_type="",
      export_name="",
      export_url="",
      error=str(e),
    )


def migrate_image_url(
  project: dict, image_info: ImageInfo, old_base_url: str, new_base_url: str
) -> bool:
  """Migrate an image URL from one base URL to another.

  Args:
      project: Project dictionary (will be mutated if migration occurs)
      image_info: ImageInfo for the image
      old_base_url: Old base URL to replace
      new_base_url: New base URL

  Returns:
      True if the image was migrated, False if skipped
  """
  # Skip if already using new base URL
  if str.startswith(image_info.image_data, new_base_url):
    return False

  # Only migrate if using old base URL
  if str.startswith(image_info.image_data, old_base_url):
    new_url = str.replace(image_info.image_data, old_base_url, new_base_url)
    update_image(project, image_info, image_path=new_url)
    return True

  return False
