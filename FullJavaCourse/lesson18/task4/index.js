const saveCalls = (func) => {
  let calls = [];

  function withMemory(...args) {
    calls.push(args);
    return func.apply(this, args);
  }
  withMemory.calls = calls;

  return withMemory;
};

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

testWithMemory.saveCalls;

const user = {
  name: "John",
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);
methodWithMemory.apply({ name: "Tom" });
methodWithMemory.calls;


