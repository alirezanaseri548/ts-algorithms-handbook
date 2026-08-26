import {
  SinglyLinkedList,
  DoublyLinkedList,
  LinkedListQueue,
} from "../data-structures/index.js";

const sll = new SinglyLinkedList<number>();
sll.push(10).push(20).push(30);
console.log("SLL toArray:", sll.toArray());
console.log("SLL size:", sll.size);

const dll = new DoublyLinkedList<string>();
dll.push("middle");
dll.unshift("start");
dll.push("end");
console.log("DLL toArray:", dll.toArray());
console.log("DLL at(1):", dll.at(1));
console.log("DLL shift:", dll.shift());
console.log("DLL pop:", dll.pop());
console.log("DLL remaining:", dll.toArray());

const queue = new LinkedListQueue<string>();
queue.enqueue("job1").enqueue("job2").enqueue("job3");
console.log("Queue peek:", queue.peek());
console.log("Queue dequeue:", queue.dequeue());
console.log("Queue size:", queue.size);
console.log("Queue isEmpty:", queue.isEmpty);
console.log("Queue toArray:", queue.toArray());
