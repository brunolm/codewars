// http://www.codewars.com/kata/binary-pyramid-101

const BinaryPyramid = (m, n) => {
  let bin = Array.from(Array(n-m+1), (e, i) => m + i)
    .map(e => e.toString(2))
    .reduce((a, b) => add(a, b));
    
  return (+bin).toString(2)
};

function add(a, b) {
  var carry = 0, result = [],
      len = Math.max(a.length, b.length), i = len;
  while (i--) {
    var sum = (+a[i - len + a.length]||0) + (+b[i - len + b.length]||0) + carry;
    carry = parseInt(sum / 10);
    result.unshift(sum % 10);
  }
  if (carry) result.unshift(carry);
  return result.join('');
}