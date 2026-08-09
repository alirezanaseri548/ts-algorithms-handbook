export function mergeSort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return [...numbers];
  }

  const middle = Math.floor(numbers.length / 2);
  const left = mergeSort(numbers.slice(0, middle));
  const right = mergeSort(numbers.slice(middle));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftValue = left[leftIndex];
    const rightValue = right[rightIndex];

    if (leftValue !== undefined && rightValue !== undefined && leftValue <= rightValue) {
      result.push(leftValue);
      leftIndex++;
    } else if (rightValue !== undefined) {
      result.push(rightValue);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
