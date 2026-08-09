import { breadthFirstSearch, type Graph } from "../algorithms/graph-traversal.js";

const graph: Graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D"]],
  ["C", ["E"]],
  ["D", []],
  ["E", []],
]);

console.log("Step 27 - BFS:", breadthFirstSearch(graph, "A"));
