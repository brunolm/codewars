// http://www.codewars.com/kata/find-the-middle-element

var gimme = (args) => {
  const max = Math.max(...args);
  const min = Math.min(...args);

  return args.map((a, i) => a != min && a != max ? i : -1).filter(a => a >= 0)[0];
};