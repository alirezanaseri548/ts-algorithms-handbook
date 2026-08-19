export interface WeightedEdge {
  readonly vertex: string;
  readonly weight: number;
}

export class WeightedGraph {
  private readonly adjacencyList = new Map<string, WeightedEdge[]>();

  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(
    firstVertex: string,
    secondVertex: string,
    weight: number,
    undirected = true,
  ): void {
    if (!Number.isFinite(weight) || weight < 0) {
      throw new RangeError(
        "Edge weight must be a finite, non-negative number.",
      );
    }

    this.addVertex(firstVertex);
    this.addVertex(secondVertex);

    this.adjacencyList.get(firstVertex)!.push({
      vertex: secondVertex,
      weight,
    });

    if (undirected) {
      this.adjacencyList.get(secondVertex)!.push({
        vertex: firstVertex,
        weight,
      });
    }
  }

  hasVertex(vertex: string): boolean {
    return this.adjacencyList.has(vertex);
  }

  getVertices(): string[] {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(vertex: string): readonly WeightedEdge[] {
    return this.adjacencyList.get(vertex) ?? [];
  }
}
