export type Graph = Map<string, string[]>;

export function depthFirstSearch(graph: Graph, start: string): string[] {
  const visited = new Set<string>();
  const result: string[] = [];
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();
    if (node === undefined || visited.has(node)) {
      continue;
    }

    visited.add(node);
    result.push(node);

    const neighbors = graph.get(node) ?? [];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      if (neighbor !== undefined && !visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return result;
}

export function breadthFirstSearch(graph: Graph, start: string): string[] {
  const visited = new Set<string>();
  const result: string[] = [];
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === undefined || visited.has(node)) {
      continue;
    }

    visited.add(node);
    result.push(node);

    for (const neighbor of graph.get(node) ?? []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}
