export function partition(
  values: number[],
  low: number,
  high: number,
): number {
  const pivot = values[high];

  if (pivot === undefined) {
    throw new RangeError("high must point to an existing array element");
  }

  let smallerIndex = low;

  for (let currentIndex = low; currentIndex < high; currentIndex += 1) {
    const currentValue = values[currentIndex];

    if (currentValue === undefined) {
      throw new RangeError("Invalid partition boundaries");
    }

    if (currentValue < pivot) {
      [values[smallerIndex], values[currentIndex]] = [
        values[currentIndex],
        values[smallerIndex],
      ];

      smallerIndex += 1;
    }
  }

  [values[smallerIndex], values[high]] = [
    values[high],
    values[smallerIndex],
  ];

  return smallerIndex;
}
