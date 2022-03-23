/* const a = 4;
const b = 2;

console.log('a:', a);
console.log('b:', b);
console.log('a - b =', a - b);
console.log('a + b = ', a + b);
console.log('a / b = ', a / b);
console.log('a * b =', a * b);
 */

/* const a = 17;
const b = 17.17;
const c = '17';
const d = '17';
const e = "I'm a string";
const f = false;
const g = true;
const h = null;
const i = undefined;
const j = Symbol("I'm a Symbol");
const k = { name: 'John' };
const l = [1, 2, 3, 4];
const m = function run() {
  return 17;
};

console.log('a:', typeof a);
console.log('b:', typeof b);
console.log('c:', typeof c);
console.log('d:', typeof d);
console.log('e:', typeof e);
console.log('c:', typeof c);
console.log('f:', typeof f);
console.log('g:', typeof g);
console.log('h:', typeof h);
console.log('i:', typeof i);
console.log('j:', typeof j);
console.log('k:', typeof k);
console.log('l:', typeof l);
console.log('m:', typeof m);
 */

/* const goodNumber = 17;
let anotherNumber = goodNumber;
anotherNumber = 77;

console.log (goodNumber);
console.log(anotherNumber);

const customer = {
  name: 'Jone',
  age: 17,
};

let anotherCustomer = customer;
anotherCustomer.age = 20;

console.log(customer.age);
console.log(anotherCustomer.age);
 */

/* eslint-disable */

// Унарный плюс приводит операнд к числу
/* +17;
+'77';

// Бинарный плюс складывает строки или прибавляет числа
10 + '5';
'some' + 'text';

// Математические операции с undefined возвращают NaN
undefined + 1;
null + 8;
undefined + '5';
7 - null;
5 - undefined;
'text' + null;

// Постфиксная и префиксная форма записи
let num = 17;
++num;
num++;

// математические операторы приводят операнды к числам
const a = 17;
const b = -a;
'24' / 4;
18 * '3';
'9' - '3';
'seventeen' / 3;
4 * 'four';
17 / 0;

10 + 'seven';
undefined + 1;
null + 8;
undefined + '5';
'text' + null;

console.log('+17:', +17);
console.log("+'77':", +'77');
console.log("10 + '5':", 10 + '5');
console.log("'some' + 'text':", 'some' + 'text');
console.log('undefind + 1:', undefined + 1);
console.log('null + 8:', null + 8);
console.log('7 - null:', 7 - null);
console.log('5 - undefined:', 5 - undefined);
console.log("'text' + null:", 'test' + null);
console.log('let num = 17:', num);
console.log('++num:', --num);
console.log('num++:', num--);
console.log('const a = 17:', a);
console.log('const b = -a:', -a);
console.log("'24' / 4:", '24' / 4);
console.log("18 * '3':", 18 * '3');
console.log("'9' - '3':", '9' - '3');
console.log("'seventeen' / 3:", 'seventen' / 3);
console.log("4 * 'four':", 4 * 'four');
console.log('17 / 0:', 17 / 0);
console.log("10 + 'seven':", 10 + 'seven');
console.log('undefined + 1:', undefined + 1);
console.log('null + 1:', null + 1);
console.log("undefined + '5':", undefined + '5');
console.log("'text' + null:", 'text' + null); */

// code below must be finished ;)

/* cast to string */
/* console.log('17 to string is ' + String(17));
console.log('-17.17 to string is ' + String(-17.17));
console.log('false to string is ' + String(false));
console.log('null to string is ' + String(null));
console.log('undefined to string is ' + String(undefined));
console.log('0 to string is ' + String(0)); */

/* cast to number */
/* console.log("'17' to number is " + Number(17));
console.log('true to number is ' + Number(true));
console.log('false to number is ' + Number(false));
console.log('null to number is ' + Number(null));
console.log('undefined to number is ' + Number(undefined));
console.log("'   20   ' to number is " + Number('   20   '));
console.log("'      ' to number is " + Number('      '));
console.log("'   30d   ' to number is " + Number('   30d   '));

/* cast to boolean */
/* console.log('null to boolean is ' + Boolean(null));
console.log('undefined to boolean is ' + Boolean(undefined));
console.log('0 to boolean is ' + Boolean(0));
console.log('-0 to boolean is ' + Boolean(-0));
console.log('NaN to boolean is ' + Boolean(NaN));
console.log("'' to boolean is " + Boolean(''));
console.log("' ' to boolean is " + Boolean(' '));
console.log('17 to boolean is ' + Boolean(17));
console.log("'Hello' to boolean is " + Boolean('Hello')); */

/* eslint-disable */

/* Результатом сравнения является булевое значение */

/* Сравнение чисел */
/* const a = 17;
const b = 5;
a > b;
console.log('a > b:', a > b);
a <= b;
console.log('a <= b:', a <= b);
a == b;
console.log('a == b:', a == b);
a != b;
console.log('a != b:', a != b); */

/* Сравнение строк */
/* 'a' < 'b';
console.log("'a' < 'b':", 'a' < 'b');
'ab' > 'a';
console.log("'ab' > 'a':", 'ab' > 'a'); */

/* При сравнении переменных разных типов они преобразуются в числа */
/* '17' > 1;
console.log("'17' >  1:", '17' > 1); */

/* Строгое сравнение */
/* 17 === 1;
console.log('17 === 1:', 17 === 1);
17 === 17;
console.log('17 === 17:', 17 === 17);
17 === '17';
console.log("17 === '17':", 17 === '17');
17 === true;
console.log('17 === true:', 17 === true);
'0' === '';
console.log("'0' === '':", '0' === '');
true === false;
console.log('true === false:', true === false);
true === true;
console.log('true === true:', true === true);
null === undefined;
console.log('null === undefined:', null === undefined);
false === 0;
console.log('false === 0:', false === 0); */
/* Нестрогое сравнение */
/* 17 == '17';
console.log("17 == '17':", 17 == '17');
'0' == '';
console.log("'0' == '':", '0' == '');
0 == '';
console.log("0 == '':", 0 == '');
null == undefined;
console.log('null == undefined:', null == undefined);
false == 0;
console.log('false == 0:', false == 0); */

/* Осторожно c null и undefined */
/* undefined == null;
console.log('undefined == null:', undefined == null);*\
undefined == 0;
console.log('undefined == 0:', undefined == 0);
null == 0;
console.log('null == 0:', null == 0);
undefined < 0;
console.log('undefined < 0:', undefined < 0);
undefined > 0;
console.log('undefined > 0:', undefined > 0); */

/* eslint-disable */

/* оператор || (OR) */
false || true;
console.log('false || true:', false || true);
false || true || false;
console.log('false || true || false:', false || true || false);
false || false || false;
console.log('false || false || false:', false || false || false);
/* оператор && (AND) */
false && true;
console.log('false && true:', false && true);
false && true && false;
console.log('false && true && false:', false && true && false);
true && true && true;
console.log('true && true && true:', true && true && true);

/* Логические операторы могут применятся к любым типам данных */

/* || находит первое истинное значение */
'text' || false;
console.log("'text' || false:", 'text' || false);
true || 'text';
console.log("true || 'text':", true || 'text');
undefined || null || 0 || '' || null;
console.log(
  "undefined || null || 0 || '' || null:",
  undefined || null || 0 || '' || null
);

const customAmount = null; // не выводим
const defaultAmount = 17; // не выводим
const amount = customAmount || defaultAmount; // выводим значение переменной amount в формате console.log('amount:', amount);
console.log('amount:', amount);
/* && находит первое ложное значение */
'text' && false;
console.log("'text' && false:", 'text' && false);
true && 'text';
console.log("true && 'text':", true && 'text');
undefined && null && 0 && '' && null;
console.log(
  "undefined && null && 0 && '' && null:",
  undefined && null && 0 && '' && null
);

/* оператор отрицания (OR) */
!true;
console.log('!true:', !true);
!false;
console.log('!false:', !false);
!'text';
console.log("!'text':", !'text');
!!'text';
console.log("!!'text':", !!'text');

/* eslint-disable */

if (true) console.log("I'm in");

if (false) {
  console.log("I'm not in");
}

if ('text') {
  console.log('Yes');
}

if (null) {
  console.log('Yes');
} else {
  console.log('Else');
}

// create age variable here
let age = 22;
if (age < 19) {
  console.log('Too young');
} else if (age >= 16 && age < 18) {
  console.log('Almost ready');
} else if (age >= 18 && age < 65) {
  console.log('Ready');
} else {
  console.log('Else');
}

// Тернаный оператор ? : ( const result = условие ? значение1 : значение2; )

// create amount variable here
let amount = 5;
const result = amount > 17 ? 'full' : 'empty';
console.log(result);

/* eslint-disable */

/* Этот код менять не нужно */
const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

/* В коде ниже нужно использовать правильные операторы после знака присваивания */
const activeUser = anotherUser || defaultUserName;
const hasAccess = isAdmin || isLoggedIn;
const isTruthy = message != anotherMessage;
const isFalsy = !isLoggedIn;
const isNotTrue = typeof message === 'number';
const isTrue = typeof message != 'boolean';

console.log(activeUser);
console.log(hasAccess);
console.log(isTruthy);
console.log(isFalsy);
console.log(isNotTrue);
console.log(isTrue);
