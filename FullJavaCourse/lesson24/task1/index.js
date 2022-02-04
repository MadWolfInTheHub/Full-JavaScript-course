export const dayOfWeek = (date, days) => {
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "St", "Su"];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};