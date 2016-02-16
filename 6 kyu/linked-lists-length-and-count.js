// http://www.codewars.com/kata/linked-lists-length-and-count/solutions/javascript/me

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if (!head) return 0;
  let i = 1;
  while ((head = head.next)) ++i
  return i
}

function count(head, data) {
  if (!head) return 0;
  let i = 0;
  do {
    if (head.data === data) ++i;
  } while((head = head.next));
  return i
}