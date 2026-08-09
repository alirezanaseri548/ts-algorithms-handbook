# Step 30: Tabulation

Tabulation is a bottom-up Dynamic Programming technique.

Instead of starting with the requested problem and recursing downward,
we solve the smallest subproblems first and store their results in a
table.

For Fibonacci:

- Time complexity: `O(n)`.
- Space complexity in this implementation: `O(n)`.
- No recursive call stack is required.

Memoization and tabulation both avoid repeated work. Memoization follows
the recursive structure, while tabulation explicitly builds the result
from the base cases upward.
