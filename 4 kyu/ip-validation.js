// http://www.codewars.com/kata/ip-validation

function isValidIP(str) {
  return str.split(' ').reduce((b, current) => {
    return b && validate(current);
  }, true);
}

function validate(ip) {
  let pieces = ip.split('.');
  return pieces.length === 4
    && pieces.reduce((b, current) => {
      let num = parseInt(current, 10);
      return b
        && current.length === num.toString().length
        && num >= 0 && num <= 255;
    }, true);
}