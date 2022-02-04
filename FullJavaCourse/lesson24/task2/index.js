
const formater = new Intl.DateTimeFormat("en", {
  timeZone: "UTC",
  hour: "2-digit",
  minute: "2-digit",
  hours12: "false",
});

export const getGreenwichTime = (date) => formater.format(date);

console.log(getGreenwichTime(new Date()));
