// http://www.codewars.com/kata/return-substring-instance-count

const solution = (t, s) => (t.match(new RegExp(s, 'g'))||[]).length;