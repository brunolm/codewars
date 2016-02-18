// http://www.codewars.com/kata/rot13-1

function rot13(m){
  return m.split('').map(x => {
    let s = '';
    let n = 0;
    
    if (/[A-Z]/.test(x)) {
      n = x.charCodeAt(0) + 13 - 65;
      n = n % ('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
      s += String.fromCharCode(n+65);
    }
    else if (/[a-z]/.test(x)) {
      n = x.charCodeAt(0) + 13 - 97;
      n = n % ('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
      s += String.fromCharCode(n+97);
    }
    else {
      s += x;
    }
    
    return s;
  }).join('');
}