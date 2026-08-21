export function topologicalSort(adjacencyList: number[][]): number[] {
    const vertexCount = adjacencyList.length;
    const indegree = Array<number>(vertexCount).fill(0);

    for (const neighbors of adjacencyList) {
        for (const neighbor of neighbors) {
            if (
                !Number.isInteger(neighbor) ||
                neighbor < 0 ||
                neighbor >= vertexCount
            ) {
                throw new RangeError(`Invalid neighbor vertex: ${neighbor}`);
            }

            indegree[neighbor] = (indegree[neighbor] ?? 0) + 1;
        }
    }

    const queue: number[] = [];

    for (let vertex = 0; vertex < vertexCount; vertex += 1) {
        if ((indegree[vertex] ?? 0) === 0) {
            queue.push(vertex);
        }
    }

    const order: number[] = [];
    let head = 0;

    while (head < queue.length) {
        const vertex = queue[head];
        head += 1;

        if (vertex === undefined) {
            continue;
        }

        order.push(vertex);

        for (const neighbor of adjacencyList[vertex] ?? []) {
            indegree[neighbor] = (indegree[neighbor] ?? 0) - 1;

            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    if (order.length !== vertexCount) {
        throw new Error("Graph contains a cycle; topological order is impossible.");
    }

    return order;
}
