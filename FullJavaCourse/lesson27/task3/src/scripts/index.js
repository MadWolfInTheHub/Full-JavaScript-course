import { getItem, setItem } from "./storage.js";
import { renderTasks } from "./renderer.js";

const listElem = document.querySelector(".list");

/* we need to check changes in each checkbox and according to this changes change the status of listed task */
const renderList = () => {
  listElem.textContent = "";
  renderTasks();
};

const newTask = (event) => {
  const tasks = getItem("taskList");
  const result = tasks.find(({ id }) => String(id) === event.target.dataset.id);
  result.done = event.target.checked;
  setItem("taskList", tasks);
  renderList();
};

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
  let newTask;
  if (input.value) {
    const tasks = getItem("taskList") || [];
    newTask = tasks.concat({
      text: input.value,
      done: false,
      createDate: new Date().toISOString(),
      id: Math.random(),
    });
    input.value = "";
    setItem("taskList", newTask);
  }
  renderList();
};
createBtn.addEventListener("click", addTask);
renderTasks();