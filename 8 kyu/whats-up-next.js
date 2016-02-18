// http://www.codewars.com/kata/whats-up-next

function nextItem(a, item) {
  let found = false;

  for (let i of a) {
    if (i > (a.length || item + 1)) return;
    
    if (found) {
      return i;
    }
    
    if (i === item) {
      found = true;
      
      if (a.next) {
        return a.next().value;
      }
    }
  }
  
  console.log(a.length);
  return undefined;
}