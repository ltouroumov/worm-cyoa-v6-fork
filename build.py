import sys

DEFAULT_TEMPLATE = './viewer/js/app.4a7f5c3c.js.tpl'
DEFAULT_OUTPUT = './viewer/js/app.4a7f5c3c.js'

def main():
    project_file = sys.argv[1]
    if len(sys.argv) == 4:
        template = sys.argv[2]
        output = sys.argv[3]
    else:
        template = DEFAULT_TEMPLATE
        output = DEFAULT_OUTPUT

    with open(template, mode='r') as fd:
        template_contents = fd.read()

    with open(project_file, mode='r') as fd:
        project_contents = fd.read()

    output_contents = template_contents.replace('%PROJECT%', project_contents)

    with open(output, mode='w+') as fd:
        fd.write(output_contents)
        print(f"Written {len(output_contents)} bytes to {output}")

if __name__ == "__main__":
    # execute only if run as a script
    main()