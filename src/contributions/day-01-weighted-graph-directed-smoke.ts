import { WeightedGraph } from "../data-structures/weighted-graph.js";

const graph = new WeightedGraph();

graph.addEdge("A", "B", 5, false);

const neighborsA = graph.getNeighbors("A");
const neighborsB = graph.getNeighbors("B");

if (neighborsA.length !== 1 || neighborsA[0]?.vertex !== "B" || neighborsA[0]?.weight !== 5) {
    throw new Error("Expected directed edge A -> B with weight 5.");
}

if (neighborsB.length !== 0) {
    throw new Error("Expected B to have no outgoing neighbors.");
}

console.log("Directed weighted graph smoke test passed.");
