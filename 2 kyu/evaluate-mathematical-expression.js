// http://www.codewars.com/kata/evaluate-mathematical-expression/solutions/javascript/me

const calc = (e) => +parse(e);

function parse(s) {
  s = s.replace(/--/, '');

  let start, end, opens;
  while ((start = s.indexOf("(")) !== -1) {
    opens = 0;
    end = 0;
    
    for (let i = start, l = s.lastIndexOf(")"); i <= l; ++i) {
      if (s[i] === "(") { opens++; }
      if (s[i] === ")") { opens--; }
      if (!opens) {
        end = i;
        break;
      }
    }

    let inClosure = s.slice(start, (end + 1));
    return parse(s.slice(0, start) + parse(inClosure.slice(1, -1)) + s.slice(end + 1));
  }

  s = s.replace(/-\s+-/g, '+');

  s = s.replace(/(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)/g, (m, p1, p2) => {
    return ''+(+p1 / +p2);
  });

  s = s.replace(/(-?\d+(?:\.\d+)?)\s*\*\s*(-?\d+(?:\.\d+)?)/g, (m, p1, p2) => {
    return ''+(+p1 * +p2);
  });

  s = s.replace(/(-?\d+(?:\.\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?)/g, (m, p1, p2) => {
    return ''+(+p1 + +p2);
  });

  s = s.replace(/(-?\d+(?:\.\d+)?)\s*\-\s*(-?\d+(?:\.\d+)?)/g, (m, p1, p2) => {
    return ''+(+p1 - +p2);
  });

  return isNaN(+s) ? parse(s) : s;
}


// alternative solution
var calc = function (expression) {
  let tokens = expression.match(/\d+(?:\.\d+)?|[-+*/\(\)]/g).map(x => isNaN(x) ? x : +x);
  
  const math = (op, x, y) => {
    switch (op) {
      case '/': return x / y;
      case '*': return x * y;
      case '+': return x + y;
      case '-': return x - y;
    }
    return x;
  };
  
  const accept = (...args) => args.some(t => t == tokens[0]) && tokens.shift();
  const acceptN = () => !isNaN(tokens[0]) && tokens.shift();

  const unit = () => accept('(') ? (e = start(), accept(')'), e) : acceptN();
  const number = () => accept('-') ? -unit() : unit();
  
  const fac = () => accept('/', '*');
  const sum = () => accept('+', '-');

  const mult = () => {
    let n = number();
    let op;
    while((op = fac())) {
      n = math(op, n, number());
    }
    return n;
  };
  const start = () => {
    let n = mult();
    let op;
    while((op = sum())) {
      n = math(op, n, mult());
    }
    return n;
  };
  
  return start();
};

/** kinda like this
start  :         mult | mult sum mult
mult   :         number | number fac number
number :         -unit | unit
unit   :         (start) | [0-9]+\.?[0-9]+
fac    :         / | *
sum    :         + | -
*/