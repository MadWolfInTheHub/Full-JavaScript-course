export const reverseArray = (arr) => {
  const copyArr = arr.slice();
  if (!Array.isArray(arr)) return null;
  return copyArr.reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  let result = balances[clients.indexOf(client)] - amount;
  if (result >= 0) return result;
  return -1;
};

export const getAdults = (obj) => {
  const adultAge = 18;
  const res = {};
  for (const key in obj) {
    if (obj[key] >= adultAge) {
      res[key] = obj[key];
    }
  }
  return res;
};
