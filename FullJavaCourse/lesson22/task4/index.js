const button = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');


const search = () => {
    console.log(input.value);
}

button.addEventListener('click', search)