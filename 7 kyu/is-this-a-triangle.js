// http://www.codewars.com/kata/is-this-a-triangle/solutions/javascript/me

const isTriangle = (a, b, c) => {
  return a < b + c && a > b - c
    && b < a + c && b > a - c
    && c < a + b && c > a - b;
};