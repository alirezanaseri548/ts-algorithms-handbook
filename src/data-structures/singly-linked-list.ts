class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class SinglyLinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private size = 0;

  append(value: T): void {
    const node = new ListNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.size++;
  }

  length(): number {
    return this.size;
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
