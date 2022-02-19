export const addImg = (imgSrc) => {
  const p = new Promise((resolve, rejected) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My Photo");
    imgElem.src = imgSrc;

    const containerElem = document.querySelector(".page");
    containerElem.append(imgElem);
    const onImgChange = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener("load", onImgChange);
    imgElem.addEventListener("error", () =>
      rejected(new Error("Image load is failed..."))
    );
  });
  return p;
};

const imgSrc =
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";
const resultPromise = addImg(imgSrc);
resultPromise.then((data) => console.log(data));
resultPromise.catch((error) => console.log(error));
