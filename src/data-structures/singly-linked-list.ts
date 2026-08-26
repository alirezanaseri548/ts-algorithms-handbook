export class ListNode<T> {
  next: ListNode<T> | null = null;
  constructor(public value: T) {}
}

export class SinglyLinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private _length = 0;

  get size(): number {
    return this._length;
  }

  length(): number {
    return this._length;
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
    this._length++;
    return this;
  }

  append(value: T): this {
    return this.push(value);
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
    this._length++;
    return this;
  }

  shift(): T | undefined {
    if (this.head === null) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    this._length--;
    if (this._length === 0) this.tail = null;
    return value;
  }

  find(predicate: (value: T) => boolean): T | undefined {
    let current = this.head;
    while (current !== null) {
      if (predicate(current.value)) return current.value;
      current = current.next;
    }
    return undefined;
  }

  read(index: number): T | undefined {
    if (index < 0 || index >= this._length) return undefined;
    let current = this.head;
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next;
    }
    return current?.value;
  }

  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  insertAtIndex(index: number, value: T): boolean {
    if (index < 0 || index > this._length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this._length) {
      this.push(value);
      return true;
    }
    const node = new ListNode(value);
    let current = this.head;
    for (let i = 0; i < index - 1 && current !== null; i++) {
      current = current.next;
    }
    if (current === null) return false;
    node.next = current.next;
    current.next = node;
    this._length++;
    return true;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this._length || this.head === null) return undefined;
    if (index === 0) return this.shift();

    let current = this.head;
    for (let i = 0; i < index - 1 && current.next !== null; i++) {
      current = current.next;
    }
    const removedNode = current.next;
    if (removedNode === null) return undefined;
    current.next = removedNode.next;
    if (removedNode === this.tail) this.tail = current;
    this._length--;
    return removedNode.value;
  }

  deleteAtIndex(index: number): T | undefined {
    return this.removeAt(index);
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
