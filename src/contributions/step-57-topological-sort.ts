import { topologicalSort } from "../algorithms/topological-sort.js";

const graph = [
    [1, 2],
    [3],
    [3],
    [],
];

console.log(
    "Step 57 — topological order:",
    topologicalSort(graph),
);
