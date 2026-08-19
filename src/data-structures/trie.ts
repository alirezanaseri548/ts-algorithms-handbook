class TrieNode {
  readonly children = new Map<string, TrieNode>();
  isEndOfWord = false;
}

export class Trie {
  private readonly root = new TrieNode();

  insert(word: string): void {
    let currentNode = this.root;

    for (const character of word) {
      let nextNode = currentNode.children.get(character);

      if (nextNode === undefined) {
        nextNode = new TrieNode();
        currentNode.children.set(character, nextNode);
      }

      currentNode = nextNode;
    }

    currentNode.isEndOfWord = true;
  }

  search(word: string): boolean {
    const node = this.findNode(word);
    return node?.isEndOfWord ?? false;
  }

  startsWith(prefix: string): boolean {
    return this.findNode(prefix) !== undefined;
  }

  private findNode(text: string): TrieNode | undefined {
    let currentNode = this.root;

    for (const character of text) {
      const nextNode = currentNode.children.get(character);

      if (nextNode === undefined) {
        return undefined;
      }

      currentNode = nextNode;
    }

    return currentNode;
  }
}
