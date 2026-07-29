export function step06InsertOrdered(items: number[], value: number): number[] {
  const result = [...items, value];
  return result.sort((a, b) => a - b);
}
