export function fibonacciTabulated(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative integer");
  }

  if (n <= 1) {
    return n;
  }

  const table: number[] = [0, 1];

  for (let index = 2; index <= n; index += 1) {
    const previous = table[index - 1];
    const beforePrevious = table[index - 2];

    if (previous === undefined || beforePrevious === undefined) {
      throw new Error("Invalid Fibonacci table state");
    }

    table[index] = previous + beforePrevious;
  }

  return table[n] as number;
}
