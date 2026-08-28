import {
    dijkstra,
    reconstructShortestPath,
} from "../algorithms/dijkstra.js";
import { WeightedGraph } from "../data-structures/weighted-graph.js";

const graph = new WeightedGraph();

graph.addEdge("A", "B", 2);
graph.addEdge("B", "C", 3);
graph.addEdge("A", "C", 10);

const result = dijkstra(graph, "A");
const path = reconstructShortestPath(result, "A", "C");
const distance = result.distances.get("C");

if (distance !== 5) {
    throw new Error(`Expected distance 5, received ${distance}`);
}

if (path.join("->") !== "A->B->C") {
    throw new Error(`Unexpected shortest path: ${path.join("->")}`);
}

console.log("Dijkstra smoke test passed.");
