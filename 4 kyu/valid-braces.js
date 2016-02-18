// http://www.codewars.com/kata/valid-braces

function validBraces(braces){
  let closingMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  
  let counters = {
    '(': 0, ')': 0,
    '[': 0, ']': 0,
    '{': 0, '}': 0,
  };
  
  let pieces = braces.split('');
  let lastOpenMap = [];
  for (let i = 0; i < pieces.length; ++i) {
    let isClosing = /\)|\]|\}/.test(pieces[i]);
    
    if (isClosing && lastOpenMap.length
      && closingMap[lastOpenMap.pop()] !== pieces[i]) {
      return false;
    }
    
    counters[pieces[i]]++;
    
    if (/\{|\[|\(/.test(pieces[i])) {
      lastOpenMap.push(pieces[i]);
    }
  }
    
  return counters['('] - counters[')'] === 0
    && counters['['] - counters[']'] === 0
    && counters['{'] - counters['}'] === 0;
}
