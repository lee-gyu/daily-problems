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

function* getMatrixIterator(matrix: string[][], findStr: string) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (findStr[0] === matrix[row][col]) yield { row, col };
    }
  }
}

function checkUpToDown(
  matrix: string[][],
  findStr: string,
  row: number,
  col: number
) {
  // return false if length is not enough
  if (matrix.length - row < findStr.length) return false;

  for (let i = 0; i < findStr.length; i++) {
    if (findStr[i] !== matrix[row + i][col]) return false;
  }

  return true;
}

function checkLeftToRight(
  matrix: string[][],
  findStr: string,
  row: number,
  col: number
) {
  // return false if length is not enough
  if (matrix[row].length - col < findStr.length) return false;

  for (let i = 0; i < findStr.length; i++) {
    if (findStr[i] !== matrix[row][col + i]) return false;
  }

  return true;
}

function solution(matrix: string[][], findStr: string) {
  for (const { row, col } of getMatrixIterator(matrix, findStr)) {
    // up-down check
    if (checkUpToDown(matrix, findStr, row, col)) return true;
    // left-right
    if (checkLeftToRight(matrix, findStr, row, col)) return true;
  }

  return false;
}

describe("230402 daily problem", () => {
  test("finding FOAM, top-bottom (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "FOAM")).toBe(true);
  });

  test("finding ABNA, top-bottom (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "ABNA")).toBe(true);
  });

  test("finding OAM, top-bottom (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "OAM")).toBe(true);
  });

  test("finding PB, top-bottom (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "PB")).toBe(true);
  });

  test("finding LEE (expect false)", () => {
    expect(solution(INPUT_MATRIX_1, "LEE")).toBe(false);
  });

  test("finding MASS, left-right (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "MASS")).toBe(true);
  });

  test("finding NOB, left-right (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "NOB")).toBe(true);
  });

  test("finding ASS, left-right (expect true)", () => {
    expect(solution(INPUT_MATRIX_1, "ASS")).toBe(true);
  });

  test("finding QQQ, left-right (expect false)", () => {
    expect(solution(INPUT_MATRIX_1, "QQQ")).toBe(false);
  });
});
