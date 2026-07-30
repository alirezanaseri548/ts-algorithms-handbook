export function insertionSortShift(array: number[]): number[] {
  for (let i = 1; i < array.length; i++) {
    const tempValue = array[i]!;
    let position = i;

    while (position > 0 && array[position - 1]! > tempValue) {
      array[position] = array[position - 1]!;
      position--;
    }
  }

  return array;
}
