// http://www.codewars.com/kata/base64-encoding

String.base64Map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

String.prototype.toBase64 = function() {
  return this.split('').map(c => {
    return c.charCodeAt(0).toString(2).pad('0', 8);
  }).join('')
    .replace(/.{1,6}/g, b => {
      return String.base64Map[parseInt(b, 2)];
    })
};

String.prototype.fromBase64 = function() {
  return this.split('').map(c => {
    return String.base64Map.indexOf(c).toString(2).pad('0', 6);
  }).join('')
    .replace(/.{1,8}/g, b => {
      return String.fromCharCode(parseInt(b, 2));
    });
};

String.prototype.pad = function(c, n) {
  if (this.length >= n) {
    return this;
  }
  
  let len = n - this.length;
  let s = this;
  while (len--) {
    s = c + s;
  }
  return s;
};