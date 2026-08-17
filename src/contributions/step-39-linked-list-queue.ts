import { LinkedListQueue } from "../data-structures/linked-list-queue.js";

const queue = new LinkedListQueue<string>();
queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");

console.log("Step 39 - dequeue:", queue.dequeue());
console.log("Step 39 - size:", queue.peekSize());