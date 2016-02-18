// http://www.codewars.com/kata/caesar-cipher-helper

class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
    
    this.alp = Array.from(Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1), (x, i) => String.fromCharCode(i + 65)).join('');
  }
  
  encode(s) {
    s = s.toUpperCase().split('');
    
    return s.map(c => {
      if (!~this.alp.indexOf(c)) return c;
      let sh = this.alp.indexOf(c) + this.shift;
      return this.alp[sh % this.alp.length];
    }).join('');
  }
  
  decode(s) {
    s = s.toUpperCase().split('');
    
    return s.map(c => {
      if (!~this.alp.indexOf(c)) return c;
      let sh = this.alp.indexOf(c) - this.shift;
      if (sh < 0) sh = this.alp.length + sh;
      return this.alp[sh];
    }).join('');
  }
}