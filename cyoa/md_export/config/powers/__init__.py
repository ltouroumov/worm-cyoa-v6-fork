from cyoa.md_export.config.defaults import DEFAULT_SECTION_BY_ROW
from cyoa.md_export.config.powers.shard import SHARD_POWERS_STRUCTURE
from cyoa.md_export.config.powers.shardless import SHARDLESS_POWER_STRUCTURE

POWERS_STRUCTURE = {
  "Project V17/Powers/Origin": {
    "mode": "section",
    "section": DEFAULT_SECTION_BY_ROW,
    "index": {"order": 1},
    "row_ids": [
      "6ouk",
      "6gqo",
      "2y41",
      "h7rz",
      "9phk",
      "gmox",
      "zk33",
      "114m",
      "fde2",
      "hwg0",
    ],
  },
  **SHARD_POWERS_STRUCTURE,
  **SHARDLESS_POWER_STRUCTURE,
}
