/* находим нужные нам инпуты */
const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");
/* находим поля для вывода ошибки */
const errorEmail = document.querySelector(".error-text_email");
const errorPassword = document.querySelector(".error-text_password");
/* создаем проверочные функции на валидность текста в инпуте */
const isRequired = (value) => (value ? undefined : "Required");
const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";
/* записываем наши ф-ции валидаторы в массив для того чтобы мочь их переиспользоывать */
const validatorsDyFiled = {
  email: [isRequired, isEmail],
  password: [isRequired],
};
/* создаем ф-цию которая будет отбирать подходящий набор функций для проверки на валидность из нашего массыва */
const validate = (filedName, value) => {
  const validators = validatorsDyFiled[filedName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(", ");
};
/* проверка имеил инпута на валидность */
const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);
  errorEmail.textContent = errorText;
};
/* проверка инпута пароля на валидность */
const onPasswordChange = (event) => {
  const errorText = validate("password", event.target.value);
  errorPassword.textContent = errorText;
};
/* накидываем ивент на подходящие инпуты */
emailInputElem.addEventListener("input", onEmailChange);
passwordInputElem.addEventListener("input", onPasswordChange);
/*--------------- выводим данные с инпутов в алерт ----------------*/
/* стучимся к тег с инпутами */
const formElem = document.querySelector('.login-form');
/* выводим данные с инпутов в алерт */
const onFormsubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
    .reduce((acc, [field,value]) => ({...acc, [field]: value}), {})
    alert(JSON.stringify(formData));
}
/* вешаем на тэг событие */
formElem.addEventListener('submit', onFormsubmit);