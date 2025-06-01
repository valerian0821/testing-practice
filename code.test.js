import { capitalize, reverseString } from "./code.js";

test("Capitalize works", () => {
  expect(capitalize("tree")).toBe("Tree");
});

test("Reverse string works", () => {
  expect(reverseString("tree")).toBe("eert");
});
