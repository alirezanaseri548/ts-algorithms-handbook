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