const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

function getTasksList() {
  return fetch(baseUrl).then((response) => response.json());
}

const taskList = getTasksList();

function getTaskById(taskId) {
  return taskList.then((data) => data.find((el) => el.id === taskId));
}

export { getTaskById, getTasksList };
