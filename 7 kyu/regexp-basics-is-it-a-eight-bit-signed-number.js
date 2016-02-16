// http://www.codewars.com/kata/regexp-basics-is-it-a-eight-bit-signed-number/solutions/javascript/me

String.prototype.signedEightBitNumber = function () {
  return /^(0|([1-9][0-9]?|[1][012][0-7]|1[01]\d)|-([1-9][0-9]?|[1][012][0-8]|1[01]\d))$/.test(this);
}