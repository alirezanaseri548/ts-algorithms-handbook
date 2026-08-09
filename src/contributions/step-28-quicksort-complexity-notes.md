# Step 28: Quicksort Complexity

Let `n` be the number of values being sorted.

Partitioning takes `O(n)` time.

Average case:

- The pivot divides the array into reasonably balanced sections.
- The recursion depth is approximately `log n`.
- Total time complexity is `O(n log n)`.

Worst case:

- The pivot is repeatedly the smallest or largest value.
- One partition contains almost all values.
- Recursion depth becomes `n`.
- Total time complexity becomes `O(n^2)`.

The implementation returns a copy, so it uses `O(n)` additional array space.
The recursive call stack uses average `O(log n)` space and worst-case
`O(n)` space.
