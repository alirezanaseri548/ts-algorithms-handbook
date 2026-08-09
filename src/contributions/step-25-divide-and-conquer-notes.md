# Step 25: Divide and Conquer

Divide and Conquer solves a problem by:

1. Dividing the original problem into smaller subproblems.
2. Solving each subproblem, usually recursively.
3. Combining the subproblem results.

Quicksort uses this pattern:

- Select a pivot.
- Divide the array around the pivot.
- Recursively sort the left and right partitions.

The quality of the division is important. Balanced partitions usually
produce `O(n log n)` time complexity. Highly unbalanced partitions can
produce `O(n^2)` time complexity.

This step prepares the recursion structure used by the following
partitioning and Quicksort steps.
