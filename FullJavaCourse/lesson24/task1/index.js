export const dayOfWeek = (date, days) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(day).setDate(day + days);
  console.log(date);
  return weekDays[new Date(dateInFuture).getDay()];
};
const result = dayOfWeek(new Date(2022, 3, 4), 23);
console.log(result);
