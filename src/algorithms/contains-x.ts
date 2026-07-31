export function containsX(text: string): boolean {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "X") {
      return true;
    }
  }

  return false;
}