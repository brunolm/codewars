// http://www.codewars.com/kata/object-search-and-replace/solutions/javascript/me

// Trolling OP 1.0
function solution (data, replace) {
  if (!data)
    return data;
    
  if (arguments[2] === true) {
    return data;
  }

  var r = JSON.stringify(data).replace(/(\:[\[,]?)("dynamic")/g, (m, m1, m2) => m1 + '"' + replace + '"');
  var s = JSON.parse(r)

  Object.keys(data).forEach(k => {
    data[k] = s[k];
  });

  return solution(data, replace, true);
}