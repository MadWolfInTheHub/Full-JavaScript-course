const spinnerElement = document.querySelector(".spinner");

export const hideSpinner = () => {
  spinnerElement.classList.add("spinner_hidden");
};

export const showSpinner = () => {
  spinnerElement.classList.remove("spinner_hidden");
};
