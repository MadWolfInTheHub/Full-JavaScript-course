const buttons = document.querySelectorAll(".btn");

const buttonsArr = Array.from(buttons).forEach((el) => {
    const handleClick = () => {
      console.log(el.textContent);
    };
    el.addEventListener("click", handleClick);
  });