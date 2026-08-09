export function quickSort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return [...numbers];
  }

  const pivot = numbers[numbers.length - 1];
  if (pivot === undefined) {
    return [];
  }

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    const value = numbers[i];
    if (value === undefined) {
      continue;
    }

    if (value < pivot) {
      left.push(value);
    } else {
      right.push(value);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
