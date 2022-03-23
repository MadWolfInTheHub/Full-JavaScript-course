/* const name = 'Serhii';

const user = {
  name,
};

console.log(user);
 */

/* const concatProps = (obj) => {
  let res = [];
  for (let key in obj) {
    res.push([key]);
  }
  return res;
};

// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
 */

/* const transaction = {
  currency: 'USD',
  value: 170,
  operation: 'sale',
  agent: {
    country: 'Ukraine',
    company: 'NYSE',
  },
  'operation time': 1584029990001,
};

/* выведи в консоль значение свойства 'currency' с помощью точки */
/* console.log(transaction.currency); */

/* выведи в консоль значение свойства 'value' с помощью квадратных скобок */
/* console.log(transaction['value']);
const key = transaction['operation']; */
/* выведи в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */
/* console.log(key); */

/* выведи в консоль значение свойства 'company' используя квадратные скобки */
/* console.log(transaction['agent']['company']); */

/* выведи в консоль значение свойства 'country' используя точку */
/* console.log(transaction.agent.country);
 */
/* выведи в консоль значение свойства 'operation time' используя квадратные скобки */
/* console.log(transaction['operation time']);
 */

/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

/* const pickProps = (obj, props) => {
  let res = {};

  for (let key in obj) {
    if (props.includes(key)) {
      res[key] = obj[key];
    } else {
      continue;
    }
  }
  return res;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
 */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

/* const getAdults = (obj) => {
  let res = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      res[key] = obj[key];
    }
  }
  return res;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); */ // ==> { Ann: 56 }
/*  */
/* function getAdults(obj) { */
/*   return Object.entries(obj) */
/*     .filter((user) => user[1] >= 18) */
/*     .map((user = user[0])); */
/* } */
/*  */
/* console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); */

/* const getAdults = (obj) =>
  Object.entries(obj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({ Ann: 56, Andrey: 7 }));
 */
'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
/* function buildObject(keysList, valuesList) {
  if (!Array.isArray(keysList, valuesList)) return null;
  let res = {};
  keysList.forEach((el) => {
    res[el] = valuesList.shift();
  });
  return res;
}

console.log(buildObject(['name', 'address', 'age'], ['Bob', 'Ukraine', 34]));
// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
 */
/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

/* function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

// put your code here
function addPropertyV2(userData, userId) {
  let res = {};
  res.id = userId;

  return Object.assign(userData, res);
}

// put your code here
function addPropertyV3(userData, userId) {
  let res = {};
  res.id = userId;

  const copyObj = Object.assign({}, userData, res);
  return copyObj;
}

// put your code here
function addPropertyV4(userData, userId) {
  let res = {};
  res.id = userId;
  const { ...rest } = userData;

  return Object.assign({}, { ...rest }, res);
}

const user = {
  name: 'Sam',
};
console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '1234567'));
console.log(addPropertyV3(user, '1234567'));
console.log(addPropertyV4(user, '1234567')); */

/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

/* function mergeObjectsV2(obj1, obj2) {
  return Object({}, obj2, obj1);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1, obj2)); */ // ==> { name: 'Tom', age: 17, student: false }

/* const getPeople = (obj) => {
  let res = [];
  Object.values(obj)
    .flat()
    .forEach((el) => res.push(Object.values(el)));
  return res.flat();
};

const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
console.log(getPeople(rooms)); */
/* const getTotalRevenue = (transactions) => {
  if (!Array.isArray(transactions)) return null;
  let sum = 0;
  transactions.forEach((el) => (sum += el.amount));
  console.log(sum);
  return sum;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); */ // ==> 310
function compareObjects(obj1, obj2) {
  const keys1 = Object.values(obj1);
  const keys2 = Object.values(obj2);
  return keys2.every((el) => keys1.includes(el));
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true

/* const getCustomersList = (obj) =>
  Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((a, b) => a.age - b.age);

const customers = {
  'cstomers-id-1': {
    name: 'William',
    age: 54,
  },
  'cstomers-id-2': {
    name: 'Tom',
    age: 17,
  },
};
console.log(getCustomersList(customers));
 */
