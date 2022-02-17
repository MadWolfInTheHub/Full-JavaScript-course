export const mult = (a) => (b) => a * b;

export const twice = (num) => mult(num)(2);

export const triple = (num) => mult(num)(3); 


console.log(mult(5)(4));
console.log(twice(7));
console.log(triple(3));