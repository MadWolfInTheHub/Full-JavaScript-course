export const calc = (expression) => {
  if (typeof expression !== "string") return null;
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
  return `${expression} = ${result}`;
};
