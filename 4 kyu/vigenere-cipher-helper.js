// http://www.codewars.com/kata/vigenere-cipher-helper/solutions/javascript/me

function VigenèreCipher(key, abc) {
  this.encode = function (s) {
    return s.split('').map((c, i) => {
      if (abc.indexOf(c) === -1) return c;
      let pc = key[i%key.length];
      return abc[(abc.indexOf(pc) + abc.indexOf(c)) % abc.length];
    }).join('');
  };
  this.decode = function (s) {
    return s.split('').map((c, i) => {
      if (abc.indexOf(c) === -1) return c;
      let pc = key[i%key.length];
      let pci = abc.indexOf(pc);
      let eci = abc.indexOf(c);
      let r = eci - pci;
      if (r < 0)
        r = abc.length + r;
      return abc[r];
    }).join('');
  };
}