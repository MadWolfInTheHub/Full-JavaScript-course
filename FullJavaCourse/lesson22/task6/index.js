const buttons = document.querySelectorAll(".btn");

const handleClick = () => {
  console.log(el.textContent);
};

const buttonsArr = Array.from(buttons).forEach((el) => {
  el.addEventListener("click", handleClick);
});

/* привет */
