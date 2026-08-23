export class ListNode<T> {
  next: ListNode<T> | null = null;
  constructor(public value: T) {}
}

/**
 * لیست پیوندی یک‌طرفه با نگهداری head و tail
 * push/unshift/shift => O(1) , find/removeAt => O(n)
 */
export class SinglyLinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private length = 0;

  get size(): number {
    return this.length;
  }

  push(value: T): this {
    const node = new ListNode(value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  unshift(value: T): this {
    const node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
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
    removed.next = null;
    this.length--;
    return removed.value;
  }

  find(predicate: (value: T, index: number) => boolean): T | undefined {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (predicate(current.value, index)) return current.value;
      current = current.next;
      index++;
    }
    return undefined;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();

    let previous = this.head as ListNode<T>;
    for (let i = 0; i < index - 1; i++) {
      previous = previous.next as ListNode<T>;
    }
    const target = previous.next as ListNode<T>;
    previous.next = target.next;
    if (target === this.tail) this.tail = previous;
    target.next = null;
    this.length--;
    return target.value;
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

  *[Symbol.iterator](): Iterator<T> {
    let current = this.head;
    while (current !== null) {
      yield current.value;
      current = current.next;
    }
  }
}