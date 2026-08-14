import { SinglyLinkedList } from "../data-structures/singly-linked-list.js";

const list = new SinglyLinkedList<string>();
list.append("alpha");
list.append("beta");
list.append("gamma");

console.log("Step 32 - indexOf(alpha):", list.indexOf("alpha"));
console.log("Step 32 - indexOf(gamma):", list.indexOf("gamma"));
console.log("Step 32 - indexOf(delta):", list.indexOf("delta"));