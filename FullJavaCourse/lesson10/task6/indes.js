const getRandomNumbers = (length, from, to) => {
  if (Math.trunc(to) === Math.trunc(from)) return null;

  const min = Math.ceil(from);
  const max = Math.ceil(to);

  return new Array(length)
    .fill()
    .map((el) => Math.floor(Math.random() * (max - min) + min));
};

console.log(getRandomNumbers(5, 0.33, 1.22));
console.log(getRandomNumbers(5, 1.4, 10.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 30.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 30.22)); // ==> [3, 3, 2, 3, 2]
