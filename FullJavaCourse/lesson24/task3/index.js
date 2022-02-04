/* export */ const getDiff = (startDate, endDate) => {
  const first = startDate.getTime();
  const second = endDate.getTime();
  console.log(new Date(first));  
  console.log(new Date(second));  
  const result = ((second - first)/(1000*60*60*24));
  first < second  ?  days = Math.floor(result) : days = Math.ceil(result);
  const hours = new Date(result).getHours();
  const minutes = new Date(result).getMinutes();
  const seconds = new Date(result).getSeconds();
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

console.log(getDiff(new Date(), new Date(2022, 1, 4)));
console.log(new Date)