// http://www.codewars.com/kata/valid-string

const validWord = (d, w) => new RegExp(`^(${d.join('|')})+$`).test(w);

// alternative solution
const validWord = (d, s) => {
  d.sort((a,b) => a.length - b.length).forEach(w => {
    s = s.replace(new RegExp(w, 'g'), '*')
  });
  return /^\*+$/.test(s);
};
