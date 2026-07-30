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
