export function step03InsertAt<T>(items: T[], index: number, value: T): T[] {
  const result = [...items];
  result.splice(index, 0, value);
  return result;
}