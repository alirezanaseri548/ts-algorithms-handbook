export function factorialRecursive(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative integer");
  }

  if (n === 0) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}
