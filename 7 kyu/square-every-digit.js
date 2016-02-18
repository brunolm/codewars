// http://www.codewars.com/kata/square-every-digit

const squareDigits = (n) => +(n + '').split('').map(x => x * x).join('')

// alternative solution
function squareDigits(num){
  return +num.toString().split('').map(n => Math.pow(n, 2)).join('');
}