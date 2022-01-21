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
const sortContacts = (contacts, isAsc) => {
  if (!Array.isArray(contacts)) return null;

  return contacts.slice().sort((a, b) => {
    if (isAsc === false) {
      return b.name.localeCompare(a.name);
    }
    return a.name.localeCompare(b.name);
  });
};

console.log(sortContacts(contacts, false));
console.log(sortContacts(contacts, true));
