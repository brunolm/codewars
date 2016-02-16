// http://www.codewars.com/kata/split-in-parts/solutions/javascript/me

var splitInParts = function(s, partLength) {
  return s.split(new RegExp(`(.{1,${partLength}})`)).filter(p => p).join(' ').trim();
}