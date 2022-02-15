const counterElement = document.querySelector(".counter");
const counterValureElement = document.querySelector(".counter__amount");

const onCounterChange = (event) => {
  const isButton = event.target.classList.contains("counter__btn");

  if (!isButton) {
    return;
  }

  const { action } = event.target.dataset;

  const oldValue = Number(counterValureElement.textContent);

  const newValue = action === "decrease" ? oldValue - 1 : oldValue + 1;
  localStorage.setItem("counterValue", newValue);

  counterValureElement.textContent = newValue;
};

counterElement.addEventListener("click", onCounterChange);

const onStorageChange = (event) => {
  console.log(event);
  counterValureElement.textContent = event.newValue;
};

window.addEventListener("storage", onStorageChange);

const onDocumentLoaded = () => {
  counterValureElement.textContent = localStorage.getItem("counterValue") || 0;
};

document.addEventListener("DOMContentLoaded", onDocumentLoaded);
