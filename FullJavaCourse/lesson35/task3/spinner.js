const spinnerElement = document.querySelector(".spinner");

export const hideSpinner = () => {
  spinnerElement.classList.remove(".spinner_hidden");
};

export const showSpinner = () => {
  spinnerElement.classList.add(".spinner_hidden");
};
