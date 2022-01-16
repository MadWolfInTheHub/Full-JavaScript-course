/* function getArrayBounds(arr) {
  if (!Array.isArray(arr)) return null;

  return [arr.length, arr.shift(0), arr.pop(arr.length - 1)];
}

// examples
console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
console.log(getArrayBounds(10, 12, 14)); // ==> null
console.log(getArrayBounds([1])); // ==> [1, 1, 1]
 */

/* function swap(numbers) {
  const [a, ...rest] = numbers;
  return [...rest, a];
} */

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
/* function swapManual(numbers) {
  let num = [];
  let a = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    num.push(numbers[index]);
  }
  return num.concat(a);
} */

// examples
/* console.log(swap([1, 10, 9, 11])); */ // ==> [10, 9, 11, 1]
/* console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1] */
/* 
const getSubArray = (arr, numberOfElements) => {
  let subArray = [];
  for (let index = 1; index <= numberOfElements; index++) {
    subArray.push(arr.shift());
  }
  return subArray;
};

// examples
console.log(getSubArray([11, 4, 8, 3], 2)); // ==> [11, 4]
console.log(getSubArray([1, 2, 3, 4, 5], 3)); // ==> [1, 2, 3]
console.log(getSubArray(['some string', 'hello', 'I am happy'], 1)); // ==> ['some string']
 */
/* 
function squareArray(arr) {
  let copyCloneArr = arr.slice();
  let square = [];

  if (!Array.isArray(arr)) return null;
  for (let i = 0; i < arr.length; i++) {
    square.push(copyCloneArr.shift() * arr[i]);
  }
  return square;
}
// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
 */

/* function checkSum(arr) {
  if (!Array.isArray(arr)) return null;

  let copyArr = arr.slice();
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += copyArr.shift();
  }
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSum([7, 9, 15, 100]));
console.log(checkSum([7, 9, 15, 15]));
console.log(checkSum(7, 9, 15, 100));
console.log(checkSum([7, 9, 15, 50]));
console.log(checkSum([7, 9, 15, 300]));
console.log(checkSum([7, 9, 15, 10])); */

/* const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) return null;
  let copyArr = arr.slice();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(copyArr.shift() + delta);
    } else {
      result.push(copyArr.shift());
    }
  }
  return result;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
 */

/* function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;

  let copyArr = arr.slice();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.unshift(copyArr.shift());
  }
  return result;
}

console.log(reverseArray([7, 9, 15, 100]));
console.log(reverseArray([7, 9, 15, 15]));
console.log(reverseArray(7, 9, 15, 100));
console.log(reverseArray([7, 9, 15, 50]));
console.log(reverseArray([7, 9, 15, 300]));
console.log(reverseArray([7, 9, 15, 10]));
 */

/* function cloneArr(arr) {
  if (!Array.isArray(arr)) return null;

  let clone = arr.slice();

  return clone;
}

console.log(cloneArr([7, 9, 15, 100]));
console.log(cloneArr([7, 9, 15, 15]));
console.log(cloneArr([7, 9, 15, 50]));
console.log(cloneArr([7, 9, 15, 300]));
console.log(cloneArr([7, 9, 15, 10])); */

/* function checker(arr) {
  if (!Array.isArray(arr)) return null;

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      arr[0] = arr[i];
    }
  }
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr[0] = arr[i];
    }
  }
  console.log(min, max);
  const result = min + max > 1000 ? true : false;
  return result;
}
console.log(checker([7, 9, 15, 100]));
console.log(checker([7, 9, 16, 15]));
console.log(checker(7, 9, 15, 50));
console.log(checker([700, 800, 450, 300]));
console.log(checker([7, 9, 15, 10])); */

/* function sortAsc(array) {
  if (!Array.isArray(array)) return null;

  return array.sort((a, b) => a - b);
}

console.log(sortAsc([7, 9, 15, 100]));
console.log(sortAsc([7, 9, 16, 15]));
console.log(sortAsc(7, 9, 15, 50));
console.log(sortAsc([7, 9, 15, 10]));
console.log(sortAsc([156, 943, 572, 1432])); */

/* function sortDesc(array) {
  if (!Array.isArray(array)) return null;

   let itteration = array.length + 1;

  for (let i = array.length; i > 0; i--) {
    for (let j = array.length; j > 0; j--) {
      if (array[j - 1] < array[j]) {
        let temp = array[j - 1];

        array[j - 1] = array[j];
        array[j] = temp;

        itteration--;
      }
    }
    return array;
  }
}
console.log(sortDesc([7, 9, 15, 100]));
console.log(sortDesc([7, 9, 16, 15]));
console.log(sortDesc(7, 9, 15, 50));
console.log(sortDesc([7, 9, 15, 10]));
console.log(sortDesc([156, 943, 572, 1432])); */

/* let clients = ['Serhii', 'Asya', 'Stacy', 'Mary', 'Tom'];
let balance = [1000, 985, 100, 2500, 1785]; */

/* function withdraw(clients, balances, client, amount) {
  for (let index = 0; index < clients.length; index++) {
    if (clients[index] === client) {
      const res = balances[index] - amount > 0 ? balances[index] - amount : -1;
      return res;
    }
  }
}

console.log(
  withdraw(
    ['Serhii', 'Asya', 'Stacy', 'Mary', 'Tom'],
    [1000, 985, 100, 2500, 1785],
    'Stacy',
    500
  )
); */

'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
/* const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};

// examples
console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
 */
/* vlozhennii tsikl v tsikle */
/* function removeDuplicates(array) {
  if (!Array.isArray(array)) return null;
  let result = [];
  array.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
}
console.log(removeDuplicates([2, 4, 9, 35, 2, 4, 35]));
console.log(removeDuplicates([88, 345, 88, 345, 84]));
 */
/* 
function uniqueCount(array) {
  if (!Array.isArray(array)) return null;

  let unique = [];
  let check = [];
  let sum = 0;

  array.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    } else if (!check.includes(element)) {
      check.push(element);
      sum += 1;
    }
  });
  return sum;
}

console.log(uniqueCount([2, 4, 9, 35, 2, 4, 4, 4, 35]));
console.log(uniqueCount([88, 345, 88, 345, 84])); */

/* const getSpecialNumbers = (arr) => arr.filter((arr) => arr % 3 === 0);

console.log(getSpecialNumbers([6, 9, 10, 2, 5, 3, 15]));
 */
/* const flatArray = (arr) =>
  arr
    .slice()
    .reduce((acc, num) => {
      return acc.concat(num);
    }, [])

    .sort((a, b) => a - b);

console.log(flatArray([4, 8, [100, 34, 7], 90, 8, [2, 5, 364]]));
 */
/* function reverseArray(num) {
  if (!Array.isArray(num)) return null;
  let res = num.slice().reverse();
  return res;
}

console.log(reverseArray([4, 8, 100, -4, 999])); */

/* function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) return null;

  let res = arr.slice().map((num) => {
    if (num % 2 === 0) {
      return num + delta;
    } else {
      return num;
    }
  });
  return res;
}

console.log(increaseEvenEl([-2, 8, 13, 90, 6, 111], 4));
console.log(increaseEvenEl(-2, 8, 13, 90, 6, 111, 4)); */

'use strict';

/* const withdraw = (clients, balances, client, amount) => {
  if (!Array.isArray(clients, balances)) return null;
  const res =
    balances[clients.indexOf(client)] - amount > 0
      ? balances[clients.indexOf(client)] - amount
      : -1;

  const decrise = console.log(res);
  return res;
}; */

// 1. find client's index in clients array
// 2. find the amount of money on client's index
// 3. decrise clients balance accotding to the amount
//example 1:

//input
/* withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
 */
//output
//-1
//и массив balances должен быть [1400, 87, -6]

/* function filterNames(arr, text) {
  if (!Array.isArray(arr)) return null;

  const res = arr.filter((name) => name.includes(text) && name.length > 5);
  return res;
}

console.log(
  filterNames(['Serhii', 'Joe', 'Tom', 'Stacy', 'Ann', 'Jessy'], 'e')
);
 */
/* function arrAverage(arr) {
  if (!Array.isArray(arr)) return null;

  const res = arr.reduce((acc, num) => acc + num) / arr.length;
  return res;
}

console.log(arrAverage([25, 89, 36, 98, 567])); */

function usersCountByCity(users) {
  if (!Array.isArray(users)) return null;

  let res = {};
  for (let i = 0; i < users.length; i++) {
    console.log(res.push(i.city));
  }

  return res;
}

// examples
const users = [
  {
    id: 888,
    name: "Denis",
    age: 44,
    city: 'Kyiv',
  },
  {
    id: 333,
    name: 'Alex',
    age: 33,
    city: 'Lviv',
  },
  {
    id: 392,
    name: 'Nastya',
    age: 22,
    city: 'Kyiv',
  },
  {
    id: 123,
    name: 'Violetta',
    age: 15,
    city: 'Odesa',
  },
  {
    id: 640,
    name: 'Mykola',
    age: 31,
    city: 'Lviv',
  },
];

usersCountByCity(users); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }

// 1. find user names
// 2. check if unique
// 3. count
