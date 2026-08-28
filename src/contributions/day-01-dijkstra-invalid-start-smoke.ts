import { dijkstra } from "../algorithms/dijkstra.js";
import { WeightedGraph } from "../data-structures/weighted-graph.js";

const graph = new WeightedGraph();
graph.addEdge("A", "B", 1);

let threw = false;

try {
    dijkstra(graph, "NonExistentVertex");
} catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    threw = message.includes('Start vertex "NonExistentVertex" does not exist.');
}

if (!threw) {
    throw new Error("Expected dijkstra to reject missing start vertex.");
}

console.log("Dijkstra invalid start smoke test passed.");
