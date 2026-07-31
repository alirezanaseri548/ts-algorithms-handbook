export function isLeapYear(year: number): boolean {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

export function sumNumbers(numbers: number[]): number {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}