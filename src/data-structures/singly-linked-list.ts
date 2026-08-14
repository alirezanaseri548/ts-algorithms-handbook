class ListNode<T> {
  constructor(
    public value: T,
    public next: ListNode<T> | null = null
  ) {}
}

export class SinglyLinkedList<T> {
  private head: ListNode<T> | null = null
  private tail: ListNode<T> | null = null
  private size = 0

  append(value: T): void {
    const node = new ListNode(value)

    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      this.tail = node
    }

    this.size += 1
  }

  read(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null
    }

    let current = this.head
    let currentIndex = 0

    while (current !== null) {
      if (currentIndex === index) {
        return current.value
      }

      current = current.next
      currentIndex += 1
    }

    return null
  }

  indexOf(value: T): number {
    let current = this.head
    let currentIndex = 0

    while (current !== null) {
      if (current.value === value) {
        return currentIndex
      }

      current = current.next
      currentIndex += 1
    }

    return -1
  }

  length(): number {
    return this.size
  }

  toArray(): T[] {
    const values: T[] = []
    let current = this.head

    while (current !== null) {
      values.push(current.value)
      current = current.next
    }

    return values
  }
}