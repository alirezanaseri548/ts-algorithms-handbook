export function partition(
  values: number[],
  low: number,
  high: number,
): number {
  const pivot = values[high];

  if (pivot === undefined) {
    throw new Error("Partition range is invalid.");
  }

  let smallerIndex = low;

  for (let currentIndex = low; currentIndex < high; currentIndex++) {
    const currentValue = values[currentIndex];

    if (currentValue === undefined) {
      throw new Error("Partition range contains an invalid index.");
    }

    if (currentValue < pivot) {
      const smallerValue = values[smallerIndex];

      if (smallerValue === undefined) {
        throw new Error("Partition range contains an invalid index.");
      }

      values[smallerIndex] = currentValue;
      values[currentIndex] = smallerValue;
      smallerIndex++;
    }
  }

  const smallerValue = values[smallerIndex];

  if (smallerValue === undefined) {
    throw new Error("Partition range contains an invalid index.");
  }

  values[smallerIndex] = pivot;
  values[high] = smallerValue;

  return smallerIndex;
}
