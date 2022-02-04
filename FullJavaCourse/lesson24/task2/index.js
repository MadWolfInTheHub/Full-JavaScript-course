export const getGreenwichTime = (date) => formater.format(date);

const formater = new Intl.DateTimeFormat("ru", {
  timeZone: "UTC",
  hour: "2-digit",
  minute: "2-digit",
  hours12: "false",
});

console.log(getGreenwichTime(new Date()));
