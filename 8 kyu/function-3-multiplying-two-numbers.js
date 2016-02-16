// http://www.codewars.com/kata/function-3-multiplying-two-numbers/solutions/javascript/me

function multiply(...args) {
  return args.reduce((x, y) => x * y);
}