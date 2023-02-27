#!/bin/bash

if [ "$#" -lt "2" ]; then
	echo "build.sh file.json v00"
	exit 1
fi

INPUT=$1
VERSION=$2
BUILD="viewer"
if [ "$#" == "3" ]; then
    BUILD=$3
fi

PROJECT="project-$VERSION.json"

cp "$INPUT" $PROJECT

# Format the JSON document
python3 -m cyoa.tools.client project.format --project $PROJECT --skip-backup

# Optimize and extract medias
python3 -m cyoa.tools.client media.optimize --project $PROJECT --write
python3 -m cyoa.tools.client media.extract --project $PROJECT \
  --export-path images/$VERSION \
  --export-url https://ltouroumov.github.io/worm-cyoa-v6-fork/images/$VERSION

# Apply fix patches
python3 -m cyoa.tools.client project.patch --project $PROJECT \
  --patch cyoa.patch:FixScoreLabels \
          cyoa.patch:FixConditionLabels \
          cyoa.patch:FixMultiSelectCounters

# Update the viewer
python3 -m cyoa.tools.client build --input $PROJECT --output $BUILD
