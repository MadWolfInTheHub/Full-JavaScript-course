export const finishForm = () => {
  const formInput = document.querySelector(".login-form");
  const loginInput = document.createElement("input");
  loginInput.setAttribute("type", "text");
  loginInput.setAttribute("name", "login");
  formInput.prepend(loginInput);

  const passwordInput = document.querySelector("input[name=password]");
  passwordInput.setAttribute("type", "password");
};
