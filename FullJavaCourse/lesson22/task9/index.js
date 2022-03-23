const buttons = document.querySelectorAll(".pagination__page");


const handleClick = (event) => {
  console.log(event.target.getAttribute('data-page-number'));
};

const buttonsArr = Array.from(buttons).forEach((el) => {
    el.addEventListener("click", handleClick);
  });
