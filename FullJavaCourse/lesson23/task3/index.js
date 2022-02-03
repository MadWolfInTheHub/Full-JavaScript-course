const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);
/* we need to check changes in each checkbox and according to this changes change the status of listed task */
const listTasks = document.querySelectorAll(".list__item");
const checkBox = document.querySelectorAll(".list__item-checkbox");

const checkBoxCheck = (event) => {
  console.log(event.target.checked);
  if (event.target.checked) {
    return event.target
      .closest(".list__item")
      .classList.add("list__item_done");
  } 
  return event.target.closest(".list__item").classList.remove("list__item_done");
};

const checkboxArr = Array.from(checkBox).forEach((el) => {
  el.addEventListener("change", checkBoxCheck);
});

/* we need to check cnages in input if its not empty we need to add text by cliking on the button 'create' to our object */

const createBtn = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input')

const addTask = () => {
  if(input.value) {
    listElem.textContent = '';
    tasks.unshift({text: input.value, done: false});
    renderTasks(tasks);
    input.value = '';  
  }
}

createBtn.addEventListener('click', addTask);

