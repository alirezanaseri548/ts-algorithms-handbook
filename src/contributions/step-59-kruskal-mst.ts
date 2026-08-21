import { kruskal, type Edge } from "../algorithms/kruskal.js";

const edges: Edge[] = [
    { from: 0, to: 1, weight: 10 },
    { from: 0, to: 2, weight: 6 },
    { from: 0, to: 3, weight: 5 },
    { from: 1, to: 3, weight: 15 },
    { from: 2, to: 3, weight: 4 },
];

console.log(
    "Step 59 — Kruskal's MST edges:",
    kruskal(4, edges),
);
