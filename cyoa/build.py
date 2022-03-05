import sys
import os
import json
import base64
import glob

VIEWER_ROOT = './images'
DEFAULT_OUTPUT_PATH = './viewer/'


def write_image(image_data, file_name, images_dir):
    header, contents = str.split(image_data, ';')
    encoding, data_str = str.split(contents, ',')
    if header.endswith('jpeg'):
        file_name = f"{file_name}.jpeg"
    elif header.endswith('png'):
        file_name = f"{file_name}.png"
    elif header.endswith('webp'):
        file_name = f"{file_name}.webp"
    else:
        print(f"Unsupported format {header}")
        return None

    if encoding == 'base64':
        data_bytes = base64.b64decode(data_str)
    else:
        print(f"Unsupported encoding {encoding}")
        return None

    img_path = os.path.join(images_dir, file_name)
    print(f"Writing {img_path}")
    with open(img_path, mode='wb+') as fd:
        fd.write(data_bytes)
    
    return os.path.join(VIEWER_ROOT, file_name)


def extract_images_to(project, images_dir):
    def extract_image_from_item(item, prefix):
        item_id = item['id']
        if (image := item['image']) != '':
            image_path = write_image(image, f"{prefix}-{item_id}", images_dir)
        else:
            image_path = None
        
        if image_path is not None:
            item['image'] = image_path

    def extract_image_from_style(item, prefix, prop):
        item_id = item.get('id', '0')
        style_data = item['styling']
        if (image := style_data[prop]) != '':
            image_path = write_image(image, f"{prefix}-{item_id}-{prop}", images_dir)
        else:
            image_path = None
        
        if image_path is not None:
            style_data[prop] = image_path


    extract_image_from_style(project, "proj", prop='backgroundImage')
    extract_image_from_style(project, "proj", prop='objectBackgroundImage')
    extract_image_from_style(project, "proj", prop='rowBackgroundImage')

    for row in project['rows']:
        extract_image_from_item(row, "row")
        
        extract_image_from_style(row, "row", prop='backgroundImage')
        extract_image_from_style(row, "row", prop='objectBackgroundImage')
        extract_image_from_style(row, "row", prop='rowBackgroundImage')
        
        for obj in row['objects']:
            extract_image_from_item(obj, "obj")


def remove_images(images_dir):
    files = glob.glob(os.path.join(images_dir, '*.*'))
    for file_name in files:
        os.remove(file_name)


def main():
    project_file = sys.argv[1]
    if len(sys.argv) == 3:
        output_path = sys.argv[2]
    else:
        output_path = DEFAULT_OUTPUT_PATH

    images_dir = os.path.join(output_path, 'images')
    output_project = os.path.join(output_path, 'project.json')

    print(f"Loading Project from {project_file}")
    with open(project_file, mode='r') as fd:
        project = json.load(fd)

    print("Removing old images")
    remove_images(images_dir)

    print("Extracting Images")
    extract_images_to(project, images_dir)

    print(f"Writing Project to {output_project}")
    with open(output_project, mode='w+') as fd:
        json.dump(project, fd, indent=2, sort_keys=True)

    print("Done")


if __name__ == "__main__":
    # execute only if run as a script
    main()
