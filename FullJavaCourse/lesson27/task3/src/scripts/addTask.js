import { getItem, setItem } from "./storage.js";
import { renderTasks } from "./renderer.js";

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";
  const tasksList = getItem("taskList") || [];

  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random(),
  });

  setItem("taskList", newTasksList);
  renderTasks();
};
