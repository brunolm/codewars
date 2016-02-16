// http://www.codewars.com/kata/last-digit-of-a-large-number/solutions/javascript/me

var lastDigit = function(str1, str2){  
  let t = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 4, 8, 6],
    [3, 9, 7, 1],
    [4, 6, 4, 6],
    [5, 5, 5, 5],
    [6, 6, 6, 6],
    [7, 9, 3, 1],
    [8, 4, 2, 6],
    [9, 1, 9, 1],
  ];
  
  let n1 = +str1.slice(-1);
  let n2 = +str2.slice(-2);
  
  if (+str2 !== 0) {
    if (n1 === 0) return 0;
    if (n1 === 1) return 1;
    if (n1 === 5) return 5;
    if (n1 === 6) return 6;

    let lastD = +str1.slice(-1);
    let m = n2 % 4;
    m = (m - 1 < 0) ? 3 : m - 1;
    return t[lastD][m];
  }
  
  return 1;
}