const setButtorn = (buttonText) => {
    return document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
}

setButtorn('Hello world');