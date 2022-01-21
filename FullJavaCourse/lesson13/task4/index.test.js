import { calc } from "./calculator.js";

it("should do simple calculus", () => {
  const result = calc("3 + 2");

  expect(result).toEqual('3 + 2 = 5');
});

it("should do simple calculus", () => {
  const result = calc("3 - 2");

  expect(result).toEqual('3 - 2 = 1');
});

it("should do simple calculus", () => {
  const result = calc("3 * 2");

  expect(result).toEqual('3 * 2 = 6');
});

it("should do simple calculus", () => {
  const result = calc("3 / 2");

  expect(result).toEqual('3 / 2 = 1.5');
});

it("should do simple calculus", () => {
  const result = calc([]);

  expect(result).toEqual(null);
});

it("should do simple calculus", () => {
  const result = calc(45);

  expect(result).toEqual(null);
});
