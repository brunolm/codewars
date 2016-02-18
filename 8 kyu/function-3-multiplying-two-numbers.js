// http://www.codewars.com/kata/function-3-multiplying-two-numbers

function multiply(...args) {
  return args.reduce((x, y) => x * y);
}