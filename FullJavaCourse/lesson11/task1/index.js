const splitText = (text, length) => {
  if (typeof text !== 'string') return null;
  if (typeof length !== 'number' || length === 0) length = 10;

  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, length);

    if (chunk.length === 0) {
      break;
    }

    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += length;
    
  }
  return strArr.join('\n');
};

console.log(splitText("abcd efgh", 4));
console.log(splitText("abcd efgh"));
console.log(splitText([], 4));