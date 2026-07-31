# Big O Growth Notes

- **O(1)**: Constant time. The number of operations does not depend on the input size.
- **O(log N)**: Logarithmic time. Operations reduce the input size by a constant factor in each step (e.g., binary search).
- **O(N)**: Linear time. Operations grow proportionally with the input size (e.g., simple loop).
- **O(N log N)**: Linearithmic time. Common in efficient sorting algorithms (e.g., merge sort, quicksort).
- **O(N^2)**: Quadratic time. Operations grow proportionally to the square of the input size (e.g., nested loops).
- **O(2^N)**: Exponential time. Very slow, often indicative of brute-force solutions for NP-hard problems.
- **O(N!)**: Factorial time. Extremely slow, typically for problems involving permutations.

**Comparison of Growth Rates:**
O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N) < O(N!)