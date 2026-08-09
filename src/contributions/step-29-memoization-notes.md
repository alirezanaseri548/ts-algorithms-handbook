# Step 29: Memoization

Memoization is a top-down Dynamic Programming technique.

The recursive solution is improved by storing the result of every
subproblem. When the same subproblem appears again, its cached result
is returned instead of recalculating it.

For Fibonacci:

- Naive recursion: `O(2^n)` time.
- Memoization: `O(n)` time.
- Memoization space: `O(n)`.

The cache must belong to one function call so separate calls do not
share stale state.
