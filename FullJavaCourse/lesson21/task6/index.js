/* export */ const setButton = (buttonText) => {
    return document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
}

setButton('xui');
