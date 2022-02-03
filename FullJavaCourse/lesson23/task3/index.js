const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

tasks.forEach(el => el.id = getRandomInt(1, 1000));
console.log(tasks)
const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      listItemElem.setAttribute("data-id", `${id}` );;;
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", `${id}` );;
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
const newListIteam = (event) => event.target.closest(".list__item")
const renderList = () => {
  listElem.textContent = "";
  renderTasks(tasks);
};

const newTask = (event) => {
  const result = tasks.find(({ id }) => String(id) === event.target.dataset.id);
  console.log(result)
  result.done = event.target.checked
  renderList();
}

const onBoxSelect = (event) => {
  const isCheckBox = event.target.classList.contains("list__item-checkbox");

  if (!isCheckBox) {
    return;
  }
  newTask(event);
};
listElem.addEventListener("click", onBoxSelect);

/* we need to check cnages in input if its not empty we need to add text by cliking on the button 'create' to our object */

const createBtn = document.querySelector(".create-task-btn");
const addTask = () => {
  const input = document.querySelector(".task-input");
  if (input.value) {
    tasks.unshift({ text: input.value, done: false });
    input.value = "";
  }
  renderList();
};
createBtn.addEventListener("click", addTask);