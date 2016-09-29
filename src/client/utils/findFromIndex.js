const findFromIndex = (props, startIndex, array) => {
  let i = startIndex + 1;
  while (array[i][props[0]] !== props[1] && i <= array.length) {
    i++;
  }
  return array[i];
};

export default findFromIndex;
