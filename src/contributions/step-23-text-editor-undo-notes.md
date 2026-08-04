# Step 23: Text Editor Undo/Redo

## Main Idea

This step demonstrates a practical application of the Stack data structure.

A text editor can support **undo** and **redo** by using two stacks:

- `undoStack`
- `redoStack`

## How It Works

### When typing or deleting
Before changing the text:

1. Save the current text in `undoStack`
2. Apply the new change
3. Clear `redoStack`

Why clear `redoStack`?

Because after a new action, the old redo history is no longer valid.

### Undo
To undo:

1. Pop the previous state from `undoStack`
2. Push the current state into `redoStack`
3. Restore the previous state

### Redo
To redo:

1. Pop a state from `redoStack`
2. Push the current state into `undoStack`
3. Restore the redone state

## Why Stack?

A stack is perfect for undo/redo because it follows **LIFO**:

- Last action entered
- First action removed

That is exactly how undo works.

## Complexity

If stack operations are considered alone:

- `push`: O(1)
- `pop`: O(1)

So undo and redo are typically O(1).

However, because strings may be copied during updates, some text operations can cost O(L), where L is the string length.

## Key Learning

This example shows that data structures are not only theoretical.

They are directly used in real software features such as:

- text editors
- history systems
- browser navigation
- action rollback
