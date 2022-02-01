const input = document.querySelector('.text-input');

const inputText = (event) => {
    console.log(event.target.value);
};

input.addEventListener('change', inputText)