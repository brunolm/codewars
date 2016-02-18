// http://www.codewars.com/kata/strip-comments

function solution(input, markers) {
  var re = new RegExp('\\s*[' + markers.join('') + ']');

  return input.split('\n').reduce(function(val, current) {
    val.push(current.split(re)[0]);
    return val;
  }, []).join('\n');
}