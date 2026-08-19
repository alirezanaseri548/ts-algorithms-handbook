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

  autocomplete(prefix: string, limit = 10): string[] {
    if (!Number.isInteger(limit) || limit < 0) {
      throw new RangeError("Autocomplete limit must be a non-negative integer.");
    }

    if (limit === 0) {
      return [];
    }

    const prefixNode = this.findNode(prefix);

    if (prefixNode === undefined) {
      return [];
    }

    const suggestions: string[] = [];

    this.collectWords(prefixNode, prefix, suggestions, limit);

    return suggestions;
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

  private collectWords(
    node: TrieNode,
    currentWord: string,
    suggestions: string[],
    limit: number,
  ): void {
    if (suggestions.length >= limit) {
      return;
    }

    if (node.isEndOfWord) {
      suggestions.push(currentWord);
    }

    const sortedChildren = [...node.children.entries()].sort(
      ([firstCharacter], [secondCharacter]) =>
        firstCharacter.localeCompare(secondCharacter),
    );

    for (const [character, childNode] of sortedChildren) {
      if (suggestions.length >= limit) {
        return;
      }

      this.collectWords(
        childNode,
        currentWord + character,
        suggestions,
        limit,
      );
    }
  }
}
