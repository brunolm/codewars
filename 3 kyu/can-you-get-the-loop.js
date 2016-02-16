// http://www.codewars.com/kata/can-you-get-the-loop/solutions/javascript/me

function loop_size(node){
  let set = [node]

  while (!~set.indexOf(node.next)) {
    set.push(node);
    node = node.next;
  }

  return (set.length > 2 ? (set.length + 1) : set.length)
    - set.indexOf(node.next)
}