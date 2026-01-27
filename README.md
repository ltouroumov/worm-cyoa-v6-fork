# Lt Ouroumov's Worm CYOA

This ICYOA is the fork of Worm ICYOA V6 (by PixelGMS). Below are the links to that ICYOA.

- [Version 6.0](https://interactivewormcyoav6.neocities.org/WormCYOAV6/WormCYOAV6.html)
- [Version 6.1](https://interactivewormcyoav6.neocities.org/WormCYOAV6.1/Worm.html)

This is the link to Lt Ouroumov's Worm ICYOA: [View Here](https://cyoa.ltouroumov.ch/viewer/)

## CYOA Tools

CLI tools for manipulating ICYOA project files (currently supports original ICC project files only).

### Installation

Requires [uv](https://docs.astral.sh/uv/).

```bash
# Clone the repo
git clone https://github.com/ltouroumov/worm-cyoa-v6-fork worm-cyoa

# Change directory
cd worm-cyoa

# Create a virtual environment
# This will automatically download Python 3.13 as defined in `.python-version` file
uv venv

# Activate the virtual environment
source .venv/bin/activate

# Install dependencies and the CLI tool
uv sync

# Verify installation
cyoa -h

# Deactivate the virtual environment
deactivate
```

### Usage

```bash
cyoa COMMAND [OPTIONS]
```

Run `cyoa COMMAND -h` for detailed help on any command.

### Commands

#### Project Commands

| Command          | Description                                         |
| ---------------- | --------------------------------------------------- |
| `project.format` | Format a project file                               |
| `project.points` | Display point/score information for objects         |
| `project.check`  | Check project for duplicates and invalid references |
| `project.patch`  | Apply patches to a project file                     |
| `project.costs`  | Analyze power costs and upgrade chains              |
| `project.addons` | List addons with their requirements                 |
| `project.powers` | Export powers as CSV with requirements              |

#### Row Commands

| Command     | Description                  |
| ----------- | ---------------------------- |
| `row.list`  | List all rows in project     |
| `row.copy`  | Copy a row into a file       |
| `row.merge` | Merge multiple rows into one |

#### Object Commands

| Command       | Description                         |
| ------------- | ----------------------------------- |
| `object.list` | List all objects in a row           |
| `object.copy` | Copy objects from a row into a file |
| `object.cut`  | Remove/Cut objects from a row       |
| `object.move` | Move objects between rows           |
| `object.add`  | Add objects to a row                |

#### Media Commands

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `media.list`     | List all images in the project             |
| `media.optimize` | Optimize and compress images               |
| `media.extract`  | Extract embedded images to files           |
| `media.migrate`  | Migrate image URLs to a new base URL       |
| `media.clean`    | Remove orphan images from export directory |
| `media.zip`      | Archive images into ZIP files by row       |

#### Style Commands

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `styles.list`   | List all styles in project           |
| `styles.update` | Apply style updates from a YAML file |

#### Other Commands

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `merge`           | Merge changes into a project file   |
| `build`           | Build project output to a directory |
| `wiki.update`     | Update wiki pages from project data |
| `wiki.rows-table` | Generate wiki table markup for rows |

#### Script Commands

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| `script.copy_styles` | Copy row styles from another project file |
| `script.key_addons`  | Add IDs to all addons in the project      |
| `script.key_objects` | Normalize object IDs to standard format   |

### Examples

```bash
# Format the project file
cyoa project.format --project project.json

# List all rows
cyoa row.list --project project.json

# List all objects in a row
cyoa object.list --project project.json --row-id abc123

# Extract embedded images to a directory
cyoa media.extract --project project.json --export-dir ./images --export-url ./images

# Migrate image URLs to relative paths
cyoa media.migrate --project project.json \
    --old-base-url "https://cyoa.ltouroumov.ch/images" \
    --new-base-url "./images"
```
