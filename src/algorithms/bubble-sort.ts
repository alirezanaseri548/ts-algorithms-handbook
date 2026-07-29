export function bubbleSort(items: number[]): number[] {
  const result = [...items];
  let unsortedUntilIndex = result.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let index = 0; index < unsortedUntilIndex; index++) {
      if (result[index] > result[index + 1]) {
        const temp = result[index];
        result[index] = result[index + 1];
        result[index + 1] = temp;
        sorted = false;
      }
    }

    unsortedUntilIndex--;
  }

  return result;
}
