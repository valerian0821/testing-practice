import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./code.js";

test("Capitalize works", () => {
  expect(capitalize("tree")).toBe("Tree");
});

test("Reverse string works", () => {
  expect(reverseString("tree")).toBe("eert");
});

let calculator = new Calculator();

test("Calculator add works", () => {
  expect(calculator.add(6, 3)).toBe(9);
});

test("Calculator subtract works", () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});

test("Calculator multiply works", () => {
  expect(calculator.mulitply(6, 3)).toBe(18);
});

test("Calculator divide works", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test("Cipher right shift", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("Cipher left shift", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("Cipher wrap from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Cipher shift over full cycle", () => {
  expect(caesarCipher("abc", 29)).toBe("def");
});

test("Cipher case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Cipher punctuation, spaces, other characters check", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Analyze array empty array", () => {
  expect(analyzeArray([])).toStrictEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("Analyze array non-empty array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
