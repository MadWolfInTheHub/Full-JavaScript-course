export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My photo");
  imgElem.src = imgSrc;

  const conteinerElem = document.querySelector(".page");
  conteinerElem.append(imgElem);

  const onImageLoad = () => {
    callback(null, imgElem);
  };

  imgElem.addEventListener("load", onImageLoad);
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
/* addImage(
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
  onImageLoaded
); */
/* const srcPic = "./image/WeChatImage_20210112180634.jpg"; */
/* addImage(
  srcPic,
  onImageLoaded
); */
