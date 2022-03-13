const baseUrl = "https://crudcrud.com/Dashboard/a21dd6d95bbe48a29d7428da8cf8371e";

const emailEL = document.querySelector("[name=email]");
const userNameEl = document.querySelector("[name=name]");
const passwordEl = document.querySelector("[name=password]");
const submitForm = document.querySelector(".login-form");
const registerBtn = document.querySelector(".submit-button");

function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

const onRegisterUser = () => {
  const newUser = {
    email: emailEL.value,
    userName: userNameEl.value,
    password: passwordEl.value,
  };
  createUser(newUser).then(() => {
    alert(newUser);
  });
};

const onFormsubmit = () => {
  submitForm.reportValidity() === true
    ? (registerBtn.disabled = false)
    : (registerBtn.disabled = true);
    
    if(!registerBtn.hasAttribute('disabled')) {
        registerBtn.setAttribute('enabled', '')
    }
};

submitForm.addEventListener("input", onFormsubmit);
registerBtn.addEventListener("click", onRegisterUser);
