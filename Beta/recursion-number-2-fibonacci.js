// http://www.codewars.com/kata/recursion-number-2-fibonacci/solutions/javascript/me

const fibonacci = n => {
  if (n <= 2) return 1;
  
  return fibonacci(n - 1) + fibonacci(n - 2);
};