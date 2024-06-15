#!/bin/bash

REPODIR="cyoacc"
REPOURL="https://github.com/DelicateIntegral/cyoacc.git"
LIGHT_JSON="viewer/project_light.json"

# Check if the repository directory exists
if [ -d "$REPODIR" ]; then
    # If directory exists, perform git pull
    echo "Repository exists. Pulling latest changes..."
    cd "$REPODIR"
    git pull origin main
    cd ..
else
    # If directory does not exist, perform git clone
    echo "Repository does not exist. Cloning from remote..."
    git clone "$REPOURL" "$REPODIR"
fi

# Remove old light mode JSON
if [ -f "$LIGHT_JSON" ]; then
    rm "$LIGHT_JSON"
fi

# Navigate to repository directory and run Python script
cd "$REPODIR" || exit
python3 -m cyoacc.core "../viewer"
