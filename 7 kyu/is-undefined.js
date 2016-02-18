// http://www.codewars.com/kata/is-undefined

const isUndefined = v => {
  return v === undefined && typeof undefined === 'undefined';
};