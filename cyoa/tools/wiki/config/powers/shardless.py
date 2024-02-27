from cyoa.tools.wiki.config.defaults import DEFAULT_SECTION

SHARDLESS_ROWS = [
    ("Physical Powers", "p2ty"),
    ("Mental and Psychic Powers", "d4pp"),
    ("Magic and Mystic Powers", "tg45"),
    ("Spiritual and Divine Powers", "1ok7"),
    ("Technology and Artifice Powers", "y3gb"),
    ("Esoteric and Abstract Powers", "3pua"),
    ("Ascension Path", "mbxo"),
    ("Foundation Powers", "xk24"),
    ("Keystone Powers", "umg9"),
    ("Paragon Powers", "t6in"),
    ("Objects of Power", "rbdo"),
    ("Base Power Upgrades", "a0dv"),
    ("Physical Power Upgrades", "fqrt"),
    ("Mental and Psychic Power Upgrades", "8lqj"),
    ("Magic and Mystic Power Upgrades", "arnl"),
    ("Spiritual and Divine Power Upgrades", "0ye0"),
    ("Technology and Artifice Power Upgrades", "rw0w"),
    ("Esoteric and Abstract Power Upgrades", "ufcz"),
    ("Eternal Mangekyō Sharingan Abilities", "pmie"),
    ("Destiny Upgrades", "0d43"),
    ("Ascension Upgrades", "c369"),
    ("Ascension Fusions", "a3ql"),
    ("Foundation Upgrades", "dj3w"),
    ("Paragon Upgrades", "jzns"),
    ("Object of Power Upgrades", "s92s"),
]
SHARDLESS_POWERS = {
    f'Project V17/Powers/Shardless/{name}': {
        "mode": "section",
        "section": DEFAULT_SECTION,
        "index": {"order": idx + 1},
        "row_ids": [row_id]
    }
    for idx, (name, row_id) in enumerate(SHARDLESS_ROWS)
}

SHARDLESS_POWER_STRUCTURE = {
    'Project V17/Powers/Shardless': {
        "mode": "index",
        "index": {"depth": 2, "order": 1},
    },
    **SHARDLESS_POWERS
}
