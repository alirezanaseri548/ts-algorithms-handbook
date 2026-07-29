export function step02LinearSearch<T>(items: T[], target: T): number {
  for (let index = 0; index < items.length; index++) {
    if (items[index] === target) return index;
  }
  return -1;
}
