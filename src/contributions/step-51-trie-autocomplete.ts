import { Trie } from "../data-structures/trie.js";

const autocompleteTrie = new Trie();

for (const word of [
  "app",
  "apple",
  "application",
  "apply",
  "appointment",
  "banana",
]) {
  autocompleteTrie.insert(word);
}

console.log(
  "Step 51 - autocomplete app:",
  autocompleteTrie.autocomplete("app"),
);

console.log(
  "Step 51 - first three suggestions:",
  autocompleteTrie.autocomplete("app", 3),
);
