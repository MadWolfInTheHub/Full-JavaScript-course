const getTotalPrice = arr => {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    let sum = 0;

    arr.forEach(num => sum += num);
    return  '$' + Math.floor(sum * 100) / 100;
}

  

console.log(getTotalPrice([10, 10, 10])); 
console.log(getTotalPrice([2.1, 0, 1.6])); 
console.log(getTotalPrice([6, 3.65, 5])); 
console.log(getTotalPrice([777.6545654, 3, 1.01, 45, 20]));
console.log(getTotalPrice(777.777, 3, 1, 45.23, 20));