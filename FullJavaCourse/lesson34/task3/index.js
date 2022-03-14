const baseUrl = "https://622ed8d45c86fd315eb64055.mockapi.io/api/v1/users";

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
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
};

function getUsersList() {
  return fetch(baseUrl).then((response) => response.json());
}


const onRegisterUser = (e) => {
  e.preventDefault();
  const newUser = {
    name: userNameEl.value,
    email: emailEL.value,
    password: passwordEl.value,
  };

  createUser(newUser).then(() => {
    console.log("User created");
  });
  getUsersList().then((users) => {
    alert(users);
  });
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
