// http://www.codewars.com/kata/convert-pascalcase-string-into-snake-case/solutions/javascript/me

function toUnderscore(str) {
  str += '';
  return str.substring(0, 1).toLowerCase() +
    str.substring(1).replace(/[A-Z]/g, (m) => {
      return "_" + m.toLowerCase();
    });
}