# Step 24: Recursion

Recursion is a technique in which a function calls itself with a smaller
or simpler input.

Every correct recursive function needs:

1. A base case that stops the recursion.
2. A recursive case that moves the input toward the base case.

The factorial function is defined as:

- `0! = 1`
- `n! = n * (n - 1)!`

The recursive implementation has linear time complexity, `O(n)`, and
linear call-stack space complexity, `O(n)`.

The condition `n === 0` is the base case. Without it, the function would
continue calling itself indefinitely.
