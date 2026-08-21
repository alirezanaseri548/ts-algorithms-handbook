# Step 58 — Disjoint Set Union

Disjoint Set Union maintains a partition of independent sets.

- `find` uses path compression.
- `union` uses union by rank.
- `connected` checks whether two members belong to the same set.
- Amortized complexity is nearly constant: `O(α(V))`.
