import {
  SinglyLinkedList,
  DoublyLinkedList,
  LinkedListQueue,
} from "../data-structures/index.js";

// --- Singly Linked List ---
const list = new SinglyLinkedList<number>();
list.push(10).push(20).push(30).unshift(5);
console.log("singly:", list.toArray()); // [5, 10, 20, 30]
console.log("removeAt(2):", list.removeAt(2)); // 20
console.log("find > 9:", list.find((v: number) => v > 9)); // 10
console.log("spread:", [...list]); // [5, 10, 30]

// --- Doubly Linked List ---
const dll = new DoublyLinkedList<string>();
dll.push("a").push("b").push("c").unshift("start");
console.log("doubly:", dll.toArray()); // ["start", "a", "b", "c"]
console.log("reversed:", dll.toArrayReversed()); // ["c", "b", "a", "start"]
console.log("at(2):", dll.at(2)); // "b"
console.log("pop:", dll.pop()); // "c"

// --- Queue ---
const queue = new LinkedListQueue<string>();
queue.enqueue("job-1").enqueue("job-2").enqueue("job-3");
console.log("peek:", queue.peek()); // "job-1"
console.log("dequeue:", queue.dequeue()); // "job-1"
console.log("queue:", queue.toArray()); // ["job-2", "job-3"]
console.log("size:", queue.size); // 2
