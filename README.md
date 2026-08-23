# ts-algorithms-handbook

A clean and practical TypeScript repository for learning foundational data structures, algorithms, and Big O analysis.

Each contribution focuses on one concept: array operations, searching, sorting, recursion, dynamic programming, graphs, and complexity analysis.

---

## Features

- Implemented in **TypeScript** with strict compiler settings
- Covers **core data structures and algorithms**
- Includes **step-based learning files** under `src/contributions`
- Contains **Big O explanations** and runnable examples
- Beginner-friendly structure that also tracks contribution history

---

## Project Structure

```text
src/
  algorithms/        searching, sorting, graph and dynamic programming implementations
  data-structures/   array operations, ordered array, linked list, disjoint set
  contributions/     step-by-step learning files and notes
  examples/          small runnable demos
  index.ts           entry point used by npm start
```

Compiled output is written to `dist/` and is not committed.

---

## Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher
- npm
- A TypeScript-aware editor such as **VS Code**

```bash
node -v
npm -v
```

---

## Installation

```bash
git clone https://github.com/alirezanaseri548/ts-algorithms-handbook.git
cd ts-algorithms-handbook
npm install
```

---

## Scripts

```bash
npm run typecheck   # type-check only, no emitted files
npm run build       # compile src/ into dist/
npm start           # run dist/index.js
```

---

## How to Run

This is an ES module project compiled with `nodenext`, so the reliable flow is compile then run:

```bash
npm run build
npm start
```

To run a single compiled file:

```bash
node dist/examples/reconstruct-path-demo.js
node dist/contributions/step-49-heap-sort.js
```

`ts-node` is not part of the dependencies. If you prefer executing TypeScript
directly, use a loader with ESM support:

```bash
npx tsx src/index.ts
```

---

## How to Run in VS Code

1. Open the project folder in VS Code
2. Open the integrated terminal
3. Confirm you are in the project root
4. Install dependencies with `npm install`
5. Build and run:

```bash
npm run build
npm start
```

---

## Available Learning Topics

- Array read, insert, delete and set
- Ordered arrays
- Linear search and binary search
- Big O notes and simplification rules
- Bubble, selection, insertion, merge, quick and heap sort
- Partitioning
- Array intersection with break optimization
- Two Sum
- containsX with early return
- Average of even numbers
- Two-letter and three-letter word builders
- Array sample
- Recursion and factorial
- Dynamic programming: memoization and tabulation
- Graph traversal: DFS and BFS
- Shortest paths: Dijkstra, Bellman-Ford and path reconstruction
- Minimum spanning tree: Kruskal with disjoint set
- Topological sort
- Trie and autocomplete
- Singly linked list, doubly linked list and an undo stack for a text editor

---

## Steps 24-30

- Step 24: Recursion fundamentals
- Step 25: Dynamic programming
- Step 26: Graph DFS
- Step 27: Graph BFS
- Step 28: Singly linked list
- Step 29: Merge sort
- Step 30: Quick sort

Implementations live in `src/algorithms` and `src/data-structures`.
Educational notes live in `src/contributions`.

- [Step 24: Recursion](./src/contributions/step-24-recursion-notes.md)
  - `src/algorithms/factorial.ts`
  - `src/contributions/step-24-recursion-factorial.ts`

- [Step 25: Dynamic Programming](./src/contributions/step-25-dynamic-programming-notes.md)
  - `src/algorithms/fibonacci-memo.ts`
  - `src/contributions/step-25-dynamic-programming-fibonacci.ts`

- [Step 26: Graph DFS](./src/contributions/step-26-graph-dfs-notes.md)
  - `src/algorithms/graph-traversal.ts`
  - `src/contributions/step-26-graph-dfs.ts`

- [Step 27: Graph BFS](./src/contributions/step-27-graph-bfs-notes.md)
  - `src/algorithms/graph-traversal.ts`
  - `src/contributions/step-27-graph-bfs.ts`

- [Step 28: Singly Linked List](./src/contributions/step-28-singly-linked-list-notes.md)
  - `src/data-structures/singly-linked-list.ts`
  - `src/contributions/step-28-singly-linked-list.ts`

- [Step 29: Merge Sort](./src/contributions/step-29-merge-sort-notes.md)
  - `src/algorithms/merge-sort.ts`
  - `src/contributions/step-29-merge-sort.ts`

- [Step 30: Quick Sort](./src/contributions/step-30-quick-sort-notes.md)
  - `src/algorithms/quick-sort.ts`
  - `src/contributions/step-30-quick-sort.ts`

---

## Development Workflow

When adding a new learning step:

1. Create or update only the files that belong to that step
2. Run `npm run typecheck` and `npm run build`
3. Review the staged changes with `git diff --cached`
4. Commit with a conventional message, then push

```bash
git add <files>
git commit -m "feat: add new algorithm step"
git push origin main
```

---

## Notes

- Some files are educational step files and show incremental progress rather than
  final production-ready implementations.
- The `contributions` folder tracks the learning journey step by step.
- Source files are stored as UTF-8 without a BOM.

---

## Author

**Alireza Naseri**

GitHub: [@alirezanaseri548](https://github.com/alirezanaseri548)

---

## License

This project is open for learning and educational use.

## Data Structures

| ساختار | فایل | پیچیدگی کلیدی |
| ------ | ---- | -------------- |
| Singly Linked List | `src/data-structures/singly-linked-list.ts` | push/unshift/shift: O(1) |
| Doubly Linked List | `src/data-structures/doubly-linked-list.ts` | push/pop/unshift/shift: O(1) |
| Linked List Queue  | `src/data-structures/linked-list-queue.ts`  | enqueue/dequeue/peek: O(1) |

- نمونه‌ی اجرایی: `src/examples/linked-list-usage.ts`
- نکات و خطاهای رایج: `docs/linked-list-notes.md`