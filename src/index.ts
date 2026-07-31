import { linearSearch } from "./algorithms/linear-search";
import { binarySearch } from "./algorithms/binary-search";
import { bubbleSort } from "./algorithms/bubble-sort";
import { twoSumHasPair } from "./algorithms/two-sum";
import { containsX } from "./algorithms/contains-x";
import { averageOfEvenNumbers } from "./algorithms/average-of-even-numbers";
import { wordBuilderTwo } from "./algorithms/word-builder-two";
import { wordBuilderThree } from "./algorithms/word-builder-three";
import { arraySample } from "./algorithms/array-sample";
import { intersectionWithBreak } from "./algorithms/array-intersection";
import { printBigOSimplificationExamples } from "./examples/big-o-simplification";

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