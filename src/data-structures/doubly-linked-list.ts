export class DoublyNode<T> {
  prev: DoublyNode<T> | null = null;
  next: DoublyNode<T> | null = null;
  constructor(public value: T) {}
}

export class DoublyLinkedList<T> {
  private head: DoublyNode<T> | null = null;
  private tail: DoublyNode<T> | null = null;
  private length = 0;

  get size(): number {
    return this.length;
  }

  push(value: T): this {
    const node = new DoublyNode(value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  append(value: T): this {
    return this.push(value);
  }

  unshift(value: T): this {
    const node = new DoublyNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  prepend(value: T): this {
    return this.unshift(value);
  }

  pop(): T | undefined {
    if (this.tail === null) return undefined;
    const value = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
    }
    this.length--;
    return value;
  }

  removeFromEnd(): T | undefined {
    return this.pop();
  }

  shift(): T | undefined {
    if (this.head === null) return undefined;
    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
    }
    this.length--;
    return value;
  }

  removeFromFront(): T | undefined {
    return this.shift();
  }

  at(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;
    if (index < this.length / 2) {
      let current = this.head;
      for (let i = 0; i < index && current !== null; i++) {
        current = current.next;
      }
      return current?.value;
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i > index && current !== null; i--) {
        current = current.prev;
      }
      return current?.value;
    }
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
