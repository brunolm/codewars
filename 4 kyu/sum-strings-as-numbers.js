// http://www.codewars.com/kata/sum-strings-as-numbers

function sumStrings(a,b) {
  let left = a.split('');
  let right = b.split('');

  let bigger = left.length > right.length ? left : right;
  let other = bigger == left ? right : left;

  let result = [];
  let carry = 0;
  for (let i = other.length - 1; i >= 0; --i) {
    let b = +other[i] + +bigger[bigger.length - other.length + i] + carry;
    carry = b >= 10 ? 1 : 0;
    result.splice(0, 0, b % 10);
  }

  for (let i = bigger.length - 1 - other.length; i >= 0; --i) {
    let b = +bigger[i] + carry;
    result.splice(0, 0, b % 10);
    carry = b >= 10 ? 1 : 0;
  }

  if (carry > 0)
    result.splice(0, 0, carry.toString());
  
  return result.join('').replace(/^0/, "");
}