export function intersectionWithoutBreak(
  firstArray: number[],
  secondArray: number[]
): number[] {
  const result: number[] = [];

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i]! === secondArray[j]!) {
        result.push(firstArray[i]!);
      }
    }
  }

  return result;
}

export function intersectionWithBreak(
  firstArray: number[],
  secondArray: number[]
): number[] {
  const result: number[] = [];

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i]! === secondArray[j]!) {
        result.push(firstArray[i]!);
        break;
      }
    }
  }

  return result;
}
