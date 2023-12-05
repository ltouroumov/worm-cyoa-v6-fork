from cyoa.tools.wiki.config import DEFAULT_SECTION

POWERS_STRUCTURE = {
    'Project V17/Powers/Origin': {
        "mode": "section",
        "section": {**DEFAULT_SECTION,
                    "group_by_row": True},
        "index": {"order": 1},
        "row_ids": ["6ouk", "6gqo", "2y41",
                    "h7rz", "9phk", "gmox",
                    "zk33", "114m", "fde2",
                    "hwg0"]
    },
    'Project V17/Powers/Shard': {
        "mode": "index",
        "index": {"depth": 2, "order": 1},
    },
    'Project V17/Powers/Shard/Tier 1': {
        "mode": "index",
        "index": {"depth": 1, "order": 1},
    },
    'Project V17/Powers/Shard/Tier 1/Mover': {
        "mode": "section",
        "section": DEFAULT_SECTION,
        "index": {"order": 1},
        "row_ids": ["tc7n"]
    },
    'Project V17/Powers/Shard/Tier 1/Shaker': {
        "mode": "section",
        "section": DEFAULT_SECTION,
        "index": {"order": 2},
        "row_ids": ["wtn7"]
    },
    'Project V17/Powers/Shard/Tier 1/Brute': {
        "mode": "section",
        "section": DEFAULT_SECTION,
        "index": {"order": 3},
        "row_ids": ["vs8q"]
    },
}
