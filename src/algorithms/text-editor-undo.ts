import { Stack } from "../data-structures/stack.js";

export class TextEditorUndo {
  private undoStack: Stack<string>;
  private redoStack: Stack<string>;
  private currentText: string;

  constructor(initialText: string = "") {
    this.undoStack = new Stack<string>();
    this.redoStack = new Stack<string>();
    this.currentText = initialText;
  }

  type(newText: string): void {
    this.undoStack.push(this.currentText);
    this.currentText += newText;
    this.redoStack = new Stack<string>();
  }

  deleteLastCharacters(count: number = 1): void {
    if (!Number.isInteger(count) || count < 0) {
      throw new Error("count must be a non-negative integer.");
    }

    if (count === 0) {
      return;
    }

    this.undoStack.push(this.currentText);
    this.currentText = this.currentText.slice(0, Math.max(0, this.currentText.length - count));
    this.redoStack = new Stack<string>();
  }

  undo(): void {
    const previousState = this.undoStack.pop();

    if (previousState !== undefined) {
      this.redoStack.push(this.currentText);
      this.currentText = previousState;
    }
  }

  redo(): void {
    const nextState = this.redoStack.pop();

    if (nextState !== undefined) {
      this.undoStack.push(this.currentText);
      this.currentText = nextState;
    }
  }

  getCurrentText(): string {
    return this.currentText;
  }
}
