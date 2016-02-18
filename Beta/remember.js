// http://www.codewars.com/kata/remember

const remember = s => {
  let set = new Set();
  let a = new Set();
  
  for (let c of s) {
    if (set.has(c))
      a.add(c);
    set.add(c);
  }
  
  return Array.from(a);
};