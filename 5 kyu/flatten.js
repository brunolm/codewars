// http://www.codewars.com/kata/flatten/solutions/javascript/me

function flatten(...l) {
  return l.reduce((a, b) => {
    if (b instanceof Array) {
      a.push(...flatten(...b));
    }
    else
      a.push(b);
    return a;
  }, []);
}