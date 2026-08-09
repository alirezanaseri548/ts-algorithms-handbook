import { partition } from "./partition.js";

function quickSortInPlace(
  values: number[],
  low: number,
  high: number,
): void {
  if (low >= high) {
    return;
  }

  const pivotIndex = partition(values, low, high);

  quickSortInPlace(values, low, pivotIndex - 1);
  quickSortInPlace(values, pivotIndex + 1, high);
}

export function quickSort(values: number[]): number[] {
  const result = [...values];

  if (result.length > 1) {
    quickSortInPlace(result, 0, result.length - 1);
  }

  return result;
}
