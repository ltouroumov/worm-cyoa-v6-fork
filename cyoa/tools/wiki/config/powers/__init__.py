from cyoa.tools.wiki.config.defaults import DEFAULT_SECTION, DEFAULT_SECTION_BY_ROW
from cyoa.tools.wiki.config.powers.shard import SHARD_POWERS_STRUCTURE
from cyoa.tools.wiki.config.powers.shardless import SHARDLESS_POWER_STRUCTURE

TIER1_ROWS = [
    ('Mover', "tc7n"),
    ('Shaker', "wtn7"),
    ('Brute', "vs8q"),
    ('Master', "ghw4"),
    ('Tinker', "nwgn"),
    ('Blaster', "z0zb"),
    ('Thinker', "4x5f"),
    ('Striker', "xu5q"),
    ('Changer', "b7r5"),
    ('Trump', "bbyi"),
    ('Stranger', "hyzg"),
]

TIER1_POWERS = {
    f'Project V17/Powers/Shard/Tier 1/{name}': {
        "mode": "section",
        "section": DEFAULT_SECTION,
        "index": {"order": idx + 1},
        "row_ids": [row_id]
    }
    for idx, (name, row_id) in enumerate(TIER1_ROWS)
}

POWERS_STRUCTURE = {
    'Project V17/Powers/Origin': {
        "mode": "section",
        "section": DEFAULT_SECTION_BY_ROW,
        "index": {"order": 1},
        "row_ids": ["6ouk", "6gqo", "2y41",
                    "h7rz", "9phk", "gmox",
                    "zk33", "114m", "fde2",
                    "hwg0"]
    },
    **SHARD_POWERS_STRUCTURE,
    **SHARDLESS_POWER_STRUCTURE,
}
