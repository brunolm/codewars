// http://www.codewars.com/kata/reverse-a-number/solutions/javascript/me

function reverseNumber(n) {
  let s = n < 0 ? '-' : '';
  return +(s + Array.from(''+Math.abs(n)).reverse().join(''));
}