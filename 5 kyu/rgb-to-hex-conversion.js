// http://www.codewars.com/kata/rgb-to-hex-conversion/solutions/javascript/me

function rgb(r, g, b) {
  return (
    pad(parseColorValue(r).toString(16))
    + pad(parseColorValue(g).toString(16))
    + pad(parseColorValue(b).toString(16))
  ).toUpperCase();
}

function pad(s) {
  return String('0' + s).slice(-2);
}

function parseColorValue(v) {
  return v < 0 
    ? 0 
    : v > 255 
      ? 255
      : v;
}