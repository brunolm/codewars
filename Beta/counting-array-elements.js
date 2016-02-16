// http://www.codewars.com/kata/counting-array-elements/solutions/javascript/me

const count = a => {
  let set = {};
  for (let c of a) {
    set[c] = a.filter(x => x ==c).length;
  }
  
  return set
};