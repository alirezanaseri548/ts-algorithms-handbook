import { SinglyLinkedList } from "./singly-linked-list.js";
import { DoublyLinkedList } from "./doubly-linked-list.js";
import { LinkedListQueue } from "./linked-list-queue.js";

function findKey(object: any, keys: string[]): string | undefined {
    for (const key of keys) {
        if (key in object) {
            return key;
        }
    }

    return undefined;
}

function getNodeValue(node: any): any {
    if (node === null || node === undefined) {
        return undefined;
    }

    const key = findKey(node, ["value", "data", "element"]);
    return key === undefined ? undefined : node[key];
}

function getNext(node: any): any {
    if (node === null || node === undefined) {
        return undefined;
    }

    const key = findKey(node, ["next"]);
    return key === undefined ? undefined : node[key];
}

function getPrevious(node: any): any {
    if (node === null || node === undefined) {
        return undefined;
    }

    const key = findKey(node, ["previous", "prev"]);
    return key === undefined ? undefined : node[key];
}

function getHead(list: any): any {
    const key = findKey(list, ["head", "first"]);
    return key === undefined ? undefined : list findKey(list, setHead(list: any, value: any): void {
    const key = findKey(list, ["head", "first"]);

    if (key !== undefined) {
        list[key] = value;
    }
}

function getTail(list: any): any {
    const key = findKey(list, ["tail", "last"]);
    return key === undefined ? undefined : list[key];
}

function setTail(list: any, value: any): void {
    const key = findKey(list, ["tail", "last"]);

    if (key !== undefined) {
        list[key] = value;
    }
}

function getLength(list: any): number {
    const key = findKey(list, ["length", "size"]);

    if (key === undefined) {
        return 0;
    }

    const value = list[key];

    return typeof value === "number" ? value : 0;
}

function setLength(list: any, value: number): void {
    const key = findKey(list, ["length", "size"]);

    if (key !== undefined && typeof list[key] === "number") {
        list[key] = value;
    }
}

function createNodeLike(source: any, value: any): any {
    const NodeConstructor = source?.constructor;

    if (typeof NodeConstructor === "function") {
        try {
            return new NodeConstructor(value);
        } catch {
            // Fallback below
        }
    }

    return {
        value,
        next: undefined,
        previous: undefined,
        prev: undefined,
    };
}

declare module "./singly-linked-list.js" {
    interface SinglyLinkedList<T> {
        append(value: T): this;
        read(index: number): T | undefined;
        indexOf(value: T): number;
        insertAtIndex(index: number, value: T): this;
        deleteAtIndex(index: number): T | undefined;
        size(): number;
    }
}

declare module "./doubly-linked-list.js" {
    interface DoublyLinkedList<T> {
        append(value: T): this;
        prepend(value: T): this;
        removeFromFront(): T | undefined;
        removeFromEnd(): T | undefined;
    }
}

declare module "./linked-list-queue.js" {
    interface LinkedListQueue<T> {
        peekSize(): number;
    }
}

const singlyPrototype = SinglyLinkedList.prototype as any;

if (!singlyPrototype.append) {
    singlyPrototype.append = function <T>(this: any, value: T): any {
        return this.push(value);
    };
}

if (!singlyPrototype.read) {
    singlyPrototype.read = function <T>(
        this: any,
        index: number,
    ): T | undefined {
        if (index < 0) {
            return undefined;
        }

        let current = getHead(this);
        let position = 0;

        while (current !== undefined && current !== null) {
            if (position === index) {
                return getNodeValue(current) as T;
            }

            current = getNext(current);
            position++;
        }

        return undefined;
    };
}

if (!singlyPrototype.indexOf) {
    singlyPrototype.indexOf = function <T>(
        this: any,
        value: T,
    ): number {
        let current = getHead(this);
        let index = 0;

        while (current !== undefined && current !== null) {
            if (getNodeValue(current) === value) {
                return index;
            }

            current = getNext(current);
            index++;
        }

        return -1;
    };
}

if (!singlyPrototype.insertAtIndex) {
    singlyPrototype.insertAtIndex = function <T>(
        this: any,
        index: number,
        value: T,
        }

        const length = (index < 0) {
            return this;
 this.push(value);
        }

        if (index === if (index >= length) {
            return this.push(value);
        }

        if (index === 0) {
            const oldHead = getHead(this);
            const newNode = createNodeLike(oldHead, value);

            newNode.next = oldHead;
            setHead(this, newNode);

            if (length === 0) {
                setTail(this, newNode);
            }

            setLength(this, length + 1);
            return this;
        }

        let previous = getHead(this);

        for (let position = 1; position < index; position++) {
            previous = getNext(previous);
       );

        newNode.next = next;
        previous.next = newNode;

        setLength(this value);

        newNode.next = next;
        previous.next = newNode;

        setLength(this, length + 1);

        return this;
    };
}

if (!singlyPrototype.deleteAtIndex) {
    singlyPrototype.deleteAtIndex = function <T>(
        this: any,
        index: number,
    ): T | undefined {
        if (index < 0) {
            return undefined;
        }

        const length = getLength(this);

        if (index >= length || length === 0) {
            return undefined;
        }

        let removed: any;

        if (index === 0) {
            removed = getHead(this);
            setHead(this, getNext(removed));

            if (length === 1) {
                setTail(this, undefined);
            }
        } else {
            let previous = getHead(this);

            for (let position = 1; position < index; position++) {
                previous = getNext(previous);
            }

            removed = getNext(previous);
            previous.next = getNext(removed);

            if (index === length - 1) {
                setTail(this, previous);
            }
        }

        setLength(this, length - 1);

        return getNodeValue(removed) as T;
    };
}

if (!singlyPrototype.size) {
    singlyPrototype.size = function (this: any): number {
        return getLength(this);
    };
}

const doublyPrototype = DoublyLinkedList.prototype as any;

if (!doublyPrototype.append) {
    doublyPrototype.append = function <T>(this: any, value: T): any {
        if (typeof this.push === "function") {
            return this.push(value);
        }

        const tail = getTail(this);
        const node = createNodeLike(tail, value);

        if (tail !== undefined && tail !== null) {
            tail.next = node;
            node.previous = tail;
            node.prev = tail;
        } else {
            setHead(this, node);
        }

        setTail(this, node);
        setLength(this, getLength(this) + 1);

        return this;
    };
}

if (!doublyPrototype.prepend) {
    doublyPrototype.prepend = function <T>(this: any, value: T): any {
        if (typeof this.unshift === "function") {
            return this.unshift(value);
        }

        const head = getHead(this);
        const node = createNodeLike(head, value);

        if (head !== undefined && head !== null) {
            head.previous = node;
            head.prev = node;
            node.next = head;
        } else {
            setTail(this, node);
        }

        setHead(this, node);
        setLength(this, getLength(this) + 1);

        return this;
    };
}

if (!doublyPrototype.removeFromFront) {
    doublyPrototype.removeFromFront = function (this: any): any {
        if (typeof this.shift === "function") {
            return this.shift();
        }

        const head = getHead(this);

        if (head === undefined || head === null) {
            return undefined;
        }

        const next = getNext(head);

        setHead(this, next);

        if (next !== undefined && next !== null) {
            next.previous = undefined;
            next.prev = undefined;
        } else {
            setTail(this, undefined);
        }

        setLength(this, Math.max(0, getLength(this) - 1) {
    doublyPrototype.removeFromEnd = function ( (!doublyPrototype.removeFromEnd) {
    doublyPrototype.removeFromEnd = function (this: any): any {
        if (typeof this.pop === "function") {
            return this.pop();
        }

        const tail = getTail(this);

        if (tail === undefined || tail === null) {
            return undefined;
        }

        const previous = getPrevious(tail);

        setTail(this, previous);

        if (previous !== undefined && previous !== null) {
            previous.next = undefined;
        } else {
            setHead(this, undefined);
        }

        setLength(this, Math.max(0, getLength(this) - 1));

        return getNodeValue(tail);
    };
}

const queuePrototype = LinkedListQueue.prototype as any;

if (!queuePrototype.peekSize) {
    queuePrototype.peekSize = function (this: any): number {
        const directSize = findKey(this, ["size", "length"]);

        if (
            directSize !== undefined &&
            typeof this[directSize] === "number"
        ) {
            return this[directSize];
        }

        if (typeof this.toArray === "function") {
            return this.toArray().length;
        }

        if (this.list && typeof this.list.toArray === "function") {
            return this.list.toArray().length;
        }

        return 0;
    };
}
