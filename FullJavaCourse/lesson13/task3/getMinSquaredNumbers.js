export const getMinSquaredNumbers = (arr) =>
  !Array.isArray(arr) || arr.length === 0
    ? null
    : Math.min(...arr.map((num) => Math.pow(Math.abs(num), Math.abs(num))));

console.log(getMinSquaredNumbers([-777, 3, -2, 6, 45, -20]));
