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

const onRegisterUser = (e) => {
  e.preventDefault();
  const newUser = {
    name: userNameEl.value,
    email: emailEL.value,
    password: passwordEl.value,
  };

  createUser(newUser)
    .then((response) => response.json())
    .then((data) => alert(JSON.stringify(data)))
    .finally(() => {
      userNameEl.value = "";
      emailEL.value = "";
      passwordEl.value = "";
    });
};

const onFormsubmit = (e) => {
  e.preventDefault();
  const isValid = submitForm.reportValidity();
  if (isValid) {
    registerBtn.disabled = false;
  } else {
    registerBtn.disabled = true;
  }

  if (!registerBtn.hasAttribute("disabled")) {
    registerBtn.setAttribute("enabled", "");
  }
};


submitForm.addEventListener("change", onFormsubmit);
submitForm.addEventListener("submit", onRegisterUser);
/* registerBtn.addEventListener("submit", onRegisterUser); */
