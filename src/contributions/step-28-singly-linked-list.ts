import { SinglyLinkedList } from "../data-structures/singly-linked-list.js";

const list = new SinglyLinkedList<number>();
list.append(10);
list.append(20);
list.append(30);

console.log("Step 28 - linked list:", list.toArray());
