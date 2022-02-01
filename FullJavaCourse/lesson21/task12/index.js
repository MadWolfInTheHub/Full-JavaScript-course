export const squaredNumbers = () => {
  const five = document.querySelectorAll(".number");
  Array.from(five).map((listItem) => {
    const squaredNumber = listItem.dataset.number * listItem.dataset.number;
    const dataSquaredNumber = listItem.setAttribute(
      "dataset-squared-number",
      `${squaredNumber}`
    );
    return dataSquaredNumber
  });
  return five;
};

/* squaredNumbers(); */

/* const squaredNumbers = () => {
    const five = document.querySelector('.number');
    const squaredNumber = five.dataset.number * five.dataset.number;
    console.log(five.setAttribute('dataset-squared-number', `${squaredNumber}`));
}

squaredNumbers(); */
