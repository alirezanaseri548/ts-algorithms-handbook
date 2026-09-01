import { partition } from './partition.js';

/**
 * Returns the value that would appear at zero-based index k
 * in a sorted version of the input array.
 *
 * This algorithm mutates the input array.
 */
export function quickSelect(
  values: number[],
  k: number,
  low = 0,
  high = values.length - 1,
): number {
  if (!Number.isInteger(k)) {
    throw new TypeError('k must be an integer.');
  }

  if (!Number.isInteger(low) || !Number.isInteger(high)) {
    throw new TypeError('Search bounds must be integers.');
  }

  if (values.length === 0) {
    throw new RangeError('Cannot select from an empty array.');
  }

  if (low < 0 || high >= values.length || low > high) {
    throw new RangeError('The search bounds are invalid.');
  }

  if (k < low || k > high) {
    throw new RangeError('k must be within the search bounds.');
  }

  let left = low;
  let right = high;

  while (left <= right) {
    const pivotIndex = partition(values, left, right);

    if (pivotIndex === k) {
      return values[pivotIndex];
    }

    if (k < pivotIndex) {
      right = pivotIndex - 1;
    } else {
      left = pivotIndex + 1;
    }
  }

  throw new Error('Quickselect could not locate the requested index.');
}
