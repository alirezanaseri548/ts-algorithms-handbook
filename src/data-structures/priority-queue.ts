import { MaxHeap } from "./heap.js";
export class PriorityQueue {
    private heap = new MaxHeap();
    enqueue(val: number): void { this.heap.insert(val); }
    dequeue(): number | undefined { return this.heap.pop(); }
}