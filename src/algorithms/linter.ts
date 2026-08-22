import { Stack } from "../data-structures/stack.js";

type OpeningBrace = "(" | "[" | "{";
type ClosingBrace = ")" | "]" | "}";

const PAIRS: Record<OpeningBrace, ClosingBrace> = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const OPENING_BRACES: OpeningBrace[] = ["(", "[", "{"];
const CLOSING_BRACES: ClosingBrace[] = [")", "]", "}"];

function isOpeningBrace(char: string): char is OpeningBrace {
  return OPENING_BRACES.includes(char as OpeningBrace);
}

function isClosingBrace(char: string): char is ClosingBrace {
  return CLOSING_BRACES.includes(char as ClosingBrace);
}

export function lintBraces(text: string): true | string {
  const stack = new Stack<OpeningBrace>();

  for (const char of text) {
    if (isOpeningBrace(char)) {
      stack.push(char);
      continue;
    }

    if (!isClosingBrace(char)) {
      continue;
    }

    const popped: OpeningBrace | undefined = stack.pop();

    if (popped === undefined) {
      return char + " doesn't have opening brace";
    }

    const expectedClosingBrace = PAIRS[popped];

    if (expectedClosingBrace !== char) {
      return char + " has mismatched opening brace";
    }
  }

  if (stack.size > 0) {
    const unclosed: OpeningBrace | undefined = stack.read();
    return String(unclosed) + " does not have closing brace";
  }

  return true;
}
