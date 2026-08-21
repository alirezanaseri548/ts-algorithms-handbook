import { bellmanFord } from "../algorithms/bellman-ford.js";
import { kruskal, type Edge } from "../algorithms/kruskal.js";

const directedEdges = [
    { from: 0, to: 1, weight: 4 },
    { from: 0, to: 2, weight: 1 },
    { from: 2, to: 1, weight: 2 },
    { from: 1, to: 3, weight: 1 },
    { from: 2, to: 3, weight: 5 },
];

const undirectedEdges: Edge[] = [
    { from: 0, to: 1, weight: 4 },
    { from: 0, to: 2, weight: 1 },
    { from: 2, to: 1, weight: 2 },
    { from: 1, to: 3, weight: 1 },
    { from: 2, to: 3, weight: 5 },
];

const shortestPathResult = bellmanFord(4, directedEdges, 0);
const minimumSpanningTree = kruskal(4, undirectedEdges);

console.log("Step 60 — shortest path vs MST:", {
    shortestPathDistances: shortestPathResult.distances,
    minimumSpanningTree,
});
