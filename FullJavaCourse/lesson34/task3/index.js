const baseUrl = "https://crudcrud.com/api/a21dd6d95bbe48a29d7428da8cf8371e";

const emailEL = document.querySelector("[name=email]");
const userNameEl = document.querySelector("[name=name]");
const passwordEl = document.querySelector("[name=password]");
const submitForm = document.querySelector(".login-form");
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
  console.log(newUser);
  alert({newUser});
};

const onFormsubmit = () => {
  submitForm.reportValidity() === true
    ? (registerBtn.disabled = false)
    : (registerBtn.disabled = true);
    
    if(!registerBtn.hasAttribute('disabled')) {
        registerBtn.setAttribute('enabled', '')
    }
};

submitForm.addEventListener("change", onFormsubmit);
registerBtn.addEventListener("click", onRegisterUser);
