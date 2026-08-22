import { Trie } from "../data-structures/trie.js";

const trie = new Trie();

trie.insert("apple");
trie.insert("application");
trie.insert("banana");

console.log("Step 50 - search apple:", trie.search("apple"));
console.log("Step 50 - search app:", trie.search("app"));
console.log("Step 50 - prefix app:", trie.startsWith("app"));
console.log("Step 50 - prefix cat:", trie.startsWith("cat"));
