export function insertAt<T>(items: T[], index: number, value: T): T[] {
  const result = [...items];

  for (let current = result.length; current > index; current--) {
    result[current] = result[current - 1];
  }

  result[index] = value;
  return result;
}
