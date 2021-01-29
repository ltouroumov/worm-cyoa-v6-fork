import sys
import shutil

DEFAULT_OUTPUT = './viewer/project.json'

def main():
    project_file = sys.argv[1]
    if len(sys.argv) == 3:
        output = sys.argv[2]
    else:
        output = DEFAULT_OUTPUT

    shutil.copy(project_file, output)
    print(f"Copied {project_file} to {output}")

if __name__ == "__main__":
    # execute only if run as a script
    main()
