export function readAt<T>(items: T[], index: number): T | undefined {
  return items[index];
}

export function arrayLength<T>(items: T[]): number {
  return items.length;
}
