import random
import re
import string
from cyoa.ops.common import find_first, is_empty
from cyoa.tools.lib import console
from cyoa.tools.patch import PatchBase, patch, PatchContext


class FixActiveFlags(PatchBase):
  @patch(target="object.score")
  def patch_points(self, score):
    if "isActive" in score:
      del score["isActive"]


class FixScoreLabels(PatchBase):
  @patch(target="object.score")
  def patch_points(self, score, obj, context: PatchContext):
    point_type = context.point_types.get(score["id"], None)
    if not point_type:
      console.log(f"Object {obj['id']} missing score_id: {score}")
      suffix = score["afterText"]
      point_type = find_first(
        context.point_types.values(), lambda pt: pt["afterText"] == suffix
      )

    if point_type:
      score["id"] = point_type["id"]
      if len(point_type["afterText"]) > 0:
        score["afterText"] = point_type["afterText"]

      if int(score["value"]) < 0:
        score["beforeText"] = "Gain:"
      elif int(score["value"]) > 0:
        score["beforeText"] = "Cost:"
    else:
      console.log(f"Object {obj['id']} has malformed score: {score}")


class FixConditionLabels(PatchBase):
  @patch(target="object.condition")
  def patch_points(self, cond, obj, context: PatchContext):
    if cond["type"] == "id" and cond["showRequired"]:
      if cond["required"]:
        cond["beforeText"] = "Required:"
      else:
        cond["beforeText"] = "Incompatible:"


class FixMultiSelectCounters(PatchBase):
  """
  {
      "isMultipleUseVariable": true,
      "isSelectableMultiple": true,
      "multipleUseVariable": 0,
      "numMultipleTimesMinus": "0",
      "numMultipleTimesPluss": "3",
  }
  """

  @patch(target="object")
  def patch_counter(self, obj):
    if obj.get("isSelectableMultiple", False) and obj.get(
      "isMultipleUseVariable", False
    ):
      obj["multipleUseVariable"] = 0


class FixIsNotSelectableFlag(PatchBase):
  @patch(target="object")
  def patch_flags(self, obj):
    if "isNotSelectable" in obj and obj["isNotSelectable"] is False:
      del obj["isNotSelectable"]

  @patch(target="object.score")
  def patch_points(self, score):
    if "isActive" in score and score["isActive"] is False:
      del score["isActive"]


class ClearEditingFlag(PatchBase):
  @patch(target="row")
  def patch_row(self, row):
    if row.get("isEditModeOn", False):
      row["isEditModeOn"] = False


class FixImageLinks(PatchBase):
  def _patch_image(self, data):
    img_is_url = data.get("imageIsUrl", False)
    img_data: str | None = data.get("image", None)
    img_url: str | None = data.get("imageLink", None)

    # Remove the URL properties if the image is empty
    if is_empty(img_data):
      data["image"] = ""
      data["imageIsUrl"] = False
      data["imageLink"] = ""
    # Correct imageIsUrl=false but image contains an URL
    elif img_is_url is False and img_data.startswith("http"):
      data["image"] = img_data
      data["imageLink"] = img_data
      data["imageIsUrl"] = True
    # Correct imageIsUrl=true but image contains data
    elif img_is_url is True and img_data.startswith("data"):
      data["image"] = img_data
      del data["imageIsUrl"]
      del data["imageLink"]
    # Correct missing imageLink value
    elif img_is_url is True and is_empty(img_url):
      data["image"] = img_data
      data["imageIsUrl"] = True
      data["imageLink"] = img_data
    # Remove the URL properties if the image URL is empty
    # Keep the image data as-is
    elif is_empty(img_url):
      data["image"] = img_data
      data["imageIsUrl"] = False
      data["imageLink"] = ""

  @patch(target="row")
  def patch_row(self, row):
    self._patch_image(row)

  @patch(target="object")
  def patch_obj(self, obj):
    self._patch_image(obj)


def has_whitespace(data):
  return re.search(r"^\s+", data) or re.search(r"\s+$", data)


class TrimSpaces(PatchBase):
  @patch(target="object")
  def patch_obj(self, obj):
    if has_whitespace(obj["id"]):
      console.print(f"[orange1]Remove whitespace from choice ID '{obj['id']}'")
      obj["id"] = str.strip(obj["id"])
    if has_whitespace(obj["title"]):
      console.print(f"[orange1]Remove whitespace from choice title '{obj['title']}'")
      obj["title"] = str.strip(obj["title"])

  @patch(target="object.addon")
  def patch_addon(self, obj):
    if has_whitespace(obj["title"]):
      console.print(f"[orange1]Remove whitespace from addon title '{obj['title']}'")
      obj["title"] = str.strip(obj["title"])


class KeyAddons(PatchBase):
  @patch(target="object.addon")
  def patch_addon(self, obj):
    if is_empty(obj["id"]):
      console.print(f"[orange1]Addon '{obj['title']}' is missing an ID")
      obj_id = str.join("", random.choices(string.ascii_lowercase + string.digits, k=8))
      obj["id"] = obj_id
