const checkBox = document.querySelector(".task-status");

const checkBoxCheck = () => {
  console.log(checkBox.checked);
};

checkBox.addEventListener("change", checkBoxCheck);
