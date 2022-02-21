/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (num) => {
  const p = new Promise((resolve) => {
    resolve(num);
  });
  return p;
};

/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
/* hi */