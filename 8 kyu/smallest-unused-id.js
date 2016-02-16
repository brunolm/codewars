// http://www.codewars.com/kata/smallest-unused-id/solutions/javascript/me

const nextId = (ids) => {
  let id = ids.filter((id, i) => ids.indexOf(i) === -1);
  if (id.length) {
    id = ids.indexOf(id[0]);
  }
  else {
    id = ids.slice(-1)[0] + 1;
  }
  return id
}