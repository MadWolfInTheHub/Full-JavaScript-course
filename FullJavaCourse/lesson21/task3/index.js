export const getItemsList = () => {
  const elemetsList = document.querySelectorAll(".technology");
  console.dir(elemetsList);
  return elemetsList;
};

export const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll(".tool"));
  console.dir(elementsArray);
  return elementsArray;
};

getItemsList();
getItemsArray();
