# Step 54: Advanced Algorithms Summary

Steps 49 through 54 extend the handbook with sorting, prefix search,
weighted graphs, and shortest-path algorithms.

## Step 49: Heap Sort

Heap sort builds a max heap and repeatedly moves the largest element to
the end of the array.

- Time complexity: O(n log n)
- Auxiliary sorting space: O(1)
- Stable: No

## Steps 50 and 51: Trie

A trie stores strings character by character.

Supported operations:

- Insert a word
- Search for a complete word
- Check whether a prefix exists
- Generate autocomplete suggestions

For a word or prefix of length `L`, insertion and lookup take O(L).

## Step 52: Weighted Graph

The weighted graph uses an adjacency-list representation. Each edge
contains a destination vertex and a non-negative weight.

## Step 53: Dijkstra's Algorithm

Dijkstra's algorithm computes shortest distances from one source vertex
to all reachable vertices in a graph with non-negative edge weights.

The implementation also stores predecessor vertices so that a shortest
path can be reconstructed.

## Important limitation

Dijkstra's algorithm must not be used with negative edge weights.
The `WeightedGraph` implementation rejects negative weights to preserve
this requirement.
