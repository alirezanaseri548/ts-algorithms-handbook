type Comparable = number | string;

class BinarySearchTreeNode<T extends Comparable> {
  public left: BinarySearchTreeNode<T> | null = null;
  public right: BinarySearchTreeNode<T> | null = null;

  constructor(public value: T) {}
}

export class BinarySearchTree<T extends Comparable> {
  private root: BinarySearchTreeNode<T> | null = null;

  insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  getRootValue(): T | null {
    return this.root?.value ?? null;
  }

  private insertNode(
    node: BinarySearchTreeNode<T> | null,
    value: T
  ): BinarySearchTreeNode<T> {
    if (node === null) return new BinarySearchTreeNode(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  private searchNode(node: BinarySearchTreeNode<T> | null, value: T): boolean {
    if (node === null) return false;
    if (node.value === value) return true;

    return value < node.value
      ? this.searchNode(node.left, value)
      : this.searchNode(node.right, value);
  }
}