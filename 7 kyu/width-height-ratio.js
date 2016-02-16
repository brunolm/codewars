// http://www.codewars.com/kata/width-height-ratio/solutions/javascript/me

const calculateRatio = (w, h) => {
  for (let i = Math.min(w, h); i >= 1; --i) {
    if ((w % i) === 0 && (h % i) === 0) {
      return `${w/i}:${h/i}`;
    }
  }
  
  throw new Error('Nothing');
};