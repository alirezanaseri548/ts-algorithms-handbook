export function deleteAt<T>(items: T[], index: number): T[] {
  if (index < 0 || index >= items.length) {
    return [...items];
  }

  const result = [...items];

  for (let current = index; current < result.length - 1; current++) {
    result[current] = result[current + 1]!;
  }

  result.length = result.length - 1;

  return result;
}