const memo = new Map<number, number>();

export function fibonacciMemo(n: number): number {
  if (!Number.isInteger(n)) {
    throw new Error("Fibonacci input must be an integer.");
  }

  if (n < 0) {
    throw new Error("Fibonacci is not defined for negative numbers.");
  }

  if (n <= 1) {
    return n;
  }

  const cached = memo.get(n);
  if (cached !== undefined) {
    return cached;
  }

  const result = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  memo.set(n, result);
  return result;
}
