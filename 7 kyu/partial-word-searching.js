// http://www.codewars.com/kata/partial-word-searching

const wordSearch = (q, a) => {
  let r = a.filter(x => new RegExp(q, 'i').test(x));
  return r.length ? r : ['Empty'];
}