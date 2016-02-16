// http://www.codewars.com/kata/last/solutions/javascript/me

const last = (...l) => (l = [].concat(...l)).length === 1 ? l[0].pop() : l.pop();
String.prototype.pop = function(){return this.slice(-1);};
Number.prototype.pop = Number.prototype.valueOf;

// alternative solution
const last = (...list) => {
  let l = list[list.length - 1];
  
  if (l.slice) {
    return l.slice(-1)[0];
  }
  
  return l;
};