// http://www.codewars.com/kata/sum-of-two-lowest-integers/solutions/javascript/me

function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a, b) => a > b).slice(0, 2).reduce((sum, n) => sum + n, 0);
}