import { DoublyLinkedList } from "../data-structures/doubly-linked-list.js";

const list = new DoublyLinkedList<number>();
list.append(20);
list.prepend(10);
list.append(30);

console.log("Step 37 - doubly linked list:", list.toArray());