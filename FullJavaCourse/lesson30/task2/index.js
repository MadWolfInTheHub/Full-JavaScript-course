export const addImageV2 = (url) => {
  const p = new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.setAttribute("alt", "User avatar");
    img.src = url;

    const pageElem = document.querySelector(".page");
    pageElem.append(img);

    const onImageLoaded = () => {
      const { width, height } = img;
      resolve({ width, height });
    };

    img.addEventListener("load", onImageLoaded);

    img.addEventListener("error", () => reject(new Error("Image load failed")));
  });
  return p;
};


/* addImageV2("https://server.com/image.png")
  .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
  .catch((error) => console.log(error)); // ==> 'Image load failed' */
