export const createButton = (text) => {
  return document
    .querySelector("body")
    .append((document.createElement("button").textContent = text));
};
