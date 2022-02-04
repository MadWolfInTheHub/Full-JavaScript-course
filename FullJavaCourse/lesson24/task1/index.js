export const dayOfWeek = (date, days) => {
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "St", 'Su'];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(day).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};
const result = dayOfWeek(new Date(2022, 3, 4), 13);
console.log(result);
