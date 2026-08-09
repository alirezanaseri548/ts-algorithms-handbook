# Step 27: Recursive Quicksort

Quicksort recursively applies partitioning:

1. Partition the current range.
2. Recursively sort the range before the pivot.
3. Recursively sort the range after the pivot.
4. Stop when a range contains zero or one element.

The public `quickSort` function returns a sorted copy and does not mutate
the caller's array.
