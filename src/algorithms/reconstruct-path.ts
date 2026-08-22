export function reconstructPath(
    previous: Array<number | null>,
    source: number,
    target: number,
): number[] | null {
    if (
        !Number.isInteger(source) ||
        !Number.isInteger(target) ||
        source < 0 ||
        target < 0 ||
        source >= previous.length ||
        target >= previous.length
    ) {
        throw new RangeError("Source and target must be valid vertex indexes.");
    }

    const path: number[] = [];
    const visited = new Set<number>();
    let current: number | null = target;

    while (current !== null) {
        if (visited.has(current)) {
            throw new Error("Invalid predecessor chain: cycle detected.");
        }

        visited.add(current);
        path.push(current);

        if (current === source) {
            path.reverse();
            return path;
        }

        const predecessor: number | null | undefined = previous[current];

        if (predecessor !== null && (
            !Number.isInteger(predecessor) ||
            predecessor < 0 ||
            predecessor >= previous.length
        )) {
            throw new Error("Invalid predecessor chain.");
        }

        current = predecessor;
    }

    return null;
}
