/**
 * Step 16: Insertion Sort Shifting Mechanics
 *
 * Goal:
 * Implement the core shifting logic of Insertion Sort.
 *
 * Important:
 * Because noUncheckedIndexedAccess is enabled,
 * non-null assertions are used where loop boundaries guarantee safety.
 */

export function insertionSortShift(items: number[]): number[] {
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

console.log(insertionSortShift([5, 2, 4, 6, 1, 3]));
