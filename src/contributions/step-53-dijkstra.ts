import {
  dijkstra,
  reconstructShortestPath,
} from "../algorithms/dijkstra.js";
import { WeightedGraph } from "../data-structures/weighted-graph.js";

const routeGraph = new WeightedGraph();

routeGraph.addEdge("A", "B", 4);
routeGraph.addEdge("A", "C", 2);
routeGraph.addEdge("B", "C", 1);
routeGraph.addEdge("B", "D", 5);
routeGraph.addEdge("C", "D", 8);
routeGraph.addEdge("C", "E", 10);
routeGraph.addEdge("D", "E", 2);

const shortestPaths = dijkstra(routeGraph, "A");

console.log(
  "Step 53 - distance from A to E:",
  shortestPaths.distances.get("E"),
);

console.log(
  "Step 53 - shortest path from A to E:",
  reconstructShortestPath(shortestPaths, "A", "E"),
);
