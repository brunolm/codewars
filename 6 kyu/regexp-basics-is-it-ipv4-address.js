// http://www.codewars.com/kata/regexp-basics-is-it-ipv4-address/solutions/javascript/me

String.prototype.ipv4Address = function() {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(this);
};