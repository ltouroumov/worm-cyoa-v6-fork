# Apply fix patches
python3 -m cyoa.tools.client project.patch --project "$1" \
  --patch cyoa.patch:FixScoreLabels \
          cyoa.patch:FixActiveFlags \
          cyoa.patch:FixConditionLabels \
          cyoa.patch:ClearEditingFlag \
          cyoa.patch:FixMultiSelectCounters \