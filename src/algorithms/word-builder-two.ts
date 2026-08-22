export function wordBuilderTwo(characters: string[]): string[] {
  const collection: string[] = [];

  for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < characters.length; j++) {
      if (i !== j) {
        collection.push(characters[i]! + characters[j]!);
      }
    }
  }

  return collection;
}
