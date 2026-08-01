export class Queue<T> {
  private data: T[] = [];

  enqueue(element: T): void {
    this.data.push(element);
  }

  dequeue(): T | undefined {
    return this.data.shift();
  }

  read(): T | undefined {
    return this.data.length === 0 ? undefined : this.data[0];
  }

  get size(): number {
    return this.data.length;
  }
}
