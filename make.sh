#!/bin/bash

if [ "$#" -lt "2" ]; then
	echo "build.sh file.json v00"
	exit 1
fi

INPUT=$1
VERSION=v17
PROJECT="project-$VERSION.json"


cp "$INPUT" $PROJECT

# Format the JSON document
python3 -m cyoa.tools.client project.format --project $PROJECT --skip-backup

# Run sanity checks
python3 -m cyoa.tools.client project.check --project $PROJECT

# Apply images normalization
python3 -m cyoa.tools.client project.patch --project $PROJECT \
  --patch cyoa.patch:FixImageLinks

# Extract, Optimize, and Clean media files
python3 -m cyoa.tools.client media.extract --project $PROJECT \
  --export-dir images/$VERSION \
  --export-url https://cyoa.ltouroumov.ch/images/$VERSION

python3 -m cyoa.tools.client media.optimize --project $PROJECT \
  --export-dir images/$VERSION \
  --export-url https://cyoa.ltouroumov.ch/images/$VERSION \
  --size-gte 1500 --max-dim=1500x1500 --optimize-urls \
  --write

python3 -m cyoa.tools.client media.clean --project $PROJECT \
  --export-dir images/$VERSION \
  --export-url https://cyoa.ltouroumov.ch/images/$VERSION

# Apply fix patches
python3 -m cyoa.tools.client project.patch --project $PROJECT \
  --patch cyoa.patch:FixScoreLabels \
          cyoa.patch:FixActiveFlags \
          cyoa.patch:FixConditionLabels \
          cyoa.patch:ClearEditingFlag \
          cyoa.patch:FixMultiSelectCounters

# Update the viewer
python3 -m cyoa.tools.client build --input $PROJECT --output viewer
python3 -m cyoa.tools.client build --input $PROJECT --output viewer-old

# Generate the list of powers
python3 -m cyoa.tools.client project.powers --project $PROJECT --output powers-$VERSION.csv
