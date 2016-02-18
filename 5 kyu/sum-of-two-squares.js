// http://www.codewars.com/kata/sum-of-two-squares

function allSquaredPairs(num) {
  //console.log(num);
  var max = ~~Math.sqrt(num);
  var max2 = Math.min(max / 2 + 3120, max);
  var r = [];
  
  for (var i = 0; i <= max2; ++i) {
    for (var j = max - i; j <= max; ++j) {
      /*if (i > j) {
        j = i - 1;
        continue;
      }*/
      if ((i*i + j*j) == num) {
      if (j < i) return r;
        r.push([i, j]);
      }
    }
  }

  return r;
}