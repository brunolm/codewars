// http://www.codewars.com/kata/default-plus-rest-plus-spread/solutions/javascript/me

let defaultExample = (x, y = 7) => x + y;

let restExample = (x, ...y) => x * y.length;

let spreadExample = (...x) => x.reduce((a, b) => a + b, 0);