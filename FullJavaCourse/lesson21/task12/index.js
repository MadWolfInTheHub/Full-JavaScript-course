export const squaredNumbers = () => {
  const squaredNumbersList = document.querySelectorAll(".number");
  Array.from(squaredNumbersList).map((listItem) => {
    const squaredNumber = listItem.dataset.number * listItem.dataset.number;
    const dataSquaredNumber = listItem.setAttribute(
      "dataset-squared-number",
      `${squaredNumber}`
    );
    return dataSquaredNumber
  });
  return squaredNumbersList;
};

/* squaredNumbers(); */

/* const squaredNumbers = () => {
    const five = document.querySelector('.number');
    const squaredNumber = five.dataset.number * five.dataset.number;
    console.log(five.setAttribute('dataset-squared-number', `${squaredNumber}`));
}

squaredNumbers(); */
