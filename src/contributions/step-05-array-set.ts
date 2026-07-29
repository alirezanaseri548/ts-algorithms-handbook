export function step05UniqueInsert<T>(items: T[], value: T): T[] {
  return items.includes(value) ? items : [...items, value];
}
