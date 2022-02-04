
const formater = new Intl.DateTimeFormat("en-GB", {
  timeZone: "UTC",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export const getGreenwichTime = (date) => formater.format(date);