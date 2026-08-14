import { SinglyLinkedList } from "../data-structures/singly-linked-list.js";

const list = new SinglyLinkedList<string>();
list.append("b");
list.append("c");
list.insertAtIndex(0, "a");
list.insertAtIndex(3, "d");
list.insertAtIndex(2, "x");

console.log("Step 33 - after inserts:", list.toArray());