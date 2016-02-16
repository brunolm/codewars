// http://www.codewars.com/kata/what-will-be-the-odd-one-out/solutions/javascript/me

const oddOneOut = s => { /* meh boring */
  let set = new Set();
  for (let c of s) {
    if (set.has(c)) {
      set.delete(c);
    }
    else {
      set.add(c);
    }
  }
  return set;
};

const coolSolution = s => {
  let r = s.replace(/(.)(.*?)\1/, '$2');
  while (s.length != r.length) {
    s = r;
    r = s.replace(/(.)(.*?)\1/, '$2');
  }
  return s.split('');
};