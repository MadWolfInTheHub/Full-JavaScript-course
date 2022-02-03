/* export */ const dayOfWeek = (date, days) => {
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "St"];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(day).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};

console.log(dayOfWeek(new Date(2022, 3, 4), 12));
