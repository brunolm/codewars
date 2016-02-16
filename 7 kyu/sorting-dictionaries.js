// http://www.codewars.com/kata/sorting-dictionaries/solutions/javascript/me

const sortDict = (d) => {
  let r = [];

  for (let i in d) {
    r.push([isNaN(+i) ? i : +i, d[i]]);
  }
  
  return r.sort((a, b) => {
    return b[1] - a[1];
  });
};