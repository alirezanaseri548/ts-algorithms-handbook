import { Stack } from "../data-structures/stack";

type OpeningBrace = "(" | "[" | "{";
type ClosingBrace = ")" | "]" | "}";

const PAIRS: Record<OpeningBrace, ClosingBrace> = { "(": ")", "[": "]", "{": "}" };
const OPENING = new Set<string>(Object.keys(PAIRS));
const CLOSING = new Set<string>(Object.values(PAIRS));

export function lintBraces(text: string): true | string {
  const stack = new Stack<OpeningBrace>();
  for (const char of text) {
    if (OPENING.has(char)) stack.push(char as OpeningBrace);
    else if (CLOSING.has(char)) {
      const popped = stack.pop();
      if (popped === undefined) return \\ doesn't have opening brace\;
      if (PAIRS[popped] !== char) return \\ has mismatched opening brace\;
    }
  }
  return stack.size > 0 ? \\ does not have closing brace\ : true;
}
