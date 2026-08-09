# ts-algorithms-handbook

A clean and practical TypeScript repository for learning foundational data structures, algorithms, and Big O analysis.

This project is designed as a step-by-step handbook where each contribution focuses on a specific concept such as array operations, searching, sorting, and algorithm analysis.

---

## Features

- Implemented in **TypeScript**
- Covers **core data structures and algorithms**
- Includes **step-based learning files**
- Contains **Big O explanations**
- Beginner-friendly structure for learning and contribution history tracking

---

## Project Structure
```bash
src/
â”œâ”€â”€ algorithms/
â”‚   â”œâ”€â”€ binary-search.ts
â”‚   â”œâ”€â”€ bubble-sort.ts
â”‚   â””â”€â”€ linear-search.ts
â”‚
â”œâ”€â”€ data-structures/
â”‚   â”œâ”€â”€ array-delete.ts
â”‚   â”œâ”€â”€ array-insert.ts
â”‚   â”œâ”€â”€ array-read.ts
â”‚   â”œâ”€â”€ array-set.ts
â”‚   â””â”€â”€ ordered-array.ts
â”‚
â”œâ”€â”€ contributions/
â”‚   â”œâ”€â”€ daily-progress-log.md
â”‚   â”œâ”€â”€ github-calendar-sync.md
â”‚   â”œâ”€â”€ step-01-array-read.ts
â”‚   â”œâ”€â”€ step-02-linear-search.ts
â”‚   â”œâ”€â”€ step-03-array-insert.ts
â”‚   â”œâ”€â”€ step-04-array-delete.ts
â”‚   â”œâ”€â”€ step-05-array-set.ts
â”‚   â”œâ”€â”€ step-06-ordered-array.ts
â”‚   â”œâ”€â”€ step-07-binary-search.ts
â”‚   â”œâ”€â”€ step-08-big-o-notes.ts
â”‚   â”œâ”€â”€ step-09-bubble-sort.ts
â”‚   â”œâ”€â”€ step-10-summary.md
â”‚   â”œâ”€â”€ step-11-selection-sort-skeleton.ts
â”‚   â”œâ”€â”€ step-12-selection-sort-loops.ts
â”‚   â”œâ”€â”€ step-13-selection-sort-complete.ts
â”‚   â”œâ”€â”€ step-14-selection-sort-complexity.md
â”‚   â”œâ”€â”€ step-15-insertion-sort-skeleton.ts
â”‚   â”œâ”€â”€ step-16-insertion-sort-shift.ts
â”‚   â”œâ”€â”€ step-17-insertion-sort-complete.ts
â”‚   â”œâ”€â”€ step-18-insertion-sort-complexity.md
â”‚   â”œâ”€â”€ step-19-benchmark.ts
â”‚   â””â”€â”€ step-20-summary.md
â”‚
â”œâ”€â”€ examples/
â”‚   â””â”€â”€ big-o-examples.ts
â”‚
â””â”€â”€ index.ts

---

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) version 18 or higher
- npm
- TypeScript-compatible editor such as **VS Code**

To verify installation:

bash
node -v
npm -v

---

## Installation

Clone the repository:

bash
git clone https://github.com/alirezanaseri548/ts-algorithms-handbook.git

Move into the project folder:

bash
cd ts-algorithms-handbook

Install dependencies:

bash
npm install

---

## How to Run the Project

This project contains TypeScript source files.  
You can run them using **ts-node** without manually compiling to JavaScript first.

### Run the main entry file

bash
npx ts-node src/index.ts

---

## Run Specific Files

You can also run individual algorithm or contribution files directly.

### Example: run binary search

bash
npx ts-node src/algorithms/binary-search.ts

### Example: run bubble sort

bash
npx ts-node src/algorithms/bubble-sort.ts

### Example: run Big O examples

bash
npx ts-node src/examples/big-o-examples.ts

### Example: run benchmark

bash
npx ts-node src/contributions/step-19-benchmark.ts

---

## How to Run in VS Code

If you are using **VS Code**, follow these steps:

1. Open the project folder in VS Code
2. Open the terminal inside VS Code  
   Shortcut:

bash
Ctrl + `

3. Make sure you are in the root of the project:

bash
pwd

4. Install dependencies if not already installed:

bash
npm install

5. Run any file you want, for example:

bash
npx ts-node src/index.ts

or:

bash
npx ts-node src/contributions/step-19-benchmark.ts

---

## Available Learning Topics

This repository currently includes:

- Array read
- Linear search
- Array insert
- Array delete
- Array set
- Ordered array
- Binary search
- Big O notes
- Bubble sort
- Selection sort
- Insertion sort
- Benchmark introduction

---

## Example Development Workflow

When adding a new learning step:

1. Create a new file inside `src/contributions`
2. Implement the concept clearly
3. Test it with `npx ts-node`
4. Commit the change with a meaningful message

Example:

bash
git add .
git commit -m "feat: add new algorithm step"
git push origin main

---

## Notes

- Some files are educational step files and may represent incremental progress rather than final production-ready implementations.
- The `contributions` folder is designed to track the learning journey step by step.
- If a file does not print output, add a temporary `console.log(...)` for testing.

---

## Author

**Alireza Naseri**

GitHub: [@alirezanaseri548](https://github.com/alirezanaseri548)

---

## License

This project is open for learning and educational use.


---

# Ú†Ø±Ø§ Ø§ÛŒÙ† README Ø¨Ù‡ØªØ± Ø§Ø³ØªØŸ
Ø§ÛŒÙ† Ù†Ø³Ø®Ù‡ Ú†Ù†Ø¯ Ù…Ø´Ú©Ù„ Ù…Ù‡Ù… README ÙØ¹Ù„ÛŒ Ø±Ø§ Ø­Ù„ Ù…ÛŒâ€ŒÚ©Ù†Ø¯:

## 1) ÙÙ‚Ø· Ù…Ø¹Ø±ÙÛŒ Ù†ÛŒØ³ØªØŒ **Ø¢Ù…ÙˆØ²Ø´ Ø§Ø¬Ø±Ø§** Ù‡Ù… Ø¯Ø§Ø±Ø¯
Ù‡Ù…Ø§Ù† Ú†ÛŒØ²ÛŒ Ú©Ù‡ Ø®ÙˆØ¯Øª Ø®ÙˆØ§Ø³ØªÛŒ:
- Ú†Ø·ÙˆØ± clone Ú©Ù†Ù†Ø¯
- Ú©Ø¬Ø§ `npm install` Ø¨Ø²Ù†Ù†Ø¯
- Ú©Ø¬Ø§ `npx ts-node` Ø¨Ø²Ù†Ù†Ø¯
- Ø¯Ø§Ø®Ù„ VS Code Ú†Ø·ÙˆØ± Ø§Ø¬Ø±Ø§ Ú©Ù†Ù†Ø¯

## 2) Ø³Ø§Ø®ØªØ§Ø± Ù¾Ø±ÙˆÚ˜Ù‡ Ø±Ø§ Ø±ÙˆØ´Ù† Ù…ÛŒâ€ŒÚ©Ù†Ø¯
Ù‡Ø± Ú©Ø³ÛŒ ÙˆØ§Ø±Ø¯ Ø±ÛŒÙ¾Ùˆ Ø´ÙˆØ¯ Ø³Ø±ÛŒØ¹ Ù…ÛŒâ€ŒÙÙ‡Ù…Ø¯:
- Ø§Ù„Ú¯ÙˆØ±ÛŒØªÙ…â€ŒÙ‡Ø§ Ú©Ø¬Ø§Ø³Øª
- Ø¯ÛŒØªØ§ Ø§Ø³ØªØ±Ø§Ú©Ú†Ø±Ù‡Ø§ Ú©Ø¬Ø§Ø³Øª
- ÙØ§ÛŒÙ„â€ŒÙ‡Ø§ÛŒ contribution Ú©Ø¬Ø§Ø³Øª

## 3) Ø­Ø±ÙÙ‡â€ŒØ§ÛŒâ€ŒØªØ± Ø¯ÛŒØ¯Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯
Ø¨Ø±Ø§ÛŒ GitHub Ø®ÛŒÙ„ÛŒ Ù…Ù‡Ù… Ø§Ø³Øª Ú©Ù‡ README ÙÙ‚Ø· ÛŒÚ© Ø¬Ù…Ù„Ù‡ Ù†Ø¨Ø§Ø´Ø¯.  
Ø§ÛŒÙ† Ù†Ø³Ø®Ù‡ Ø¨Ø§Ø¹Ø« Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ø±ÛŒÙ¾ÙˆÛŒ ØªÙˆ:
- ØªÙ…ÛŒØ²ØªØ±
- Ø¬Ø¯ÛŒâ€ŒØªØ±
- Ù‚Ø§Ø¨Ù„â€ŒÙÙ‡Ù…â€ŒØªØ±
- portfolio-friendly ØªØ±

---

# ÛŒÚ© Ù†Ú©ØªÙ‡ Ù…Ù‡Ù…
Ú†ÙˆÙ† ØªÙˆ Ø§Ù„Ø§Ù† Step 11 ØªØ§ 20 Ø±Ø§ Ù‡Ù… Ø§Ø¶Ø§ÙÙ‡ Ú©Ø±Ø¯Ù‡â€ŒØ§ÛŒØŒ README Ø¨Ø§ÛŒØ¯ Ø¨Ø§ ÙˆØ¶Ø¹ÛŒØª Ø¬Ø¯ÛŒØ¯ Ø±ÛŒÙ¾Ùˆ **sync** Ø¨Ø§Ø´Ø¯.  
ÛŒØ¹Ù†ÛŒ Ø§Ú¯Ø± Ø§ÛŒÙ† ÙØ§ÛŒÙ„â€ŒÙ‡Ø§ ÙˆØ§Ù‚Ø¹Ø§Ù‹ Ø¯Ø§Ø®Ù„ Ø±ÛŒÙ¾Ùˆ Ù‡Ø³ØªÙ†Ø¯ØŒ Ø¢ÙˆØ±Ø¯Ù†Ø´Ø§Ù† Ø¯Ø± README Ú©Ø§Ù…Ù„Ø§Ù‹ Ø¯Ø±Ø³Øª Ø§Ø³Øª.

---

# Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ Ø­Ø±ÙÙ‡â€ŒØ§ÛŒâ€ŒØªØ± Ø§Ø² Ø§ÛŒÙ† Ù‡Ù… Ø¯Ø§Ø±Ù…
Ø§Ú¯Ø± Ø¨Ø®ÙˆØ§Ù‡ÛŒØŒ Ù…Ù† Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù… Ø¯Ø± Ù¾ÛŒØ§Ù… Ø¨Ø¹Ø¯ÛŒ ÛŒÚ© **README Ø­ØªÛŒ Ø¨Ù‡ØªØ± Ùˆ Ø³Ø·Ø­ Portfolio / Open Source** Ø¨Ø±Ø§ÛŒØª Ø¨Ù†ÙˆÛŒØ³Ù… Ú©Ù‡ Ø§ÛŒÙ† Ø¨Ø®Ø´â€ŒÙ‡Ø§ Ø±Ø§ Ù‡Ù… Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´Ø¯:

- **Table of Contents**
- **Getting Started**
- **Scripts**
- **How to Contribute**
- **Learning Roadmap**
- **Future Plans**
- **Example Output**
- **FAQ**

ÛŒØ¹Ù†ÛŒ Ø¯Ø± Ø­Ø¯ÛŒ Ú©Ù‡ Ø±ÛŒÙ¾ÙˆÛŒ GitHub ØªÙˆ Ø®ÛŒÙ„ÛŒ Ø´Ú©ÛŒÙ„â€ŒØªØ± Ø¯ÛŒØ¯Ù‡ Ø´ÙˆØ¯.

Ø§Ú¯Ø± Ø®ÙˆØ§Ø³ØªÛŒØŒ Ø¯Ø± Ù¾ÛŒØ§Ù… Ø¨Ø¹Ø¯ÛŒ Ù…Ù† Ø¨Ø±Ø§Øª **Ù†Ø³Ø®Ù‡ Ù†Ù‡Ø§ÛŒÛŒ Ùˆ Ø®ÛŒÙ„ÛŒ Ø­Ø±ÙÙ‡â€ŒØ§ÛŒ README** Ø±Ø§ Ù…ÛŒâ€ŒÙ†ÙˆÛŒØ³Ù… Ú©Ù‡ ÙÙ‚Ø· Ú©Ù¾ÛŒâ€ŒÙ¾ÛŒØ³Øª Ú©Ù†ÛŒ Ø¯Ø§Ø®Ù„ `README.md`.
A clean TypeScript repository for learning foundational Data Structures, Algorithms, and Big O Analysis.
## Clone and run
npm run start
## Run inside VS Code terminal
Open the project in VS Code, then use the built-in Terminal and run:
## Run a specific file with ts-node
You can also run individual examples or algorithms directly:
npx ts-node src/algorithms/linear-search.ts
npx ts-node src/algorithms/two-sum.ts
npx ts-node src/examples/big-o-simplification.ts
## Build
npm run build
## Topics included
- Array read, insert, delete, set
- Ordered arrays
- Big O examples
- Big O simplification rules
- Array intersection with break optimization
- Two Sum
- containsX with early return
- Average of even numbers
- Two-letter word builder
- Three-letter word builder
- Array sample

## Steps 24-30

- Step 24: Recursion fundamentals
- Step 25: Divide and Conquer
- Step 26: Partitioning
- Step 27: Recursive Quicksort
- Step 28: Quicksort complexity
- Step 29: Memoization
- Step 30: Tabulation

Implementations are located in `src/algorithms`.
Educational notes are located in `src/contributions`.
