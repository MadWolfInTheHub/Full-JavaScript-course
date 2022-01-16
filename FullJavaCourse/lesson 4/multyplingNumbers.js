const m = 10;
const n = 15;
let result = 1;

for (let index = m; index <= n; index++) {
  if (index % 2 === 1) {
    result *= index;
  }
}

console.log(result);
