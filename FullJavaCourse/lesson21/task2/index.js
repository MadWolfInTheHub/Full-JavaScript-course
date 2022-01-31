export const getTitleElement = () => {
    const TitleElement = document.querySelector('.title'); 
    console.dir(TitleElement);
    return TitleElement;
}

getTitleElement();

export const getInputElement = () => {
    const inputElem = document.querySelector ('input[type=text]');
    console.log(inputElem);
    return inputElem;
}

getInputElement();