import { test, describe, expect } from "vitest";

/*
This problem was asked by Microsoft.

Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:
```
[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
```

and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.

*/

const INPUT_MATRIX_1 = [
  ["F", "A", "C", "I"],
  ["O", "B", "Q", "P"],
  ["A", "N", "O", "B"],
  ["M", "A", "S", "S"],
];

function solution(matrix: string[][], findStr: string) {
  return true;
}

describe("230402 daily problem", () => {
  test("finding FOAM, top-bottom (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "FOAM")).toBe(true);
  });

  test("finding LEE (expect false)", () => {
    expect(solution(INPUT_MATRIX_1, "LEE")).toBe(false);
  });

  test("finding MASS, left-right (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "MASS")).toBe(false);
  });

  test("finding NOB, left-right (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "NOB")).toBe(false);
  });
});
