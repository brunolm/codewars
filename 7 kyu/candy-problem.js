// http://www.codewars.com/kata/candy-problem

function candies(kids) {
  if (!kids || kids.length <= 1) return -1;
  var most = Math.max(...kids);
  return kids.reduce((a, c) => (a+=most - c,a), 0);
}