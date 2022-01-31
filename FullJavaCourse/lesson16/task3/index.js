export const createArrayOfFunctions = (num) => {
  if (typeof num === "undefined") return [];
  if (typeof num !== "number") return null;

  let arr = [];

  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
};

console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions('hi'));