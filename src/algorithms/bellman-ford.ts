export type WeightedDirectedEdge = {
    from: number;
    to: number;
    weight: number;
};

export type BellmanFordResult = {
    distances: number[];
    previous: Array<number | null>;
    hasNegativeCycle: boolean;
};

function assertVertex(vertex: number, vertexCount: number): void {
    if (!Number.isInteger(vertex) || vertex < 0 || vertex >= vertexCount) {
        throw new RangeError(`Invalid vertex: ${vertex}`);
    }
}

export function bellmanFord(
    vertexCount: number,
    edges: WeightedDirectedEdge[],
    source: number,
): BellmanFordResult {
    if (!Number.isInteger(vertexCount) || vertexCount < 0) {
        throw new RangeError("vertexCount must be a non-negative integer.");
    }

    assertVertex(source, vertexCount);

    for (const edge of edges) {
        assertVertex(edge.from, vertexCount);
        assertVertex(edge.to, vertexCount);

        if (!Number.isFinite(edge.weight)) {
            throw new RangeError("Edge weights must be finite numbers.");
        }
    }

    const distances = Array<number>(vertexCount).fill(Infinity);
    const previous = Array<number | null>(vertexCount).fill(null);

    distances[source] = 0;

    for (let iteration = 0; iteration < vertexCount - 1; iteration += 1) {
        let changed = false;

        for (const edge of edges) {
            const fromDistance = distances[edge.from];

            if (
                fromDistance !== undefined &&
                fromDistance !== Infinity &&
                fromDistance + edge.weight < (distances[edge.to] ?? Infinity)
            ) {
                distances[edge.to] = fromDistance + edge.weight;
                previous[edge.to] = edge.from;
                changed = true;
            }
        }

        if (!changed) {
            break;
        }
    }

    const hasNegativeCycle = edges.some((edge) => {
        const fromDistance = distances[edge.from];

        return (
            fromDistance !== undefined &&
            fromDistance !== Infinity &&
            fromDistance + edge.weight < (distances[edge.to] ?? Infinity)
        );
    });

    return {
        distances,
        previous,
        hasNegativeCycle,
    };
}
