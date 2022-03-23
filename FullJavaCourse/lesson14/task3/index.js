let memo = 0;

export const add = (num) => {
  return (memo += num);
};
export const decrease = (num) => {
  return (memo -= num);
};
export const reset = () => {
  return (memo = 0);
};
export const getMemo = (num) => {
  return (memo = num);
};
console.logadd(4);

