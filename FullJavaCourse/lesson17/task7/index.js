const user = {
  firstName: "",
  lastName: "",
  fullName: "",
  age: 27,
  hooby: "programming",
  getFullName() {
    return (user.fullName = `${this.firstName} ${this.lastName}`);
  },
  setFullName(fullName) {
    return user.firstName = fullName.split(" ")[0],
    user.lastName = fullName.split(" ")[1];
  },
};

user.setFullName("John Doe");
console.log(user);
