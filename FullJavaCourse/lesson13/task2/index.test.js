import getSum, { getSquaredArray, getOddNumbers } from "./calculator.js";

it("should calculate the square of numbers", () => {
  const result = getSquaredArray([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it("should get odd numbers", () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it("should get sum of numbers", () => {
  const result = getSum(2, 8);

  expect(result).toEqual(10);
});
