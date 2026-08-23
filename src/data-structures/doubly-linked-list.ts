export class DoublyNode<T> {
  prev: DoublyNode<T> | null = null;
  next: DoublyNode<T> | null = null;
  constructor(public value: T) {}
}

/**
 * لیست پیوندی دوطرفه
 * push/pop/unshift/shift => O(1) , at() => O(n/2)
 */
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

  pop(): T | undefined {
    if (this.tail === null) return undefined;
    const removed = this.tail;
    this.tail = removed.prev;
    if (this.tail === null) this.head = null;
    else this.tail.next = null;
    removed.prev = null;
    this.length--;
    return removed.value;
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

  shift(): T | undefined {
    if (this.head === null) return undefined;
    const removed = this.head;
    this.head = removed.next;
    if (this.head === null) this.tail = null;
    else this.head.prev = null;
    removed.next = null;
    this.length--;
    return removed.value;
  }

  /** پیمایش از نزدیک‌ترین سر لیست */
  at(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;

    if (index <= this.length / 2) {
      let current = this.head as DoublyNode<T>;
      for (let i = 0; i < index; i++) current = current.next as DoublyNode<T>;
      return current.value;
    }

    let current = this.tail as DoublyNode<T>;
    for (let i = this.length - 1; i > index; i--) {
      current = current.prev as DoublyNode<T>;
    }
    return current.value;
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

  toArrayReversed(): T[] {
    const result: T[] = [];
    let current = this.tail;
    while (current !== null) {
      result.push(current.value);
      current = current.prev;
    }
    return result;
  }
}