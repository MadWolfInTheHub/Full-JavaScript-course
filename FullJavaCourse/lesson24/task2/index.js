export const getGreenwichTime = (date) => {
  const formater = new Intl.DateTimeFormat("ru", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hours12: "false",
  });
   
  return formater.format(date);
};

console.log(getGreenwichTime(new Date()));