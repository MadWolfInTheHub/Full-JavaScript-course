export const asyncCalculator = (number) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${number}`);
      resolve(number);
    }, 500);
  })
    .then((data) => {
      const pr = new Promise((resolve) => {
        const result = data * data;
        setTimeout(() => {
          console.log(`Squared nimber: ${result}`);
          resolve(result);
        }, 500);
      });
      return pr;
    })
    .then((data) => {
      const res = data * 2;
      console.log(`Doubled number: ${res}`);
      return res;
    });
    return p;
};

/* asyncCalculator(5)
.then(value => console.log(value)) */
