import { BinarySearchTree } from "../data-structures/binary-search-tree.js";

const tree = new BinarySearchTree<number>();

tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);

if (!tree.search(6)) {
    throw new Error("BST search failed.");
}

const expected = [1, 3, 6, 8, 10];
const actual = tree.inOrder();

if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`BST traversal failed: ${actual.join(",")}`);
}

tree.delete(3);

if (tree.search(3)) {
    throw new Error("BST delete failed.");
}

console.log("BST smoke test passed.");
