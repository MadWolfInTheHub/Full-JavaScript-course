/* export */ const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  const listElem = document.querySelector(".list");

  const listItemsElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
        if (done) {
            listItemElem.classList.add('list__item_done')
        } 

      const checkBoxElem = document.createElement("input");
      checkBoxElem.classList.add("list__item-checkbox");
      checkBoxElem.setAttribute("type", "checkbox");
      checkBoxElem.checked = done;

      listItemElem.append(checkBoxElem, text);
      return listItemElem;
    });
  listElem.append(...listItemsElems);
};

renderTasks(tasks);
