export function bubbleSort(items: number[]): number[] {
  const result = [...items];

  let sorted = false;
  let unsortedUntilIndex = result.length - 1;

  while (!sorted && unsortedUntilIndex > 0) {
    sorted = true;

    for (let index = 0; index < unsortedUntilIndex; index++) {
      const current = result[index]!;
      const next = result[index + 1]!;

      if (current > next) {
        result[index] = next;
        result[index + 1] = current;
        sorted = false;
      }
    }

    unsortedUntilIndex--;
  }

  return result;
}
