// http://www.codewars.com/kata/capitals-first/solutions/javascript/me

function capitalsFirst(str){
  let f = []
  let l = [];
  
  str.split(' ').forEach(w => {
    if (/^[A-Z]/.test(w))
      f.push(w);
    else if (/^[a-z]/.test(w))
      l.push(w);
  });
  
  return f.concat(l).join(' ');
}