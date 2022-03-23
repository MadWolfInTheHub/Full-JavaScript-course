function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (num) {
  if (num < 0) return false;
    this.age = num;
  if (this.age >= 25) this.requestNewPhoto();
  return this.age;
};
const user1 = new User("Tom", 32);
const user2 = new User("Serhii", 28);

console.log(user1);
user2.sayHi();
user1.requestNewPhoto();
user2.setAge(25)
console.log(user2);