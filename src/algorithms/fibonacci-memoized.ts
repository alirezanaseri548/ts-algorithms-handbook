export function fibonacciMemoized(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative integer");
  }

  const memo = new Map<number, number>();

  const solve = (value: number): number => {
    if (value <= 1) {
      return value;
    }

    const cached = memo.get(value);

    if (cached !== undefined) {
      return cached;
    }

    const result = solve(value - 1) + solve(value - 2);
    memo.set(value, result);

    return result;
  };

  return solve(n);
}
