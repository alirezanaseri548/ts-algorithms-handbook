# Big O Growth Notes

## Why powers matter

As the power of `N` increases, runtime grows much faster.

- `O(N^2)`
- `O(N^3)`
- `O(N^4)`
- `O(N^5)`

For small inputs, the difference may look manageable.
For large inputs, dropping from `O(N^3)` to `O(N^2)` is a major optimization.

## Practical takeaway

When reading or writing nested loops, count how many loops depend on `N`.
Each additional nested loop usually adds one power of `N`.