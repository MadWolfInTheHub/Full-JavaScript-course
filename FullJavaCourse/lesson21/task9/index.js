export const finishList = () => {
  const list = document.querySelector(".list");
  const one = document.createElement("li");
  const eight = document.createElement("li");
  one.textContent = "1";
  eight.textContent = "8";
  list.prepend(one);
  list.append(eight)
  
  const spesialNumber = document.querySelector(".special");
  const four = document.createElement("li");
  const six = document.createElement("li");
  four.textContent = "4";
  six.textContent = "6";
  spesialNumber.before(four);
  spesialNumber.after(six);
  return list;
};


