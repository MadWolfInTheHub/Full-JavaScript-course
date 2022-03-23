export const createButton = (text) => {
  const body = document.querySelector("body");
  const button = document.createElement("button");
  button.textContent = text;
  return body.append(button);
};
