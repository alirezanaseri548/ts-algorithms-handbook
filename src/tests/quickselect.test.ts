import { quickSelect } from '../algorithms/quickselect.js';

function assertEqual(actual: number, expected: number, message: string): void {
  if (actual !== expected) {
    throw new Error(`${message}. Expected ${expected}, received ${actual}.`);
  }
}

function assertThrows(callback: () => void, message: string): void {
  try {
    callback();
  } catch {
    return;
  }

  throw new Error(`${message}. Expected an error.`);
}

const cases = [
  { values: [7, 1, 4, 9, 2], k: 0, expected: 1 },
  { values: [7, 1, 4, 9, 2], k: 2, expected: 4 },
  { values: [7, 1, 4, 9, 2], k: 4, expected: 9 },
  { values: [5, 5, 1, 5, 3], k: 2, expected: 5 },
  { values: [-3, 8, 0, -1, 4], k: 1, expected: -1 },
  { values: [42], k: 0, expected: 42 },
];

for (const testCase of cases) {
  const result = quickSelect([...testCase.values], testCase.k);

  assertEqual(
    result,
    testCase.expected,
    `Quickselect failed for index ${testCase.k}`,
  );
}

assertThrows(() => quickSelect([], 0), 'Empty arrays must be rejected');
assertThrows(() => quickSelect([1, 2, 3], -1), 'Negative indexes must be rejected');
assertThrows(() => quickSelect([1, 2, 3], 3), 'Out-of-range indexes must be rejected');
assertThrows(() => quickSelect([1, 2, 3], 1.5), 'Non-integer indexes must be rejected');

console.log('Quickselect tests passed.');
