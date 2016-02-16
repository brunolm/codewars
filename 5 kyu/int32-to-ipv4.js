// http://www.codewars.com/kata/int32-to-ipv4/solutions/javascript/me

const int32ToIp = n => {
  return n.toString(2).pad('0', 32).match(/\d{8}/g).map(c => parseInt(c, 2)).join('.')
};

String.prototype.pad = function (ch, n) {
  return n>this.length ? Array(n-this.length+1).join(ch) + this : this.valueOf();
}