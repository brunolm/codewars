// http://www.codewars.com/kata/permutations/solutions/javascript/me

function permutations(string) {
  if (string.constructor !== Array) {
    return permutations(string.split(''));
  }
  if (!string.length) {
    return [[]];
  }
  
  var result = [];
  
  for (let i = 0; i < string.length; ++i) {
    let clone = string.slice(0);

    let head = clone.splice(i, 1);
    let tail = permutations(clone);
    
    tail.forEach(t => {
      let r = head.concat(t).join('');
      if (!~result.indexOf(r)) {
        result.push(r);
      }
    });
  }
  
  return result;
}
