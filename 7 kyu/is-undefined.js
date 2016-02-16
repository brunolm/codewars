// http://www.codewars.com/kata/is-undefined/solutions/javascript/me

const isUndefined = v => {
  return v === undefined && typeof undefined === 'undefined';
};