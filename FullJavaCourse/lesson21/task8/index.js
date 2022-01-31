export const creatButton = (text) => {
  return document
    .querySelector("body")
    .append((document.createElement("button").textContent = text));
};
