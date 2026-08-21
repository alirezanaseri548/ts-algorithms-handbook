# Step 57 — Topological Sort

Kahn's algorithm produces a topological ordering for a directed acyclic graph.

- Time complexity: `O(V + E)`
- Uses indegree counting and a queue.
- A cycle is detected when not all vertices are processed.
