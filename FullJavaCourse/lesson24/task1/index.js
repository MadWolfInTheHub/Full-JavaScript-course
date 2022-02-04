export const dayOfWeek = (date, days) => {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(day).setDate(day + days);
  console.log(date);
  return weekDays[new Date(dateInFuture).getDay()];
};
const result = dayOfWeek(new Date(2022, 3, 4), 15);
console.log(result);
