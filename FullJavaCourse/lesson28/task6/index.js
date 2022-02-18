export const maxFibonacci = (num) => {
  const sum = (a) => (b) => a + b;
  let amountToDecrease = 0;
  let previousNUmber = 1;
  let currentNUmber = 1;
  let res = 0;

  while (res <= num) {
    res = sum(previousNUmber)(currentNUmber);
    amountToDecrease = previousNUmber;
    previousNUmber = currentNUmber;
    currentNUmber = res;
  }
  return res - amountToDecrease;
};

console.log(maxFibonacci(8));