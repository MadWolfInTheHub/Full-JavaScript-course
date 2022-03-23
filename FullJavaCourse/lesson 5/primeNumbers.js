/**
 * @param {number} num
 * @return {undefined}
 */
function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    let primeNumber = 0;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primeNumber = 1;
        break;
      }
    }
    if (i > 1 && primeNumber === 0) {
      console.log(i);
    }
  }
}
getPrimes(100);
