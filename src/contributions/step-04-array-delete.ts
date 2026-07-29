export function step04DeleteAt<T>(items: T[], index: number): T[] {
  const result = [...items];
  result.splice(index, 1);
  return result;
}
