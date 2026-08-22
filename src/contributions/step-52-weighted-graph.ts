import { WeightedGraph } from "../data-structures/weighted-graph.js";

const weightedGraph = new WeightedGraph();

weightedGraph.addEdge("A", "B", 4);
weightedGraph.addEdge("A", "C", 2);
weightedGraph.addEdge("B", "C", 1);
weightedGraph.addEdge("B", "D", 5);
weightedGraph.addEdge("C", "D", 8);

console.log("Step 52 - vertices:", weightedGraph.getVertices());
console.log("Step 52 - neighbors of A:", weightedGraph.getNeighbors("A"));
