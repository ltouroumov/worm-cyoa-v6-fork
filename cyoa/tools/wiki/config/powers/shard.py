from cyoa.tools.wiki.config.defaults import DEFAULT_SECTION, DEFAULT_SECTION_BY_ROW

TIER1_ROWS = [
  ("Mover", "tc7n"),
  ("Shaker", "wtn7"),
  ("Brute", "vs8q"),
  ("Master", "ghw4"),
  ("Tinker", "nwgn"),
  ("Blaster", "z0zb"),
  ("Thinker", "4x5f"),
  ("Striker", "xu5q"),
  ("Changer", "b7r5"),
  ("Trump", "bbyi"),
  ("Stranger", "hyzg"),
]

TIER1_POWERS = {
  f"Project V17/Powers/Shard/Tier 1/{name}": {
    "mode": "section",
    "section": DEFAULT_SECTION,
    "index": {"order": idx + 1},
    "row_ids": [row_id],
  }
  for idx, (name, row_id) in enumerate(TIER1_ROWS)
}

SHARD_POWERS_STRUCTURE = {
  "Project V17/Powers/Shard": {
    "mode": "index",
    "index": {"depth": 2, "order": 1},
  },
  "Project V17/Powers/Shard/Tier 1": {
    "mode": "index",
    "index": {"depth": 1, "order": 1},
  },
  **TIER1_POWERS,
  "Project V17/Powers/Shard/Power Copy": {
    "mode": "section",
    "section": DEFAULT_SECTION,
    "index": {"order": 2},
    "row_ids": ["jsch"],
  },
  "Project V17/Powers/Shard/Lucky Mutations": {
    "mode": "section",
    "section": DEFAULT_SECTION,
    "index": {"order": 3},
    "row_ids": ["zj4c"],
  },
  "Project V17/Powers/Shard/Tier 2": {
    "mode": "section",
    "section": DEFAULT_SECTION,
    "index": {"order": 4},
    "row_ids": ["zg2f"],
  },
  "Project V17/Powers/Shard/Tier 3": {
    "mode": "section",
    "section": DEFAULT_SECTION,
    "index": {"order": 5},
    "row_ids": ["e018"],
  },
  "Project V17/Powers/Shard/Doll": {
    "mode": "section",
    "section": DEFAULT_SECTION_BY_ROW,
    "index": {"order": 6},
    "row_ids": ["wy6p", "xe94"],
  },
  "Project V17/Powers/Shard/Endbringer (Master)": {
    "mode": "section",
    "section": DEFAULT_SECTION_BY_ROW,
    "index": {"order": 7},
    "row_ids": ["o58j", "qd5r"],
  },
  "Project V17/Powers/Shard/Endbringer (Changer)": {
    "mode": "section",
    "section": DEFAULT_SECTION_BY_ROW,
    "index": {"order": 7},
    "row_ids": ["jmco", "ab0a"],
  },
  "Project V17/Powers/Shard/Upgrades": {
    "mode": "section",
    "section": DEFAULT_SECTION,
    "index": {"order": 8},
    "row_ids": ["hd9l"],
  },
  "Project V17/Powers/Shard/Fusions": {
    "mode": "section",
    "section": DEFAULT_SECTION,
    "index": {"order": 9},
    "row_ids": ["qldk"],
  },
}
