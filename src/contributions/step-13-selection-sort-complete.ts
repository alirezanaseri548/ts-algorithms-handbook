/**
 * Step 13: Complete Selection Sort
 *
 * Goal:
 * Finalize Selection Sort by adding swap logic.
 *
 * Time Complexity:
 * - Best Case: O(n^2)
 * - Average Case: O(n^2)
 * - Worst Case: O(n^2)
 *
 * Space Complexity:
 * - O(n) because we copy the input array.
 */

export function selectionSort(items: number[]): number[] {
  const result = [...items];

  for (let currentIndex = 0; currentIndex < result.length; currentIndex++) {
    let minimumIndex = currentIndex;

    for (
      let scanIndex = currentIndex + 1;
      scanIndex < result.length;
      scanIndex++
    ) {
      if (result[scanIndex]! < result[minimumIndex]!) {
        minimumIndex = scanIndex;
      }
    }

    if (minimumIndex !== currentIndex) {
      const temporaryValue = result[currentIndex]!;
      result[currentIndex] = result[minimumIndex]!;
      result[minimumIndex] = temporaryValue;
    }
  }

  return result;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(selectionSort([1, 2, 3, 4, 5]));