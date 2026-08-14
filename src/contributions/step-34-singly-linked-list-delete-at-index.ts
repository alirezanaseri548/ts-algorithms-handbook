import { SinglyLinkedList } from "../data-structures/singly-linked-list.js";

const list = new SinglyLinkedList<string>();
list.append("first");
list.append("second");
list.append("third");
list.append("fourth");

console.log("Step 34 - deleteAtIndex(1):", list.deleteAtIndex(1));
console.log("Step 34 - state:", list.toArray());
console.log("Step 34 - deleteAtIndex(0):", list.deleteAtIndex(0));
console.log("Step 34 - state:", list.toArray());