// http://www.codewars.com/kata/return-substring-instance-count/solutions/javascript/me

const solution = (t, s) => (t.match(new RegExp(s, 'g'))||[]).length;