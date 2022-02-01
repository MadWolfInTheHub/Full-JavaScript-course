const input = document.querySelector('.task-status');

const check = (event) => {
    console.log(event.target.checked);
} 

input.addEventListener('change', check);