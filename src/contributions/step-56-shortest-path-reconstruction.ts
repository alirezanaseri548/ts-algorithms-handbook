import { bellmanFord } from "../algorithms/bellman-ford.js";
import { reconstructPath } from "../algorithms/reconstruct-path.js";

const edges = [
    { from: 0, to: 1, weight: 4 },
    { from: 0, to: 2, weight: 2 },
    { from: 2, to: 1, weight: 1 },
    { from: 1, to: 3, weight: 3 },
    { from: 2, to: 3, weight: 7 },
];

const shortestPaths = bellmanFord(4, edges, 0);

console.log(
    "Step 56 — path 0 -> 3:",
    reconstructPath(shortestPaths.previous, 0, 3),
);
