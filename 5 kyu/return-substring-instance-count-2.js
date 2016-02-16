// http://www.codewars.com/kata/return-substring-instance-count-2/solutions/javascript/me

var searchSubstr = (t, s, o = true) => o ? yes(t, s) : no(t, s);

const no = (t, s) => (t.match(new RegExp(s, 'g'))||[]).length;
const yes = (t, s) => {
  if (!s) return 0;
  
  var r = new RegExp(`${s}`, 'g');
  let c = 0;
  let pushBack = true;

  while (r.exec(t)) {
    if (pushBack)
      r.lastIndex -= s.length - 1;
      
    pushBack = !pushBack;
    c++;
  }
  
  return c;
};