// http://www.codewars.com/kata/counting-array-elements

const count = a => {
  let set = {};
  for (let c of a) {
    set[c] = a.filter(x => x ==c).length;
  }
  
  return set
};