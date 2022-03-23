const textInput = document.querySelector('.text-input');
const textInConsole = () => {
    console.log(textInput.value)
}

textInput.addEventListener('change', textInConsole);