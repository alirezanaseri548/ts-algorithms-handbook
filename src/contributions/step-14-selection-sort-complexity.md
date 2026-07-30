# Step 14: Selection Sort Complexity Analysis

## Algorithm

Selection Sort divides the array into two parts:

1. Sorted part
2. Unsorted part

At each step, it scans the unsorted part, finds the minimum value, and swaps it with the first item of the unsorted section.

## Time Complexity

### Best Case: O(n^2)

Even if the array is already sorted, Selection Sort still scans the remaining unsorted part to find the minimum value.

### Average Case: O(n^2)

For each item, the algorithm searches the rest of the array.

### Worst Case: O(n^2)

Even in reverse order, the same number of comparisons happens.

## Space Complexity

### O(n)

In this project implementation, the input array is copied first:
```ts
const result = [...items];

So the algorithm uses extra memory proportional to the input size.

If we sorted the original array directly, the space complexity could be O(1).

## Key Insight

Selection Sort is easy to understand, but it is inefficient for large arrays because it always performs nested-loop scanning.
