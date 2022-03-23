const buttons = document.querySelectorAll(".btn");

const handleClick = (event) => {
  console.log(event.target.textContent);
};

const buttonsArr = Array.from(buttons).forEach((el) => {
  el.addEventListener("click", handleClick);
});