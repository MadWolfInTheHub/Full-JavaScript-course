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
const restartTodoList = () => {
  listElem.textContent = "";
  renderTasks(tasks);
};

const onBoxSelect = (event) => {
  const isCheckBox = event.target.classList.contains("list__item-checkbox");
 
  if (!isCheckBox) {
    return;
  }

  tasks.forEach((el) => {
    if (
      el.text === event.target.closest(".list__item").textContent &&
      el.done === false
    ) {
      el.done = true;
      return event.target
        .closest(".list__item")
        .classList.add(".list__item_done");
    }
    if (
      el.text === event.target.closest(".list__item").textContent &&
      el.done === true
    ) {
      el.done = false;
      return event.target
        .closest(".list__item")
        .classList.remove("list__item_done");
    }
  });

  restartTodoList();
};

listElem.addEventListener("click", onBoxSelect);

/* we need to check cnages in input if its not empty we need to add text by cliking on the button 'create' to our object */

const createBtn = document.querySelector(".create-task-btn");
const input = document.querySelector(".task-input");

const addTask = () => {
  if (input.value) {
    tasks.unshift({ text: input.value, done: false });
    input.value = "";
  }
  restartTodoList();
};

createBtn.addEventListener("click", addTask);
