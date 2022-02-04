export const getDiff = (startDate, endDate) => {
  const first = startDate.getTime();
  const second = endDate.getTime();
  const result = second - first;
  const days = Math.floor((result)/(1000*60*60*24));
  const hours = new Date(result).getUTCHours();
  const minutes = new Date(result).getUTCMinutes();
  const seconds = new Date(result).getUTCSeconds();
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const startDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
const endDate = new Date(Date.UTC(2019, 1, 22, 17, 52, 18));

console.log(getDiff(endDate, startDate));