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
python3 -m cyoa.tools.client project.format --project $PROJECT --skip-backup
python3 -m cyoa.tools.client media.optimize --project $PROJECT --write
python3 -m cyoa.tools.client project.patch --project $PROJECT \
  --patch cyoa.patch:FixScoreLabels \
          cyoa.patch:FixMultiSelectCounters
python3 -m cyoa.tools.client build --input $PROJECT --output $BUILD
git status
