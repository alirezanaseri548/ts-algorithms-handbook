import { DoublyLinkedList } from "../data-structures/doubly-linked-list.js";

const list = new DoublyLinkedList<string>();
list.append("first");
list.append("second");
list.append("third");

console.log("Step 38 - remove front:", list.removeFromFront());
console.log("Step 38 - remove end:", list.removeFromEnd());
console.log("Step 38 - remaining:", list.toArray());