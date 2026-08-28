import { WeightedGraph } from "../data-structures/weighted-graph.js";

const graph = new WeightedGraph();

for (const invalidWeight of [-1, Number.NaN]) {
    let threw = false;

    try {
        graph.addEdge("A", "B", invalidWeight);
    } catch (error) {
        threw = error instanceof RangeError;
    }

    if (!threw) {
        throw new Error(`Expected RangeError for weight ${invalidWeight}`);
    }
}

console.log("WeightedGraph validation smoke test passed.");
