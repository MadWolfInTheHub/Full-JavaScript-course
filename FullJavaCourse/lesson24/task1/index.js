export const dayOfWeek = (date, days) => {
    const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su']
    const day = new Date(date).getDate();
    const dateInFuture = new Date(day).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDate()];
}

console.log(dayOfWeek(new Date(2022, 2, 3), 15))