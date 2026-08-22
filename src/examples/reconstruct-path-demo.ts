import { reconstructPath } from "../algorithms/reconstruct-path.js";

function formatPath(result: number[] | null): string {
  return result === null ? "null" : `[${result.join(" -> ")}]`;
}

function runCase(label: string, run: () => number[] | null): void {
  try {
console.log(`${label}: ${formatPath(run())}`);
  } catch (error) {
const message = error instanceof Error ? error.message : String(error);
console.log(`${label}: threw ${message}`);
  }
}

// Complete chain: 3 <- 1 <- 0 rebuilds as 0 -> 1 -> 3.
const reachable: Array<number | null> = [null, 0, 0, 1];
runCase("reachable target", () => reconstructPath(reachable, 0, 3));

// Missing entry: the chain reaches null before the source, so there is no path.
const unreachable: Array<number | null> = [null, null, 1, 2];
runCase("unreachable target", () => reconstructPath(unreachable, 0, 3));

// Cycle: 1 and 2 point at each other, so the walk must be rejected.
const cyclic: Array<number | null> = [null, 2, 1, 2];
runCase("cyclic chain", () => reconstructPath(cyclic, 0, 3));

// Out-of-range vertex index must be rejected before the walk starts.
runCase("invalid target index", () => reconstructPath(reachable, 0, 99));
