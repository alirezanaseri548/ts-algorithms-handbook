class DoublyLinkedListNode<T> {
  constructor(
    public value: T,
    public previous: DoublyLinkedListNode<T> | null = null,
    public next: DoublyLinkedListNode<T> | null = null
  ) {}
}

export class DoublyLinkedList<T> {
  private head: DoublyLinkedListNode<T> | null = null;
  private tail: DoublyLinkedListNode<T> | null = null;
  private length = 0;

  append(value: T): void {
    const node = new DoublyLinkedListNode(value);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }

  prepend(value: T): void {
    const node = new DoublyLinkedListNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }

    this.length += 1;
  }

  removeFromFront(): T | undefined {
    if (this.head === null) return undefined;

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.previous = null;
    }

    this.length -= 1;
    return value;
  }

  removeFromEnd(): T | undefined {
    if (this.tail === null) return undefined;

    const value = this.tail.value;
    this.tail = this.tail.previous;

    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }

    this.length -= 1;
    return value;
  }

  get size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  toArray(): T[] {
    const values: T[] = [];
    let current = this.head;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}