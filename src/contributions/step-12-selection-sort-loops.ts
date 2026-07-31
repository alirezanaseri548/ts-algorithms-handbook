/**
 * Step 12: Selection Sort Nested Loop Scan
 *
 * Goal:
 * Implement the nested loops and minimum index scanning logic.
 *
 * In this step, we only identify the minimum item index
 * inside the unsorted part of the array.
 */

export function selectionSortLoops(items: number[]): number[] {
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
  }

  return result;
}

console.log(selectionSortLoops([64, 25, 12, 22, 11]));