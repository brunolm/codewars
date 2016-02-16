// http://www.codewars.com/kata/valid-parentheses/solutions/javascript/me

function validParentheses(parens){
  return parens.split('').reduce((open, b) => {
    if (b === '(') {
      open++;
    }
    else if (b === ')') {
      open--;
    }
    if (open < 0) {
      return 'x';
    }
    
    return open;
  }, 0) === 0;
}