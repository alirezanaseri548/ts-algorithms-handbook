/**
 * Sorts numbers in ascending order using an in-place max heap.
 *
 * Time complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 *
 * Auxiliary space: O(1), excluding the returned copy.
 */
export function heapSort(values: readonly number[]): number[] {
  const result = [...values];

  const swap = (firstIndex: number, secondIndex: number): void => {
    const temporary = result[firstIndex]!;
    result[firstIndex] = result[secondIndex]!;
    result[secondIndex] = temporary;
  };

  const siftDown = (heapSize: number, rootIndex: number): void => {
    let currentIndex = rootIndex;

    while (true) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = leftChildIndex + 1;
      let largestIndex = currentIndex;

      if (
        leftChildIndex < heapSize &&
        result[leftChildIndex]! > result[largestIndex]!
      ) {
        largestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < heapSize &&
        result[rightChildIndex]! > result[largestIndex]!
      ) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex === currentIndex) {
        return;
      }

      swap(currentIndex, largestIndex);
      currentIndex = largestIndex;
    }
  };

  for (
    let index = Math.floor(result.length / 2) - 1;
    index >= 0;
    index -= 1
  ) {
    siftDown(result.length, index);
  }

  for (let endIndex = result.length - 1; endIndex > 0; endIndex -= 1) {
    swap(0, endIndex);
    siftDown(endIndex, 0);
  }

  return result;
}
