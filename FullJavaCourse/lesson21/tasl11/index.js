export const manageClasses = () => {
  const selectedOne = document.querySelector(".one");
  selectedOne.classList.add("selected");

  const selectedTwo = document.querySelector(".two");
  selectedTwo.classList.remove("selected");

  const selectedThree = document.querySelector(".three");
  selectedThree.classList.toggle("three_done");

  const selectedFour = document.querySelector(".four");
  if (selectedFour.classList.contains("some-class")) {
    selectedFour.classList.add('another-class');
  }
};


