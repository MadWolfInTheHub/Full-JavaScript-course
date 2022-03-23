const btn = document.querySelector('.single-use-btn');

const singleUse = () => {
    console.log('clicked');
    btn.removeEventListener('click', singleUse);
}
btn.addEventListener('click', singleUse);
