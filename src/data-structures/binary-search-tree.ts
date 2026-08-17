type Comparable = number | string;

class BinarySearchTreeNode<T extends Comparable> {
    public left: BinarySearchTreeNode<T> | null = null;
    public right: BinarySearchTreeNode<T> | null = null;
    constructor(public value: T) {}
}

export class BinarySearchTree<T extends Comparable> {
    private root: BinarySearchTreeNode<T> | null = null;

    getRootValue(): T | null { return this.root ? this.root.value : null; }

    insert(value: T): void { this.root = this.insertNode(this.root, value); }
    private insertNode(node: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> {
        if (node === null) return new BinarySearchTreeNode(value);
        if (value < node.value) node.left = this.insertNode(node.left, value);
        else if (value > node.value) node.right = this.insertNode(node.right, value);
        return node;
    }

    search(value: T): boolean { return this.searchNode(this.root, value); }
    private searchNode(node: BinarySearchTreeNode<T> | null, value: T): boolean {
        if (node === null) return false;
        if (node.value === value) return true;
        return value < node.value ? this.searchNode(node.left, value) : this.searchNode(node.right, value);
    }

    delete(value: T): void { this.root = this.deleteNode(this.root, value); }
    private deleteNode(node: BinarySearchTreeNode<T> | null, value: T): BinarySearchTreeNode<T> | null {
        if (node === null) return null;
        if (value < node.value) node.left = this.deleteNode(node.left, value);
        else if (value > node.value) node.right = this.deleteNode(node.right, value);
        else {
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
            node.value = this.lift(node.right);
            node.right = this.deleteNode(node.right, node.value);
        }
        return node;
    }
    private lift(node: BinarySearchTreeNode<T>): T {
        if (node.left === null) return node.value;
        return this.lift(node.left);
    }

    inOrder(): T[] { const v: T[] = []; this.traverseInOrder(this.root, v); return v; }
    private traverseInOrder(node: BinarySearchTreeNode<T> | null, v: T[]) {
        if (node) { this.traverseInOrder(node.left, v); v.push(node.value); this.traverseInOrder(node.right, v); }
    }

    preOrder(): T[] { const v: T[] = []; this.traversePreOrder(this.root, v); return v; }
    private traversePreOrder(node: BinarySearchTreeNode<T> | null, v: T[]) {
        if (node) { v.push(node.value); this.traversePreOrder(node.left, v); this.traversePreOrder(node.right, v); }
    }

    postOrder(): T[] { const v: T[] = []; this.traversePostOrder(this.root, v); return v; }
    private traversePostOrder(node: BinarySearchTreeNode<T> | null, v: T[]) {
        if (node) { this.traversePostOrder(node.left, v); this.traversePostOrder(node.right, v); v.push(node.value); }
    }
}