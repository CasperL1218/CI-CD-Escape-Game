const add = require("../src/add");

test("adds incorrectly", () => {
  expect(add(1, 2)).toBe(3);
});