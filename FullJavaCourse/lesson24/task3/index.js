export const getDiff = (startDate, endDate) => {
  const first = startDate.getTime();
  const second = endDate.getTime();
  const result = second - first;
  const days = Math.floor((result)/(1000*60*60*24));
  const hours = new Date(result).getHours() - 6;
  const minutes = new Date(result).getMinutes();
  const seconds = new Date(result).getSeconds();
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

console.log(getDiff(new Date(), new Date(2022, 1, 6)));