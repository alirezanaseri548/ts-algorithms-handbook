# TypeScript Algorithms Handbook

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
├── algorithms/
│   ├── binary-search.ts
│   ├── bubble-sort.ts
│   └── linear-search.ts
│
├── data-structures/
│   ├── array-delete.ts
│   ├── array-insert.ts
│   ├── array-read.ts
│   ├── array-set.ts
│   └── ordered-array.ts
│
├── contributions/
│   ├── daily-progress-log.md
│   ├── github-calendar-sync.md
│   ├── step-01-array-read.ts
│   ├── step-02-linear-search.ts
│   ├── step-03-array-insert.ts
│   ├── step-04-array-delete.ts
│   ├── step-05-array-set.ts
│   ├── step-06-ordered-array.ts
│   ├── step-07-binary-search.ts
│   ├── step-08-big-o-notes.ts
│   ├── step-09-bubble-sort.ts
│   ├── step-10-summary.md
│   ├── step-11-selection-sort-skeleton.ts
│   ├── step-12-selection-sort-loops.ts
│   ├── step-13-selection-sort-complete.ts
│   ├── step-14-selection-sort-complexity.md
│   ├── step-15-insertion-sort-skeleton.ts
│   ├── step-16-insertion-sort-shift.ts
│   ├── step-17-insertion-sort-complete.ts
│   ├── step-18-insertion-sort-complexity.md
│   ├── step-19-benchmark.ts
│   └── step-20-summary.md
│
├── examples/
│   └── big-o-examples.ts
│
└── index.ts

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

# چرا این README بهتر است؟
این نسخه چند مشکل مهم README فعلی را حل می‌کند:

## 1) فقط معرفی نیست، **آموزش اجرا** هم دارد
همان چیزی که خودت خواستی:
- چطور clone کنند
- کجا `npm install` بزنند
- کجا `npx ts-node` بزنند
- داخل VS Code چطور اجرا کنند

## 2) ساختار پروژه را روشن می‌کند
هر کسی وارد ریپو شود سریع می‌فهمد:
- الگوریتم‌ها کجاست
- دیتا استراکچرها کجاست
- فایل‌های contribution کجاست

## 3) حرفه‌ای‌تر دیده می‌شود
برای GitHub خیلی مهم است که README فقط یک جمله نباشد.  
این نسخه باعث می‌شود ریپوی تو:
- تمیزتر
- جدی‌تر
- قابل‌فهم‌تر
- portfolio-friendly تر

---

# یک نکته مهم
چون تو الان Step 11 تا 20 را هم اضافه کرده‌ای، README باید با وضعیت جدید ریپو **sync** باشد.  
یعنی اگر این فایل‌ها واقعاً داخل ریپو هستند، آوردنشان در README کاملاً درست است.

---

# پیشنهاد حرفه‌ای‌تر از این هم دارم
اگر بخواهی، من می‌توانم در پیام بعدی یک **README حتی بهتر و سطح Portfolio / Open Source** برایت بنویسم که این بخش‌ها را هم داشته باشد:

- **Table of Contents**
- **Getting Started**
- **Scripts**
- **How to Contribute**
- **Learning Roadmap**
- **Future Plans**
- **Example Output**
- **FAQ**

یعنی در حدی که ریپوی GitHub تو خیلی شکیل‌تر دیده شود.

اگر خواستی، در پیام بعدی من برات **نسخه نهایی و خیلی حرفه‌ای README** را می‌نویسم که فقط کپی‌پیست کنی داخل `README.md`.
