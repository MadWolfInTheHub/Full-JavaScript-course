const reverseString = text => 
(typeof text !== 'string') 
? null 
: copy = text.split('').reverse().join('');

console.log(reverseString('qwertyuiop'));
console.log(reverseString('zxcvbnm,'));
console.log(reverseString('asdfghjkl'));
console.log(reverseString([]));
console.log(reverseString([1]));
console.log(reverseString(1));