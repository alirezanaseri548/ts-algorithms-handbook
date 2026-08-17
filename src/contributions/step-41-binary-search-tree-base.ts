import { BinarySearchTree } from "../data-structures/binary-search-tree.js";

const tree = new BinarySearchTree<number>();
[50, 25, 75, 10, 33].forEach((value) => tree.insert(value));

console.log("Step 41 - BST root:", tree.getRootValue());
console.log("Step 41 - BST search 33:", tree.search(33));