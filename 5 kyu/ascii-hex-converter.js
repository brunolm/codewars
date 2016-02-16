// http://www.codewars.com/kata/ascii-hex-converter/solutions/javascript/me

class Converter {
  static toAscii(hex) {
    return hex.replace(/\w\w/g, m => String.fromCharCode(parseInt(m, 16)));
  }

  static toHex(ascii) {
    return ascii.split('').map(x => x.charCodeAt(0).toString(16)).join('');
  }
}