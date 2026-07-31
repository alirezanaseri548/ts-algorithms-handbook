export function insertOrdered(items: number[], value: number): number[] {
  const result = [...items];
  let targetIndex = 0;

  while (targetIndex < result.length && result[targetIndex]! < value) {
    targetIndex++;
  }

  for (let current = result.length; current > targetIndex; current--) {
    result[current] = result[current - 1]!;
  }

  result[targetIndex] = value;
  return result;
}
