export class MaxHeap {
    private data: number[] = [];

    insert(value: number): void {
        this.data.push(value);
        this.siftUp(this.data.length - 1);
    }

    pop(): number | undefined {
        if (this.data.length === 0) return undefined;
        const root = this.data[0];
        const last = this.data.pop();
        if (last !== undefined && this.data.length > 0) {
            this.data[0] = last;
            this.siftDown(0);
        }
        return root;
    }

    private siftUp(i: number): void {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            const currentValue = this.data[i];
            const parentValue = this.data[p];
            if (currentValue === undefined || parentValue === undefined) break;
            if (currentValue <= parentValue) break;
            
            this.swap(i, p);
            i = p;
        }
    }

    private siftDown(i: number): void {
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            const largestValue = this.data[largest];
            const leftValue = this.data[left];
            const rightValue = this.data[right];

            if (leftValue !== undefined && largestValue !== undefined && leftValue > largestValue) {
                largest = left;
            }

            const currentLargestValue = this.data[largest];
            if (rightValue !== undefined && currentLargestValue !== undefined && rightValue > currentLargestValue) {
                largest = right;
            }

            if (largest === i) break;
            this.swap(i, largest);
            i = largest;
        }
    }

    private swap(idx1: number, idx2: number): void {
        const val1 = this.data[idx1];
        const val2 = this.data[idx2];
        if (val1 !== undefined && val2 !== undefined) {
            this.data[idx1] = val2;
            this.data[idx2] = val1;
        }
    }
}