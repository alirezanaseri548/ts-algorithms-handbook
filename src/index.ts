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
import "./contributions/step-36-singly-linked-list-summary.js";import "./contributions/step-37-doubly-linked-list-base.js";
import "./contributions/step-38-doubly-linked-list-removal.js";
import "./contributions/step-39-linked-list-queue.js";
import "./contributions/step-41-binary-search-tree-base.js";
// Steps 49-53: advanced algorithms and data structures
import "./contributions/step-49-heap-sort.js";
import "./contributions/step-50-trie-base.js";
import "./contributions/step-51-trie-autocomplete.js";
import "./contributions/step-52-weighted-graph.js";
import "./contributions/step-53-dijkstra.js";

import "./contributions/step-55-bellman-ford.js";
import { reconstructPath } from "./algorithms/reconstruct-path.js";
import "./contributions/step-56-shortest-path-reconstruction.js";
import "./contributions/step-57-topological-sort.js";
import { DisjointSet } from "./data-structures/disjoint-set.js";
import "./contributions/step-58-disjoint-set-union.js";
import "./contributions/step-59-kruskal-mst.js";
