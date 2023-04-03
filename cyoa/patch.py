from cyoa.tools.lib import console
from cyoa.tools.patch import PatchBase, patch, PatchContext


class FixScoreLabels(PatchBase):
    @patch(target="object.score")
    def patch_points(self, score, obj, context: PatchContext):
        if point_type := context.point_types.get(score['id'], None):
            if len(point_type['afterText']) > 0:
                score['afterText'] = point_type['afterText']

            if int(score['value']) < 0:
                score['beforeText'] = 'Gain:'
            elif int(score['value']) > 0:
                score['beforeText'] = 'Cost:'
        else:
            console.log(f"Object {obj['id']} has malformed score: {score}")


class FixConditionLabels(PatchBase):
    @patch(target="object.condition")
    def patch_points(self, cond, obj, context: PatchContext):
        if cond['type'] == 'id' and cond['showRequired']:
            if cond['required']:
                cond['beforeText'] = 'Required:'
            else:
                cond['beforeText'] = 'Incompatible:'


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

    @patch(target='object')
    def patch_counter(self, obj):
        if obj.get('isSelectableMultiple', False) and obj.get('isMultipleUseVariable', False):
            obj['multipleUseVariable'] = 0


class FixIsNotSelectableFlag(PatchBase):
    @patch(target='object')
    def patch_flags(self, obj):
        if 'isNotSelectable' in obj and obj['isNotSelectable'] is False:
            del obj['isNotSelectable']

    @patch(target="object.score")
    def patch_points(self, score):
        if 'isActive' in score and score['isActive'] is False:
            del score['isActive']

class ClearEditingFlag(PatchBase):
    @patch(target='row')
    def patch_row(self, row):
        if row.get('isEditModeOn', False):
            row['isEditModeOn'] = False
