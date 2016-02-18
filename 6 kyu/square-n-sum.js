// http://www.codewars.com/kata/square-n-sum

function squareSum(numbers){
  return numbers.reduce((a, c) => {
    return a + c * c;
  }, 0);
}