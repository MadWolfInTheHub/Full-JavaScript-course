function sortDesc(array) {
  if (!Array.isArray(array)) return null;

  let itteration = array.length + 1;

  for (let i = array.length; i > 0; i--) {
    for (let j = array.length; j > 0; j--) {
      if (array[j - 1] < array[j]) {
        const temp = array[j - 1];

        array[j - 1] = array[j];
        array[j] = temp;

        itteration--;
      }
    }
    return array;
  }
}
console.log(sortDesc([7, 9, 15, 100]));
console.log(sortDesc([7, 9, 16, 15]));
console.log(sortDesc(7, 9, 15, 50));
console.log(sortDesc([7, 9, 15, 10]));
console.log(sortDesc([156, 943, 572, 1432]));
