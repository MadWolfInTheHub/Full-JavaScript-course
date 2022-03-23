/* export */ const event = {
  guests: [
    { name: "John", age: 18, email: "example@server.com" },
    { name: "Serhii", age: 28, email: "Esotericksv@gmail.com" },
    { name: "Ann", age: 17, email: "prosto@gmail.com" },
  ],
  message: "Welcome to the party!",
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
console.log(event.getInvitations());
