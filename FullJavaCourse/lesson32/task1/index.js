const getValueWithDela = (num, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, delay);
  });

const asyncNumbers1 = getValueWithDela(43, 1000);
const asyncNumbers2 = getValueWithDela(43, 2000);
const asyncNumbers3 = getValueWithDela(43, 3000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers).then((numbers) => getSum(numbers));
};
/* asyncSum(asyncNumbers1, asyncNumbers2, asyncNumbers3).then((res) =>
  console.log(res)
);
 */