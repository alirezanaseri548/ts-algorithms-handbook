import { Stack } from "../data-structures/stack";

type OpeningBrace = "(" | "[" | "{";
type ClosingBrace = ")" | "]" | "}";

const PAIRS: Record<OpeningBrace, ClosingBrace> = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const OPENING = new Set<string>(Object.keys(PAIRS));
const CLOSING = new Set<string>(Object.values(PAIRS));

export function lintBraces(text: string): true | string {
  const stack = new Stack<OpeningBrace>();

  for (const char of text) {
    if (OPENING.has(char)) {
      stack.push(char as OpeningBrace);
      continue;
    }

    if (!CLOSING.has(char)) {
      continue;
    }

    const popped = stack.pop();

    if (popped === undefined) {
      return char + " doesn't have opening brace";
    }

    if (PAIRS[popped] !== char) {
      return char + " has mismatched opening brace";
    }
  }

  if (stack.size > 0) {
    const unclosed = stack.read();
    return String(unclosed) + " does not have closing brace";
  }

  return true;
}
