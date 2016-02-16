// http://www.codewars.com/kata/count-strings-in-objects/solutions/javascript/me

const strCount = o => {
  let c = 0;

  for (let i in o) {
    let s = o[i];
    if (typeof s === 'string') {
      c++;
    }
    else if (s instanceof Array || s instanceof Object) {
      c += strCount(s);
    }
  }
  return c;
};