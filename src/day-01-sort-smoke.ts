import assert from "node:assert/strict";
import { bubbleSort } from "./algorithms/bubble-sort.js";

type SortFunction = (items: number[]) => number[];

const input = [5, 2, 9, 1, 5, 6];
const expected = [1, 2, 5, 5, 6, 9];

function verifySort(name: string, sort: SortFunction): void {
  const actual = sort([...input]);

  assert.deepEqual(actual, expected, `${name} returned an invalid result`);
  assert.deepEqual(input, [5, 2, 9, 1, 5, 6], `${name} mutated the input`);

  console.log(`${name}: OK`);
}

verifySort("bubbleSort", bubbleSort);
