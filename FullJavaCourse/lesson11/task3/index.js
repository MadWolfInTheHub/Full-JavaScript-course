const splitString = (text, length) => {
  if (typeof text !== "string") return null;
  if (length === undefined) length = 10;

  const res = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, length);
    
    if (chunk.length === 0) {
      break;
    }

    if (chunk.length < length) {
      chunk = chunk.concat('.'.repeat(length - chunk.length));
    }


    res.push(chunk);
    startPosition += length;
  }

  return res;
};


console.log(splitString("abcd efgh", 4));
console.log(splitString("abcd efgh", 4));
console.log(splitString("abcd efgh"));
console.log(splitString([], 4));
