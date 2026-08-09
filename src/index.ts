import { fibonacciMemoized } from "./algorithms/fibonacci-memoized.js";
import { fibonacciTabulated } from "./algorithms/fibonacci-tabulated.js";
import { quickSort } from "./algorithms/quick-sort.js";

import { linearSearch } from "./algorithms/linear-search.js";
import { binarySearch } from "./algorithms/binary-search.js";
import { bubbleSort } from "./algorithms/bubble-sort.js";
import { twoSumHasPair } from "./algorithms/two-sum.js";
import { containsX } from "./algorithms/contains-x.js";
import { averageOfEvenNumbers } from "./algorithms/average-of-even-numbers.js";
import { wordBuilderTwo } from "./algorithms/word-builder-two.js";
import { wordBuilderThree } from "./algorithms/word-builder-three.js";
import { arraySample } from "./algorithms/array-sample.js";
import { intersectionWithBreak } from "./algorithms/array-intersection.js";
import { printBigOSimplificationExamples } from "./examples/big-o-simplification.js";

console.log("Linear Search:", linearSearch([3, 7, 9, 12], 9));
console.log("Binary Search:", binarySearch([1, 3, 5, 7, 9], 7));
console.log("Bubble Sort:", bubbleSort([5, 2, 4, 1, 3]));

console.log("Two Sum:", twoSumHasPair([2, 5, 3, 1, 0, 7], 10));
console.log("containsX:", containsX("ABCDEFGX"));
console.log("Average of Even Numbers:", averageOfEvenNumbers([1, 2, 4, 7, 10]));
console.log("Word Builder Two:", wordBuilderTwo(["a", "b", "c"]));
console.log("Word Builder Three:", wordBuilderThree(["a", "b", "c"]));
console.log("Array Sample:", arraySample([10, 20, 30, 40, 50]));
console.log(
  "Intersection With Break:",
  intersectionWithBreak([1, 2, 3, 4], [3, 4, 5, 6])
);

printBigOSimplificationExamples();

console.log("Quicksort:", quickSort([5, 2, 8, 1, 9]));
console.log("Fibonacci memoized:", fibonacciMemoized(10));
console.log("Fibonacci tabulated:", fibonacciTabulated(10));

import { factorial } from "./algorithms/factorial.js";

console.log("Step 24 - factorial(5):", factorial(5));

import { fibonacciMemo } from "./algorithms/fibonacci-memo.js";

console.log("Step 25 - fibonacciMemo(10):", fibonacciMemo(10));

import { breadthFirstSearch, depthFirstSearch, type Graph } from "./algorithms/graph-traversal.js";

const sampleGraph: Graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D"]],
  ["C", ["E"]],
  ["D", []],
  ["E", []],
]);

console.log("Step 26 - DFS:", depthFirstSearch(sampleGraph, "A"));
console.log("Step 27 - BFS:", breadthFirstSearch(sampleGraph, "A"));

import { SinglyLinkedList } from "./data-structures/singly-linked-list.js";

const linkedList = new SinglyLinkedList<number>();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log("Step 28 - linked list:", linkedList.toArray());

import { mergeSort } from "./algorithms/merge-sort.js";


console.log("Step 29 - merge sort:", mergeSort([8, 3, 5, 1, 9]));
console.log("Step 30 - quick sort:", quickSort([8, 3, 5, 1, 9]));

