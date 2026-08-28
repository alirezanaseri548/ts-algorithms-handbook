import { reconstructPath } from "../algorithms/reconstruct-path.js";

const previous: Array<number | null> = [null, 0, null];
const result = reconstructPath(previous, 0, 2);

if (result !== null) {
    throw new Error(`Expected null, got ${JSON.stringify(result)}`);
}

console.log("ReconstructPath empty smoke test passed.");
