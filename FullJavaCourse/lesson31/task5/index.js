export const delay = (time) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("Done"));
    }, time);
  });
  return p;
};

/* delay(1000); */
