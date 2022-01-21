import { getMinSquaredNumbers } from "./getMinSquaredNumbers.js";

it("should get min squared numbers", () => {
  const result = getMinSquaredNumbers([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});

it("should get min squared numbers", () => {
  const result = getMinSquaredNumbers('I\'m string');

  expect(result).toEqual(null);
});


it("should get min squared numbers", () => {
  const result = getMinSquaredNumbers([]);

  expect(result).toEqual(null);
});
