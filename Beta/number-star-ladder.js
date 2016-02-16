// http://www.codewars.com/kata/number-star-ladder/solutions/javascript/me

const pattern = n => {
  let out = '1\n';
  for (let i = 2; i <= n; ++i) {
    out += '1';
    let m = i;
    while (--m) out += '*';
    out += i + '\n';
  }
  
  return out.slice(0, -1);
};