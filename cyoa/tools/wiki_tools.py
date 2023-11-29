import os
from fnmatch import fnmatch
from pathlib import Path
from typing import Any

import jinja2
import requests
from lenses import lens

from cyoa.tools.lib import ToolBase, ProjectUtilsMixin, console
from cyoa.tools.wiki.config import STRUCTURE

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
        }).json()

        if res['login']['result'] != 'Success':
            console.log(res)

    def _query_raw(self, **kwargs):
        query_res = self.session.get(URL_BASE, params={
            "action": "query", "format": "json",
            **kwargs
        })

        return query_res.json()

    def query_prefix(self, prefix: str, **kwargs):
        can_continue = True
        do_continue = None
        while can_continue:
            query_res = self._query_raw(
                list="allpages",
                apprefix=prefix,
                apcontinue=do_continue,
                **kwargs
            )

            if 'query' in query_res:
                yield from query_res['query']['allpages']
            if 'continue' in query_res:
                do_continue = query_res['continue']['apcontinue']
            else:
                can_continue = False

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


def get_last_revision(wiki_page):
    return wiki_page['revisions'][0]['slots']['main']['*']


def maker_marker(marker_start, marker_end):
    def mark(text):
        return f"{marker_start}\n{text}\n{marker_end}"

    return mark


def splice_text(wiki_page, page_text, marker):
    marker_start = f'<!-- {marker} -->'
    marker_end = f'<!-- /{marker} -->'
    mark = maker_marker(marker_start, marker_end)

    if not wiki_page:
        return mark(page_text)

    wiki_text = get_last_revision(wiki_page)
    section_start = wiki_text.find(marker_start)
    section_end = wiki_text.find(marker_end)

    if section_start < 0 or section_end < 0 or section_end < section_start:
        # Squash page contents for now
        return f"{mark(page_text)}"
    elif section_start == 0:
        # Splice from the start
        return f"{mark(page_text)}{wiki_text[section_end + len(marker_end):]}"
    else:
        return f"{wiki_text[:section_start]}{mark(page_text)}{wiki_text[section_end + len(marker_end):]}"


def check_title(title: str):
    return (
        title
        .replace('/', '\uFF0F')
        .replace('[', '')
        .replace(']', '')
    )


def get_depth(path: str):
    return len(path.split('/'))


def get_index_order(title: str, structure):
    ORDER_LENS = lens.Get(title, {}).Get('index', {}).Get('order', -1).get()
    return ORDER_LENS(structure)


def last_title_part(title: str):
    slash_idx = title.rfind('/')
    if slash_idx >= 0:
        return title[slash_idx + 1:]
    else:
        return title


class ProjectFormatTool(ToolBase, ProjectUtilsMixin):
    name = 'wiki.update'

    api: WikiAPI
    env: jinja2.Environment
    rows: dict[str, Any]
    objects: dict[str, Any]
    scores: dict[str, Any]

    @classmethod
    def setup_parser(cls, parent):
        parser = parent.add_parser(cls.name, help='Format a project file')
        parser.add_argument('--project', dest='project_file', type=Path)
        parser.add_argument('--preview', action='store_true')
        parser.add_argument('--filter-path', default='*')
        parser.add_argument('--filter-type', default='section,index')
        parser.add_argument('--bot-username')
        parser.add_argument('--bot-password')

    def setup(self, args):
        self.api = WikiAPI()
        self.api.login(
            args.bot_username,
            args.bot_password
        )

        tpl_path = os.path.join(os.path.dirname(__file__), 'wiki')
        self.env = jinja2.Environment(
            loader=jinja2.FileSystemLoader(tpl_path)
        )

        self.rows = {
            row['id']: row
            for row in self.project['rows']
        }

        self.objects = {
            obj['id']: obj
            for row in self.rows.values()
            for obj in row['objects']
        }

        self.scores = {
            score['id']: score
            for score in self.project['pointTypes']
        }

        self.env.filters['last_title_part'] = last_title_part
        self.env.globals = {
            "rows": self.rows,
            "objects": self.objects,
            "scores": self.scores,
        }

    def run(self, args):
        self._load_project(args.project_file)
        self.setup(args)

        css_file_path = os.path.join(os.path.dirname(__file__), "wiki/custom.css")
        with open(css_file_path, mode='r') as css_file:
            self.api.edit(title="MediaWiki:Common.css",
                          text=css_file.read())

            console.print('Updated: CSS')

        sorted_elements = sorted(
            STRUCTURE.items(),
            key=lambda tup: (
                -1 if tup[1]['mode'] != 'index' else 1,
                tup[0]
            )
        )

        for path, config in sorted_elements:
            if not fnmatch(path, args.filter_path):
                continue
            if config['mode'] not in args.filter_type:
                continue

            match config['mode']:
                case 'section':
                    self.build_section(path, config, args)
                case 'index':
                    self.build_index(path, config, args)

    def build_index(self, path, config, args):
        console.print(f'index: {path} ({config!r})')
        cur_depth = get_depth(path)
        search_depth = config['index']['depth']
        wiki_pages = filter(
            lambda item: (item['title'] != path and (get_depth(item['title']) - cur_depth) <= search_depth),
            self.api.query_prefix(path),
        )
        wiki_pages = sorted(
            wiki_pages,
            key=lambda item: (
                get_index_order(item['title'], STRUCTURE),
                item['title']
            )
        )

        index_tpl = self.env.get_template('index.tpl')
        index_text = index_tpl.render(
            pages=wiki_pages,
            config=config
        )
        if args.preview:
            console.print(index_text)
        else:
            self.api.edit(title=path, text=index_text)
            console.print(f'updated: {path}')

    def build_section(self, path, config, args):
        print(f'section: {path} ({config!r})')
        wiki_pages: list = list(self.api.query_prefix(path))
        if len(wiki_pages) > 0:
            wiki_pages: dict = self.api.query_content(pageids=str.join('|', [
                f"{wiki_page['pageid']}"
                for wiki_page in wiki_pages
            ]))
            wiki_pages: dict = {
                wiki_page['title']: wiki_page
                for wiki_page in wiki_pages.values()
            }
        else:
            wiki_pages: dict = {}

        page_rows = []
        for row_id in config['row_ids']:
            row_data = self.rows[row_id]
            row_pages = []
            for obj_data in row_data['objects']:
                page_title = check_title(obj_data['title'])
                page_name = f"{path}/{page_title}"
                wiki_page = wiki_pages.get(page_name, None)

                page_tpl = self.env.get_template('object.tpl')
                page_text = page_tpl.render(
                    page_name=page_name,
                    row=row_data,
                    obj=obj_data
                )
                page_text = splice_text(
                    wiki_page,
                    page_text,
                    marker=f'SYNC:{obj_data["id"]}'
                )

                if args.preview:
                    console.print(page_text)
                else:
                    self.api.edit(title=page_name,
                                  text=page_text)

                console.print(f'updated: {page_name}')

                row_pages.append({
                    "name": page_name,
                    "obj": row_data,
                })

            page_rows.append({
                "row": row_data,
                "objects": row_pages
            })

        # Update the index
        index_tpl = self.env.get_template('section.tpl')
        index_text = index_tpl.render(
            page_rows=page_rows,
            config=config
        )

        if args.preview:
            console.print(index_text)
        else:
            self.api.edit(title=path, text=index_text)
        console.print(f'updated: {path}')


TOOLS = (
    ProjectFormatTool,
)
