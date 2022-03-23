const getFinitNumbers = (arr) =>
  arr.filter((num) => Number.isFinite(num) === false);

console.log(
  getFinitNumbers([5, 14.15, -21, -32.14, "15", NaN, Infinity, null, "text"])
);

const getFinitNumbersV2 = (arr) => arr.filter((num) => isFinite(num) === false);

console.log(
  getFinitNumbersV2([5, 14.15, -21, -32.14, "15", NaN, Infinity, null, "text"])
);

const getNaN = (arr) => arr.filter((num) => Number.isNaN(num) === true);

console.log(getNaN([5, 14.15, -21, -32.14, "15", NaN, Infinity, null, "text"]));

const getNanV2 = (arr) => arr.filter((num) => isNaN(num) === true);

console.log(
  getNanV2([5, 14.15, -21, -32.14, "15", NaN, Infinity, null, "text"])
);

const getIntegers = (arr) =>
  arr.filter((num) => Number.isInteger(num) === true);

console.log(
  getIntegers([5, 14.15, -21, -32.14, "15", NaN, Infinity, null, "text"])
);
