import { SinglyLinkedList } from "../data-structures/singly-linked-list.js";

const list = new SinglyLinkedList<string>();
list.append("once");
list.append("upon");
list.append("a time");

console.log("Step 31 - read(0):", list.read(0));
console.log("Step 31 - read(2):", list.read(2));
console.log("Step 31 - read(5):", list.read(5));
console.log("Step 31 - toArray():", list.toArray());