const baseUrl =
  "https://crudcrud.com/api/a21dd6d95bbe48a29d7428da8cf8371e/users";

const emailEL = document.querySelector("[name=email]");
const userNameEl = document.querySelector("[name=name]");
const passwordEl = document.querySelector("[name=password]");
const submitForm = document.querySelector(".login-form");
const registerBtn = document.querySelector(".submit-button");

const createUser = (userData) => {
  console.log(userData);
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json=utf-8",
    },
    body: userData,
  });
};

function getUsersList() {
  return fetch(baseUrl).then((response) => response.json());
}

const onRegisterUser = () => {
  const newUser = {
    email: emailEL.value,
    userName: userNameEl.value,
    password: passwordEl.value,
    id: Math.random().toString(),
  };

  createUser(JSON.stringify(newUser)).then(() => {
    console.log("User created");
  });
  alert(getUsersList());
};

const onFormsubmit = () => {
  submitForm.reportValidity() === true
    ? (registerBtn.disabled = false)
    : (registerBtn.disabled = true);

  if (!registerBtn.hasAttribute("disabled")) {
    registerBtn.setAttribute("enabled", "");
  }
};

submitForm.addEventListener("input", onFormsubmit);
submitForm.addEventListener("submit", onRegisterUser);
/* registerBtn.addEventListener("submit", onRegisterUser); */
