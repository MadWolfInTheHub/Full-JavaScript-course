const countOccurrences = (text = '', str) => {
  if (text === undefined) text = "";
  if (str === "") return null;

  let count = 0;
  let startPoint = 0;

  while (true) {
    let chunk = text.slice(startPoint);

    if (!chunk.includes(str)) {
      break;
    }

    count += 1;
    startPoint += chunk.indexOf(str) + 1;
  }
 
  return count;
};

console.log(countOccurrences("asdf asdf asdfaa", "a"));
console.log(countOccurrences("ascdfacs dfacsdcfaa", "c"));
console.log(countOccurrences("asdfasdfasdfaa", ""));
console.log(countOccurrences("", "z"));

// function should use includes to find stringEl,
// then we need to use indexOf to find it's index,
// and to cut arr till this index,
// at the same time we need to count the itteration using an empty variable
