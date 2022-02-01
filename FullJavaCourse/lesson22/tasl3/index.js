const checkBox = document.querySelector(".task-status");
checkBox.setAttribute("checked", "true");
const check = document.querySelector('input[type=checkbox]:checked');


const checkBoxCheck = () => {
  console.log(check.value);
};

checkBox.addEventListener("click", checkBoxCheck);
