/**
 * Step 17: Complete Insertion Sort
 *
 * Goal:
 * Complete the final implementation of Insertion Sort.
 *
 * Time Complexity:
 * - Best Case: O(n)
 * - Average Case: O(n^2)
 * - Worst Case: O(n^2)
 *
 * Space Complexity:
 * - O(n) because we copy the input array.
 */

export function insertionSort(items: number[]): number[] {
  const result = [...items];

  for (let currentIndex = 1; currentIndex < result.length; currentIndex++) {
const currentValue = result[currentIndex]!;
let previousIndex = currentIndex - 1;

while (
previousIndex >= 0 &&
result[previousIndex]! > currentValue
) {
result[previousIndex + 1] = result[previousIndex]!;
previousIndex--;
}

result[previousIndex + 1] = currentValue;
  }

  return result;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));
console.log(insertionSort([1, 2, 3, 4, 5]));
console.log(insertionSort([5, 4, 3, 2, 1]));