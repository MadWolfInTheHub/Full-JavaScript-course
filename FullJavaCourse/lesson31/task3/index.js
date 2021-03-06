const successPromise = new Promise(resolve => {
  resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
  .then(number => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then(number => {
    /* fix this handler */
    const squaredNumber = number * number;
    return squaredNumber;
  })
  .then(result => {
    console.log(result); // 256
    return result;
  });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
  .then(number => {
    const num = number * 10;
    return num;
  })
  .then(result => {
    console.log(result); // 320
    return result;
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
