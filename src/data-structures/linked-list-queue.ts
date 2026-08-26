class QueueNode<T> {
  next: QueueNode<T> | null = null;
  constructor(public value: T) {}
}

export class LinkedListQueue<T> {
  private front: QueueNode<T> | null = null;
  private back: QueueNode<T> | null = null;
  private length = 0;

  get size(): number {
    return this.length;
  }

  peekSize(): number {
    return this.length;
  }

  get isEmpty(): boolean {
    return this.length === 0;
  }

  enqueue(value: T): this {
    const node = new QueueNode(value);
    if (this.back === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.length++;
    return this;
  }

  dequeue(): T | undefined {
    if (this.front === null) return undefined;
    const value = this.front.value;
    this.front = this.front.next;
    if (this.front === null) this.back = null;
    this.length--;
    return value;
  }

  peek(): T | undefined {
    return this.front?.value;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.front;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
