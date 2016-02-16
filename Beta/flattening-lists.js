// http://www.codewars.com/kata/flattening-lists/solutions/javascript/me

function flatten(l){
  return l.reduce((a, b) => {
    if (b instanceof Array) {
      a.push(...b);
    }
    else
      a.push(b);
    return a;
  }, []);
}

function flattenx(l){
  return l.reduce((a, b) => {
    if (b instanceof Array) {
      a.push(...flattenx(b));
    }
    else
      a.push(b);
    return a;
  }, []);
}