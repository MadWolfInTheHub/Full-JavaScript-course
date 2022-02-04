/* export */ const getDiff = (startDate, endDate) => {
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

const startDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
const endDate = new Date(Date.UTC(2019, 1, 22, 17, 52, 18));

console.log(getDiff(endDate, startDate));