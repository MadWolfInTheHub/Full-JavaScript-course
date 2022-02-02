const elem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const eventListElem = document.querySelector(".events-list");

const logTarget = (text, color) => {
  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGrayDiv = logTarget.bind(null, "DIV", "grey");
const logGrayP = logTarget.bind(null, "P", "grey");
const logGraySpan = logTarget.bind(null, "SPAN", "grey");

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

elem.addEventListener("click", logGrayDiv, true);
elem.addEventListener("click", logGreenDiv);

pElem.addEventListener("click", logGrayP, true);
pElem.addEventListener("click", logGreenP);

spanElem.addEventListener("click", logGraySpan, true);
spanElem.addEventListener("click", logGreenSpan);

const clear = document.querySelector(".clear-btn");
const clearEventList = (event) => {
  eventListElem.innerHTML = "";
};
clear.addEventListener("click", clearEventList);

const attachHandlers = document.querySelector(".attach-handlers-btn");
const activate = () => {
  elem.addEventListener("click", logGrayDiv, true);
elem.addEventListener("click", logGreenDiv);

pElem.addEventListener("click", logGrayP, true);
pElem.addEventListener("click", logGreenP);

spanElem.addEventListener("click", logGraySpan, true);
spanElem.addEventListener("click", logGreenSpan);
};
attachHandlers.addEventListener("click", activate);

const removeHandlers = document.querySelector(".remove-handlers-btn");
const disable = () => {
  elem.removeEventListener('click', logGrayDiv, true);
  elem.removeEventListener("click", logGreenDiv);
  pElem.removeEventListener("click", logGrayP, true);
  pElem.removeEventListener("click", logGreenP);
  spanElem.removeEventListener("click", logGraySpan, true);
  spanElem.removeEventListener("click", logGreenSpan);
};
removeHandlers.addEventListener("click", disable);
