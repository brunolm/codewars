// http://www.codewars.com/kata/the-elegance-of-the-code/solutions/javascript/me

const factorial = num => {
  return num <= 1 ? 1 : Array.from({ length: num }, (x, i) => i + 1).reduce((x, y) => x * y);
}

// alternative solution
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
