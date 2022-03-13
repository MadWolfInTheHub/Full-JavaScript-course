const baseUrl = "https://crudcrud.com/api/a21dd6d95bbe48a29d7428da8cf8371e";

const emailEL = document.querySelector("[name=email]");
const userNameEl = document.querySelector("[name=name]");
const passwordEl = document.querySelector("[name=password]");
const registerBtn = document.querySelector(".submit-button");

const creatUser = (newUserData) => {
  return fetch(`${baseUrl}/users`, {
    metod: "POST",
    headers: {
      "Content-Type": "application/json=utf-8",
    },
    body: JSON.stringify(newUserData),
  });
};

const onRegisterUser = () => {
  const newUser = {};
  newUser.email = emailEL.value;
  newUser.userName = userNameEl.value;
  newUser.password = passwordEl.value;
  creatUser(newUser);
 /*  console.log(newUser); */
  alert(newUser);
};

const validityCheck = () => {
  if (
    emailEL.reportValidity() &&
    userNameEl.reportValidity() &&
    passwordEl.reportValidity()
  ) {
    registerBtn.removeAttribute("disabled");
  }
};

registerBtn.addEventListener("click", validityCheck);
registerBtn.addEventListener("click", onRegisterUser);
