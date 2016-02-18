// http://www.codewars.com/kata/difference-between-biggest-2-numbers

const diffBig2 = arr => {
  let b1 = Math.max(...arr);
  arr.splice(arr.indexOf(b1), 1);
  let b2 = Math.max(...arr);
  return b1 - b2;
}