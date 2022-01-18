const getParsedIntegers = (arr) => arr.map((num) => Number.parseInt(num));
console.log(getParsedIntegers([5, 14.15, -21, -32.14, '15', '16.578', NaN, Infinity, null, '1text']));


const getParsedIntegersV2 = (arr) => arr.map((num) => parseInt(num));
console.log(getParsedIntegersV2([5, 14.15, -21, -32.14, '15', '16.578', NaN, Infinity, null, '1text']));


const getParsedFloats = (arr) => arr.map((num) => Number.parseFloat(num));
console.log(getParsedFloats([5, 14.15, -21, -32.14, '15', '16.578', NaN, Infinity, null, '1text']));

const getParsedFloatsV2 = (arr) => arr.map((num) => parseFloat(num));
console.log(getParsedFloatsV2([5, 14.15, -21, -32.14, '15', '16.578', NaN, Infinity, null, '1text']));