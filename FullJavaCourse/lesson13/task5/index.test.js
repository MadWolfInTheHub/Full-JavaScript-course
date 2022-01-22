import { reverseArray, withdraw, getAdults } from "./index.js";

/* reverseArray */
it("should reverse the array", () => {
  const result = reverseArray([1, 5, "hi", 9, "I'm string", 10]);

  expect(result).toEqual([10, "I'm string", 9, "hi", 5, 1]);
});

it("should reverse the array", () => {
  const result = reverseArray("I'm srting");

  expect(result).toEqual(null);
});

it("should reverse the array", () => {
  const result = reverseArray(["hi", 9, "I'm string", 10, 67]);

  expect(result).toEqual([67, 10, "I'm string", 9, "hi"]);
});

it("should withdraw money from client's acount", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

  expect(result).toEqual(37);
});

it("should withdraw money from client's acount", () => {
  const result = withdraw(
    ["Serhii", "Asya", "Mary"],
    [900, 895, 15],
    "Serhii",
    723
  );

  expect(result).toEqual(177);
});

it("should withdraw money from client's acount", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);

  expect(result).toEqual(-1);
});

it("should find adults out of an object", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("should find adults out of an object", () => {
  const result = getAdults({ Serhii: 28, Asya: 25, Milana: 5 });

  expect(result).toEqual({ Serhii: 28, Asya: 25 });
});

it("should find adults out of an object", () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});
