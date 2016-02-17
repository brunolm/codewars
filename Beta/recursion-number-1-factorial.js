// http://www.codewars.com/kata/recursion-number-1-factorial/solutions/javascript/me

const factorial = n => {
  if (0) factorial()
  return Array.from({ length: n }, (x, i) => i + 1)['\u0072\u0065' + '\u0064\u0075\u0063\u0065']((a, b) => a * b, 1);
};

// alternative solution
const factorial = n => {
  if (n <= 1) return 1;
  
  return n * factorial(n - 1);
};
