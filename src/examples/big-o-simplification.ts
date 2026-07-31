export type BigOExample = {
  expression: string;
  simplified: string;
  reason: string;
};

export const bigOSimplificationExamples: BigOExample[] = [
  {
    expression: "N^2 + 2N - 2",
    simplified: "O(N^2)",
    reason: "Ignore constants and lower-order terms.",
  },
  {
    expression: "N^4 + N^3 + N^2 + N",
    simplified: "O(N^4)",
    reason: "Keep only the highest-order term.",
  },
  {
    expression: "N + log N",
    simplified: "O(N)",
    reason: "Linear growth dominates logarithmic growth.",
  },
];

export function printBigOSimplificationExamples(): void {
  console.log("Big O simplification rules:");
  for (const example of bigOSimplificationExamples) {
    console.log(
      `${example.expression} => ${example.simplified} | ${example.reason}`
    );
  }
}