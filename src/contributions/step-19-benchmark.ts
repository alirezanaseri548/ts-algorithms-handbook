import { selectionSort } from './step-13-selection-sort-complete';
import { insertionSort } from './step-17-insertion-sort-complete';

function benchmark(name: string, sortFunction: (array: number[]) => number[], input: number[]): void {
  const copy = [...input];
  const start = performance.now();

  sortFunction(copy);

  const end = performance.now();

  console.log(${name}: ms);
}

const numbers = [9, 4, 7, 1, 3, 8, 2, 6, 5];

benchmark('Selection Sort', selectionSort, numbers);
benchmark('Insertion Sort', insertionSort, numbers);
