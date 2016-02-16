// http://www.codewars.com/kata/partial-word-searching/solutions/javascript/me

const wordSearch = (q, a) => {
  let r = a.filter(x => new RegExp(q, 'i').test(x));
  return r.length ? r : ['Empty'];
}