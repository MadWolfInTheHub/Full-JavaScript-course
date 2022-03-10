const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

export function getTasksList() {
  return fetch(baseUrl).then((response) => response.json());
}

export function getTaskById(taskId) {
  return getTasksList().then((data) => data.find((el) => el.id === taskId));
}