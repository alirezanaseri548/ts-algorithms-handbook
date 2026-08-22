export class FastQueue<T> {
  private data: T[] = [];
  private head = 0;

  enqueue(element: T): void {
    this.data.push(element);
  }

  dequeue(): T | undefined {
    if (this.head >= this.data.length) return undefined;
    const element = this.data[this.head];
    this.head++;
    if (this.head * 2 >= this.data.length) {
      this.data = this.data.slice(this.head);
      this.head = 0;
    }
    return element;
  }

  get size(): number {
    return this.data.length - this.head;
  }
}
