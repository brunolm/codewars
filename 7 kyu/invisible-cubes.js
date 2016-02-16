// http://www.codewars.com/kata/invisible-cubes/solutions/javascript/me

const notVisibleCubes = (n) => {
  if (n < 3) return 0;
  
  let x = (n - 2) * (n - 2);

  return Math.sqrt(x) * x;
};