export const createCalculator = () => {
  let memo = 0;

  function add(num) {
    memo += num;
  }
  function decrease(num) {
    memo -= num;
  }
  function reset() {
    memo = 0;
  }
  function getMemo(num) {
    num = memo;
    return num;
  }

  
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};


const calculator = createCalculator();
const calculatorNext = createCalculator();

calculator.getMemo(); // 0

calculator.add(3);

calculator.getMemo(); // 3

calculator.decrease(5);

calculatorNext.add(5);

calculatorNext.getMemo(); // 5

calculator.getMemo(); // -2

calculator.reset();

calculator.getMemo(); // 0



