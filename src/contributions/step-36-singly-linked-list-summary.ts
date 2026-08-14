import { SinglyLinkedList } from "../data-structures/singly-linked-list.js";

const list = new SinglyLinkedList<string>();
list.append("once");
list.append("time");
list.insertAtIndex(1, "upon");
list.insertAtIndex(2, "a");

console.log("Step 36 - after insert:", list.toArray());
console.log("Step 36 - read(2):", list.read(2));
console.log("Step 36 - indexOf(time):", list.indexOf("time"));
console.log("Step 36 - deleteAtIndex(1):", list.deleteAtIndex(1));
console.log("Step 36 - final:", list.toArray());
console.log("Step 36 - length():", list.length());