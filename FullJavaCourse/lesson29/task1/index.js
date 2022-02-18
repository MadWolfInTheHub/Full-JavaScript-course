export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My photo");
  imgElem.src = imgSrc;

  const conteinerElem = document.querySelector(".page");
  conteinerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener("load", onImageLoaded);
  imgElem.addEventListener("error", () => callback("Image load is failed"));
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector(".image-size");

  sizeElem.textContent = `${width} x ${height}`;
};

/* const srcPic = "./image/WeChatImage_20210112180634.jpg"; */
/* addImage(
  srcPic,
  onImageLoaded
); */
