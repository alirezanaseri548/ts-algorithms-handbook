export class Stack<T> {
  private data: T[] = [];

  push(element: T): void {
    this.data.push(element);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  read(): T | undefined {
    if (this.data.length === 0) {
      return undefined;
    }
    return this.data[this.data.length - 1];
  }

  get size(): number {
    return this.data.length;
  }
}
