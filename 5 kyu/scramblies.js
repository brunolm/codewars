// http://www.codewars.com/kata/scramblies/solutions/javascript/me

const scramble = (s, t) => {
  if (t.length > s.length) return false;
  let r = {};
  
  for (let i = 0, x, len = t.length; i < len; ++i) {
    if ((x = s.indexOf(t[i], r[t[i]]||0)) != -1) {
      r[t[i]]=x+1;
      //s = s.substr(0, x) + s.substr(x+1);
      //console.log(s);
    }
    else {
      return false;
    }
  }
  
  return true;
}