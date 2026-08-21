# Step 59 — Kruskal's Algorithm

Kruskal's algorithm finds a Minimum Spanning Tree for a weighted undirected graph.

- Time complexity: `O(E log E)`
- Sorts edges by weight.
- Uses Disjoint Set Union to avoid cycles.
- For disconnected graphs, it returns a minimum spanning forest.
