// http://www.codewars.com/kata/two-to-one

const longest = (s1, s2) => {
  let r = [];
  
  (s1 + s2).split('').forEach(c => !~r.indexOf(c) && (r.push(c)));
  
  return r.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
};