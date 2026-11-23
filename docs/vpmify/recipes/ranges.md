---
sidebar_position: 2
---

# Version ranges

<AiGeneratedBadge />

To write a range of versions in a Vpmify recipe, write it as follows.

- Exact: `1.2.3` or `=1.2.3`
- Comparison: write it like `>=1.2.3`, `>1.2.3`, `<=1.2.3` or `<1.2.3`.
- AND: put them side by side with spaces. Example: `>=0.59.0 <0.63.1`
- OR: join them with `||`. Example: `>=0.33.0 <0.39.0 || >=0.41.0 <0.45.0`
- Always write a version in full, as X.Y.Z. `1.2`, `^1.2.3` and `~1.2.3` cannot be written.
