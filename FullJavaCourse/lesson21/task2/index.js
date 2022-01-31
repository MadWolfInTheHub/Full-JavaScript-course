export const getTitleElement = () => {
    const TitleElement = document.querySelector('.title'); 
    console.dir(TitleElement);
    return TitleElement;
}

getTitleElement();

export const getInputElement = () => {
    const inputElem = document.querySelector('type', 'text');
    return console.dir(inputElem);
}

getInputElement();