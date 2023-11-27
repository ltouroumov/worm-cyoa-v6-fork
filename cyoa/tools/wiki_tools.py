from pathlib import Path
import requests

from cyoa.tools.lib import ToolBase, ProjectUtilsMixin, console

URL_BASE = "https://cyoa.ltouroumov.ch/wiki/api.php"


class WikiError(BaseException):
    def __init__(self, code, info):
        self.code = code
        self.info = info
        super().__init__(f"{code}: {info}")


class WikiAPI:
    def __init__(self):
        self.session = requests.Session()

    def _get_token(self, token_type):
        tokens_res = self.session.get(URL_BASE, params={
            "action": "query",
            "meta": "tokens",
            "type": token_type,
            "format": "json"
        })
        token_res_json = tokens_res.json()
        tokens_map: dict = token_res_json['query']['tokens']
        tokens = list(tokens_map.values())
        return tokens[0]

    def login(self, username, password):
        login_token = self._get_token(token_type="login")
        console.print(f"Login as {username}")

        res = self.session.post(URL_BASE, data={
            "action": "login",
            "lgname": username,
            "lgpassword": password,
            "lgtoken": login_token,
            "format": "json",
        })

        console.log(res.text)

    def query(self, **kwargs):
        query_res = self.session.get(URL_BASE, params={
            "action": "query", "format": "json",
            **kwargs
        })

        console.print(query_res.json())

    def edit(self, **kwargs):
        csrf_token = self._get_token(token_type='csrf')

        query_res = self.session.post(URL_BASE, data={
            "action": "edit", "format": "json",
            **kwargs,
            "token": csrf_token,
        }).json()

        if error := query_res.get('error', None):
            raise WikiError(code=error['code'], info=error['info'])
        else:
            return query_res['edit']


STRUCTURE = {
    # 'Project_V17/Sections': {
    #     "mode": "index"
    # },
    # 'Project_V17/Sections/Meta': {
    #     "mode": "inline",
    #     "row_ids": ["91nq", "m08s", "p9a8"],
    # },
    # 'Project_V17/Sections/Difficulty': {
    #     "mode": "inline",
    #     "row_ids": ["yk8d", "81zz"],
    # },
    'Project_V17/Sections/Scenario': {
        "mode": "subpage",
        "row_ids": ["lht3"]
    },
}


class ProjectFormatTool(ToolBase, ProjectUtilsMixin):
    name = 'wiki.update'

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--bot-username')
        parser.add_argument('--bot-password')

    def run(self, args):
        self._load_project(args.project_file)
        project_rows = {
            row['id']: row
            for row in self.project['rows']
        }

        api = WikiAPI()
        api.login(args.bot_username, args.bot_password)

        api.query(list="prefixsearch",
                  pssearch="Project_V17")

        for path, config in STRUCTURE.items():
            console.print(f'Section "{path}"')

            pages = []
            for row_id in config['row_ids']:
                row_data = project_rows[row_id]
                console.print(f'Row "{row_data["title"]}"')
                for obj_data in row_data['objects']:
                    console.print(f'Object: {obj_data["title"]}')
                    page_name = f"{path}/{obj_data['title']}"
                    page_text = obj_data['text']
                    if image := obj_data.get('imageLink', None):
                        page_text = f"{image}\n{page_text}"

                    api.edit(title=page_name, text=page_text)
                    pages.append({"name": page_name, "title": obj_data['title']})

            # Update the index
            index_text = [
                f'* [[{subpage["name"]}|{subpage["title"]}]]'
                for subpage in pages
            ]
            api.edit(title=path, text=str.join('\n', index_text))


TOOLS = (
    ProjectFormatTool,
)
