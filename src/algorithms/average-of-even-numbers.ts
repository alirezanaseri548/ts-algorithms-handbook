export function averageOfEvenNumbers(numbers: number[]): number | null {
  let sum = 0;
  let evenCount = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      sum += number;
      evenCount += 1;
    }
  }

  if (evenCount === 0) {
    return null;
  }

  return sum / evenCount;
}
