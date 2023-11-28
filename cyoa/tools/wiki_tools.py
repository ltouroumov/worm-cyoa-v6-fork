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

    def _query_raw(self, **kwargs):
        query_res = self.session.get(URL_BASE, params={
            "action": "query", "format": "json",
            **kwargs
        })

        return query_res.json()

    def query_prefix(self, prefix: str, **kwargs):
        query_res = self._query_raw(list="prefixsearch", pssearch=prefix, **kwargs)
        return query_res['query']['prefixsearch']

    def query_content(self, **kwargs):
        query_res = self._query_raw(prop="revisions", rvslots="*", rvprop="ids|content", **kwargs)
        return query_res['query']['pages']

    def parse(self, **kwargs):
        query_res = self.session.get(URL_BASE, params={
            "action": "parse", "format": "json",
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
    'Project V17/Sections/Scenario': {
        "mode": "subpage",
        "row_ids": ["lht3"]
    },
}


def content_matches(new_text, wiki_page):
    if not wiki_page:
        return False

    return new_text == wiki_page['revisions'][0]['slots']['main']['*']


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

        for path, config in STRUCTURE.items():
            console.print(f'Section "{path}"')

            wiki_pages: list = api.query_prefix(path)
            wiki_pages: dict = api.query_content(pageids=str.join('|', [
                f"{wiki_page['pageid']}"
                for wiki_page in wiki_pages
            ]))
            wiki_pages: dict = {
                wiki_page['title']: wiki_page
                for wiki_page in wiki_pages.values()
            }

            pages = []
            for row_id in config['row_ids']:
                row_data = project_rows[row_id]
                for obj_data in row_data['objects']:
                    page_name = f"{path}/{obj_data['title']}"
                    wiki_page = wiki_pages.get(page_name, None)

                    page_text = obj_data['text']
                    if image := obj_data.get('imageLink', None):
                        page_text = f"{image}\n{page_text}"

                    if not content_matches(page_text, wiki_page):
                        console.print(f'updated: {page_name}')
                        api.edit(title=page_name, text=page_text)
                    else:
                        console.print(f'skipped: {page_name}')

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
