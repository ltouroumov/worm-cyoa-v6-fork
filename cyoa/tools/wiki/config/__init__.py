from cyoa.tools.wiki.config.defaults import DEFAULT_SECTION
from cyoa.tools.wiki.config.character import CHARACTER_STRUCTURE

STRUCTURE = {
    'Project V17': {
        "mode": "index",
        "index": {"depth": 1},
    },
    'Project V17/Meta': {
        "mode": "section",
        "section": {**DEFAULT_SECTION, "group_by_row": True},
        "index": {"order": 1},
        "row_ids": ["91nq", "m08s", "p9a8"],
    },
    'Project V17/Difficulty': {
        "mode": "section",
        "section": {**DEFAULT_SECTION, "group_by_row": True},
        "index": {"order": 2},
        "row_ids": ["yk8d", "81zz"],
    },
    'Project V17/Scenario': {
        "mode": "section",
        "section": DEFAULT_SECTION,
        "index": {"order": 3},
        "row_ids": ["lht3"]
    },
    'Project V17/Character': {
        "mode": "index",
        "index": {"depth": 1, "order": 4},
    },
    **CHARACTER_STRUCTURE,
    'Project V17/Perks': {
        "mode": "section",
        "section": DEFAULT_SECTION,
        "index": {"order": 4},
        "row_ids": ["gra1"]
    },
    'Project V17/Drawbacks': {
        "mode": "section",
        "section": {
            **DEFAULT_SECTION,
            "group_by_row": True,
            "skip_row_title": ["pc8m"]
        },
        "index": {"order": 5},
        "row_ids": ["pc8m", "5icl", "47ds", "xzwv", "h2ju", "qvf1", "gnua", "at5y"]
    },
}
