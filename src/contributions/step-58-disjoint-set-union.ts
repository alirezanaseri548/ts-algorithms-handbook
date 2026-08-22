import { DisjointSet } from "../data-structures/disjoint-set.js";

const sets = new DisjointSet(5);

sets.union(0, 1);
sets.union(1, 2);

console.log(
    "Step 58 — connected(0, 2):",
    sets.connected(0, 2),
);

console.log(
    "Step 58 — connected(0, 4):",
    sets.connected(0, 4),
);
