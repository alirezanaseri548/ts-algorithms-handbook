export function wordBuilderThree(characters: string[]): string[] {
  const collection: string[] = [];

  for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < characters.length; j++) {
      for (let k = 0; k < characters.length; k++) {
        if (i !== j && j !== k && i !== k) {
          collection.push(characters[i] + characters[j] + characters[k]);
        }
      }
    }
  }

  return collection;
}