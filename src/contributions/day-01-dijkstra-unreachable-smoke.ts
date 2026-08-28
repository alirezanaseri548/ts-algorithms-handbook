import { dijkstra, reconstructShortestPath } from "../algorithms/dijkstra.js";
import { WeightedGraph } from "../data-structures/weighted-graph.js";

const graph = new WeightedGraph();

graph.addEdge("A", "B", 2);
graph.addVertex("C");

const result = dijkstra(graph, "A");
const distanceC = result.distances.get("C");
const path = reconstructShortestPath(result, "A", "C");

if (distanceC !== Number.POSITIVE_INFINITY) {
    throw new Error(`Expected Infinity, got ${distanceC}`);
}

if (path.length !== 0) {
    throw new Error(`Expected empty path, got ${path.join("->")}`);
}

console.log("Dijkstra unreachable smoke test passed.");
