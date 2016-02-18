// http://www.codewars.com/kata/a-gift-well-spent

const buy = (x, arr) => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      if (i === j) continue;
      if ((arr[i] + arr[j]) === x) {
        return [i, j];
      }
    }
  }
  return null;
};