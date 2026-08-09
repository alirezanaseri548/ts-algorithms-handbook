# Step 26: Partitioning

Partitioning rearranges a section of an array around a pivot.

After partitioning:

- Values smaller than the pivot are placed before it.
- The pivot is placed in its final sorted position.
- Values greater than or equal to the pivot are placed after it.

The function in `src/algorithms/partition.ts` performs the operation
in place and returns the final pivot index.

Partitioning takes `O(n)` time for a section containing `n` values.
