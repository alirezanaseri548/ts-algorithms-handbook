import { DoublyLinkedList } from "./doubly-linked-list.js";

export class LinkedListQueue<T> {
  private items = new DoublyLinkedList<T>();

  enqueue(value: T): void {
    this.items.append(value);
  }

  dequeue(): T | undefined {
    return this.items.removeFromFront();
  }

  peekSize(): number {
    return this.items.size;
  }

  isEmpty(): boolean {
    return this.items.isEmpty();
  }
}