// http://www.codewars.com/kata/name-your-space

function namespace(root, path, value) {
  let obj = root;
  let pieces = path.split('.');
  let len = pieces.length;
  let returnValue;
  
  pieces.forEach((k, i) => {
    let hasValue = obj[k];
    obj[k] = obj[k] || {};
    
    if (len - 1 === i) {
      if (typeof value !== 'undefined') {
        obj[k] = value;
      }
      else {
        returnValue = hasValue ? obj[k] : undefined;
      }
    }
    
    obj = obj[k];
  });
  
  return typeof value === 'undefined' ? returnValue : root;
}
