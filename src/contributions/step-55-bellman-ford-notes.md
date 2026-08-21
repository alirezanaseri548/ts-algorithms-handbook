# Step 55 — Bellman-Ford

Bellman-Ford computes single-source shortest paths in a weighted directed graph.

- Time complexity: `O(VE)`
- Supports negative edge weights.
- Detects reachable negative-weight cycles.
- Uses repeated edge relaxation for at most `V - 1` rounds.
