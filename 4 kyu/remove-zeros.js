// http://www.codewars.com/kata/remove-zeros/solutions/javascript/me

const removeZeros = (array) => {

  for (let i = array.length - 1; i > 0; --i) {
    if (isZero(array[i - 1]) && !isZero(array[i])) {
      let isStr = array[i - 1].charCodeAt(0) > 0;

      //array[i] = array[i] ^ array[i - 1].charCodeAt(0);
      //array[i - 1] = array[i - 1].charCodeAt(0) ^ array[i];
      //array[i] = array[i] ^ array[i - 1].charCodeAt(0);
      [array[i], array[i-1]] = [array[i-1].charCodeAt(0),array[i]];
      
      if (isStr)
        array[i] = String.fromCharCode(array[i]);
    }
  }
  
  
  if (!all((''+array).substr(idxOf(''+array)).split(''))) {
    return removeZeros(array);
  }
  
  return array;
};

Number.prototype.charCodeAt = function() { return this.valueOf(); };

const idxOf = (a) => {
  for (let i = 0; i < a.length; ++i) {
    if (a[i] === ',' && a[i + 1] === '0' && a[i + 2] === ',') {
      return i + 1;
    }
  }
  return -1;
};

const all = (a) => {
  if (!/0/.test(a)) return true;
  for (let i = 0; i < a.length; ++i) {
    if (!/[,0]/.test(a[i]))
      return false;
  }
  return true;
};

const isZero = (i) => i === 0 || i === '0';