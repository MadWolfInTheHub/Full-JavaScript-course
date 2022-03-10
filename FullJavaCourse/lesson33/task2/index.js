const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

export function getTasksList() {
  return fetch(baseUrl).then((response) => response.json());
}

const taskList = getTasksList(); 

export function getTaskById(taskId) {
  return taskList.then((data) => data.find((el) => el.id === taskId));
}

getTasksList().then(tasksList => {
  console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
});

getTaskById('2').then(taskData => {
  console.log(taskData); // {'id':'2', 'done':true ... }
});