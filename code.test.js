const capitalize = require("./code");

test("Empty string", () => {
  expect(capitalize("")).toBe("");
});

test("First character non-letter", () => {
  expect(capitalize("1tree")).toBe("1tree");
});

test("First character uppercase", () => {
  expect(capitalize("Tree")).toBe("Tree");
});

test("First character undercase", () => {
  expect(capitalize("tree")).toBe("Tree");
});