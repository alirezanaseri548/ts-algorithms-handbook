# Step 18: Insertion Sort Complexity Analysis

## Algorithm

Insertion Sort builds the sorted array one item at a time.

It starts from the second item and compares it with the items before it. If previous items are larger, they are shifted to the right. Then the current value is inserted into its correct position.

## Time Complexity

### Best Case: O(n)

The best case happens when the array is already sorted.

In this case, the inner while loop does not shift items. The algorithm only checks each item once.

Example:

txt
[1, 2, 3, 4, 5]

### Average Case: O(n^2)

In a random array, some items need to move backward through several previous elements.

### Worst Case: O(n^2)

The worst case happens when the array is sorted in reverse order.

Example:

txt
[5, 4, 3, 2, 1]

Every new item must be shifted all the way to the beginning.

## Space Complexity

### O(n)

In this project implementation, the original array is copied first:

ts
const result = [...items];

Therefore, the space complexity is O(n).

If we modified the original array directly, it could be O(1).

## Key Insight

Insertion Sort is simple and efficient for small or nearly sorted arrays.  
It is usually better than Bubble Sort and Selection Sort when the data is almost sorted.
