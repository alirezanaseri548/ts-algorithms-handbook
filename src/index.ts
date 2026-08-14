import { fibonacciMemoized } from "./algorithms/fibonacci-memoized.js";
import { fibonacciTabulated } from "./algorithms/fibonacci-tabulated.js";
import { mergeSort } from "./algorithms/merge-sort.js";
import { quickSort } from "./algorithms/quick-sort.js";
import { SinglyLinkedList } from "./data-structures/singly-linked-list.js";

const linkedList = new SinglyLinkedList<number>();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log("Step 28 - linked list:", linkedList.toArray());

console.log("Step 29 - fibonacci memoized:", fibonacciMemoized(7));
console.log("Step 29 - fibonacci tabulated:", fibonacciTabulated(7));
console.log("Step 29 - merge sort:", mergeSort([8, 3, 5, 1, 9]));
console.log("Step 30 - quick sort:", quickSort([8, 3, 5, 1, 9]));

import "./contributions/step-31-singly-linked-list-read.js";
import "./contributions/step-32-singly-linked-list-index-of.js";
import "./contributions/step-33-singly-linked-list-insert-at-index.js";
import "./contributions/step-34-singly-linked-list-delete-at-index.js";
import "./contributions/step-36-singly-linked-list-summary.js";