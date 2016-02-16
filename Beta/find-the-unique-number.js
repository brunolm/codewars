// http://www.codewars.com/kata/find-the-unique-number/solutions/javascript/me

// const findUnique = a => a.reduce((x, y, i) => a.filter(z => z == y).length == 1 ? y : x, null);

/*
const findUnique = a => {
  let u = new Set();
  let s = new Set();
  
  a.forEach(i => {
    if (s.has(i))
      u.delete(i);
    else {
      s.add(i);
      u.add(i);
    }
  });
  
  return u.values().next().value;
}

function findUnique(a) {
  var s = new Set();
  for (var i = 0, len = a.length; i < len; ++i) {
    if (!s.has(a[i]) && a.indexOf(a[i], i + 1) == -1) return a[i];
    s.add(a[i]);
  }
}

function findUnique(a) {
  var s = {}
  for (var i = 0, len = a.length; i < len; ++i) {
    if (!s[a[i]] && a.indexOf(a[i], i + 1) == -1) return a[i];
    s[a[i]]=1;
  }
}
*/

function findUnique(a) {
  var s = {}
  for (var i = 0, len = a.length; i < len; ++i) {
    s[a[i]] = (s[a[i]] || 0) + 1;
  }
  return +Object.keys(s).filter(k => s[k] == 1)[0]
}