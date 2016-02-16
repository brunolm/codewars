// http://www.codewars.com/kata/list-to-array/solutions/javascript/me

function listToArray(list) {
  let r = [];
  while (list) {
    r.push(list.value);
    list = list.next;
  }
  return r;
}