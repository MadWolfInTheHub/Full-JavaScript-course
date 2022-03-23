const calc = (expression) => {
  const [a, operator, b] = expression.split(" ");
  let result;

  switch (operator) {
    case "+":
      result = Number(a) + Number(b);
      break;
    case "-":
      result = Number(a) - Number(b);
      break;
    case "*":
      result = Number(a) * Number(b);
      break;
    case "/":
      result = Number(a) / Number(b);
      break;
  }
  return `${expression} = ${result}`
};

console.log(calc("1 - 4"));
console.log(calc("14 + 4"));
console.log(calc("1 + 4"));
console.log(calc("9 - 44"));
console.log(calc("9 * 44"));
console.log(calc("9 / 44"));
