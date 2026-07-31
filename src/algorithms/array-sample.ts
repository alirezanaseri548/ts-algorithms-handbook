export function arraySample<T>(items: T[]): [T, T, T] | null {
  if (items.length === 0) {
    return null;
  }

  const first = items[0];
  const middle = items[Math.floor(items.length / 2)];
  const last = items[items.length - 1];

  return [first, middle, last];
}