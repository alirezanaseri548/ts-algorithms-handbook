import { WeightedGraph } from "../data-structures/weighted-graph.js";

interface QueueEntry {
  readonly vertex: string;
  readonly distance: number;
}

export interface DijkstraResult {
  readonly distances: ReadonlyMap<string, number>;
  readonly previous: ReadonlyMap<string, string | null>;
}

class MinPriorityQueue {
  private readonly entries: QueueEntry[] = [];

  enqueue(entry: QueueEntry): void {
    this.entries.push(entry);
    this.entries.sort(
      (firstEntry, secondEntry) =>
        firstEntry.distance - secondEntry.distance,
    );
  }

  dequeue(): QueueEntry | undefined {
    return this.entries.shift();
  }

  get isEmpty(): boolean {
    return this.entries.length === 0;
  }
}

export function dijkstra(
  graph: WeightedGraph,
  startVertex: string,
): DijkstraResult {
  if (!graph.hasVertex(startVertex)) {
    throw new Error(`Start vertex "${startVertex}" does not exist.`);
  }

  const distances = new Map<string, number>();
  const previous = new Map<string, string | null>();
  const priorityQueue = new MinPriorityQueue();

  for (const vertex of graph.getVertices()) {
    distances.set(vertex, Number.POSITIVE_INFINITY);
    previous.set(vertex, null);
  }

  distances.set(startVertex, 0);
  priorityQueue.enqueue({
    vertex: startVertex,
    distance: 0,
  });

  while (!priorityQueue.isEmpty) {
    const currentEntry = priorityQueue.dequeue();

    if (currentEntry === undefined) {
      break;
    }

    const knownDistance = distances.get(currentEntry.vertex)!;

    if (currentEntry.distance > knownDistance) {
      continue;
    }

    for (const edge of graph.getNeighbors(currentEntry.vertex)) {
      const candidateDistance = currentEntry.distance + edge.weight;
      const neighborDistance = distances.get(edge.vertex)!;

      if (candidateDistance < neighborDistance) {
        distances.set(edge.vertex, candidateDistance);
        previous.set(edge.vertex, currentEntry.vertex);

        priorityQueue.enqueue({
          vertex: edge.vertex,
          distance: candidateDistance,
        });
      }
    }
  }

  return {
    distances,
    previous,
  };
}

export function reconstructShortestPath(
  result: DijkstraResult,
  startVertex: string,
  targetVertex: string,
): string[] {
  const targetDistance = result.distances.get(targetVertex);

  if (
    targetDistance === undefined ||
    targetDistance === Number.POSITIVE_INFINITY
  ) {
    return [];
  }

  const path: string[] = [];
  let currentVertex: string | null = targetVertex;

  while (currentVertex !== null) {
    path.push(currentVertex);

    if (currentVertex === startVertex) {
      return path.reverse();
    }

    currentVertex = result.previous.get(currentVertex) ?? null;
  }

  return [];
}
