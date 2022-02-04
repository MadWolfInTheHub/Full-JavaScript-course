export const getDiff = (startDate, endDate) => {
  const first = startDate.getTime();
  const second = endDate.getTime();
  const result = second - first;
  const day = (1000*60*60*24);
  const hour = (1000*60*60);
  const minute = (1000*60);
  const miliseconds = 1000;
  const daysLeft = Math.floor((result) / day);
  const hoursLeft = Math.floor((result % day) / hour);
  const minutesLeft = Math.floor((result % hour) / minute);
  const secondsLeft = Math.floor((result % minute) / miliseconds);
  return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
}

