// http://www.codewars.com/kata/take-a-ten-minute-walk/solutions/javascript/me

const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;

  let coord = {
    n: 0, s: 0,
    e: 0, w: 0,
  };
  
  walk.forEach(w => coord[w]++);
  
  return (coord['n'] - coord['s']) === 0
    && (coord['e'] - coord['w']) === 0;
}