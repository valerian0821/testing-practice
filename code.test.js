import { capitalize, reverseString, Calculator } from "./code.js";

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