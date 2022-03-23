/* eslint-disable max-classes-per-file */
class User {
  constructor(id, name, sessionId) {
    this._id = String(id);
    this._name = String(name);
    this._sessionId = String(sessionId);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this.users
  }

  getUserNames() {
    return this.users.map(user => user._name);
  }

  getUserIds() {
    return this.users.map(user => user._id);
  }

  getUserNameById(id) {
    return this.users.filter(user => user._id === String(id)).map(user => user._name).toString();
  }
}

const user = new User("1", "Tom", "session-id");
const user1 = new User("2", "Serhii Kryvenko", "session-id");
console.log(user);
// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

const usersList = new UserRepository([user, user1]);

console.log(usersList);
console.log(usersList.getUserNames());
console.log(usersList.getUserIds());
console.log(usersList.getUserNameById('2'));
console.log(usersList);
