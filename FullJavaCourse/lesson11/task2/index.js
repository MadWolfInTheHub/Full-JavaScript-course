const sortContacts = (contacts, isAsc) => {
  let res = contacts.sort((a, b) => {
    if (isAsc === true) {
        return a.name.localeCompare(b.name);
    } else if (isAsc === false) {
        return b.name.localeCompare(a.name);
    }
  });

  return res;
};

const contacts = [
  {
    name: "Serhii",
    phoneNumber: "111 - 111 - 11",
  },

  {
    name: "Asya",
    phoneNumber: "222 - 222 - 22",
  },

  {
    name: "Stacy",
    phoneNumber: "333 - 333 - 33",
  },

  {
    name: "Mary",
    phoneNumber: "777 - 777 - 77",
  },

  {
    name: "Nadiia",
    phoneNumber: "666 - 666 - 66",
  },

  {
    name: "Tom",
    number: "888 - 888 - 88",
  },
];

console.log(sortContacts(contacts, false));
console.log(sortContacts(contacts, true));
