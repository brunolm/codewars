// http://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number

function divisibleBy(numbers, divisor){
  return numbers.reduce((a, b) => {
    if ((b % divisor) === 0) {
      a.push(b);
    }
    return a;
  }, []);
}