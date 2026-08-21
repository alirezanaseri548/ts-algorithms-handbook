import { DisjointSet } from "../data-structures/disjoint-set.js";

export interface Edge {
    from: number;
    to: number;
    weight: number;
}

export function kruskal(vertexCount: number, edges: Edge[]): Edge[] {
    if (!Number.isInteger(vertexCount) || vertexCount < 0) {
        throw new RangeError("vertexCount must be a non-negative integer.");
    }

    const disjointSet = new DisjointSet(vertexCount);
    const sortedEdges = [...edges].sort((left, right) => left.weight - right.weight);
    const mst: Edge[] = [];

    for (const edge of sortedEdges) {
        if (
            !Number.isInteger(edge.from) ||
            !Number.isInteger(edge.to) ||
            edge.from < 0 ||
            edge.to < 0 ||
            edge.from >= vertexCount ||
            edge.to >= vertexCount
        ) {
            throw new RangeError("Edge contains an invalid vertex.");
        }

        if (!Number.isFinite(edge.weight)) {
            throw new RangeError("Edge weights must be finite numbers.");
        }

        if (disjointSet.union(edge.from, edge.to)) {
            mst.push(edge);

            if (mst.length === Math.max(0, vertexCount - 1)) {
                break;
            }
        }
    }

    return mst;
}
