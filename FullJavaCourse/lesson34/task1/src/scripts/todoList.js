import { onCreateTask } from "./addTask.js";
import { onToggleTask, onDeleteTask } from "./renderList.js";

export const initTodoListHandlers = () => {
  const createBtn = document.querySelector(".create-task-btn");
  createBtn.addEventListener("click", onCreateTask);

  const onActionCheck = (event) => {
    const isCheckBox = event.target.classList.contains("list-item__checkbox");
    const isDeleteBtn = event.target.classList.contains(
      "list-item__delete-btn"
    );

    if (!isCheckBox && !isDeleteBtn) {
      return;
    }

    if (isCheckBox) {
      return onToggleTask(event);
    }

    if (isDeleteBtn) {
      return onDeleteTask(event);
    }
  };

  const listElem = document.querySelector(".list");
  listElem.addEventListener("click", onActionCheck);
};
