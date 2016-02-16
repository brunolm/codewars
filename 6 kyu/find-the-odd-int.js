// http://www.codewars.com/kata/find-the-odd-int/solutions/javascript/me

function findOdd(A) {
  let map = { };
  
  A.forEach(a => {
    map[a] = map[a] ? map[a] + 1 : 1;
  });
  
  return +Object.keys(map).filter(a => (map[a] & 1) !== 0)[0];
}

// alternative solution
function findOdd(A) {
  let n;
  let t = 0;
  for (let i = 0; i < A.length; ++i) {
    n = A[i];
    for (let j = 0; j < A.length; ++j) {
      if (n === A[j]) {
        ++t;
      }
    }
    if ((t % 2) !== 0) {
      return n;
    }
    t = 0;
  }
  
  return null;
}