// http://www.codewars.com/kata/simpler-interactive-interpreter

function Interpreter() {
  this.vars = {};
  this.functions = {};
}

Interpreter.prototype.tokenize = function (program) {
  if (program === "")
      return [];

  var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
  return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
};

Interpreter.prototype.input = function (expr) {
  var tokens = this.tokenize(expr);
  // console.log(tokens);
  if (!tokens.length)
    return '';

  const math = (op, x, y) => {
    switch (op) {
      case '/': return x / y;
      case '%': return x % y;
      case '*': return x * y;
      case '+': return x + y;
      case '-': return x - y;
    }
    return x;
  };
  
  const accept = (...args) => args.some(t => t == tokens[0]) && tokens.shift();
  const acceptR = (rg) => rg.test(tokens[0]) && tokens.shift();
  const acceptVar = () => acceptR(/[a-z]+/i);
  const acceptN = () => {
    let v = acceptVar();
    if (v) {
      return +this.vars[v];
    }
    
    return !isNaN(+tokens[0]) && +tokens.shift();
  };

  const unit = () => accept('(') ? (e = add(), accept(')'), e) : acceptN();
  const number = () => accept('-') ? -unit() : unit();
  
  const fac = () => accept('/', '*', '%');
  const sum = () => accept('+', '-');

  const mult = () => {
    let n = number();
    let op;
    while((op = fac())) {
      n = math(op, n, number());
    }
    return n;
  };
  const add = () => {
    let n = mult();
    let op;
    while((op = sum())) {
      n = math(op, n, mult());
    }
    return n;
  };
  
  const rvar = () => {
    let v = acceptVar();
    if (accept('=')) {
      this.vars[v] = add();
    }
    else if (!(v in this.vars)) {
      throw new Error(`not defined`);
    }
    return this.vars[v];
  };
  
  const start = () => {
    if (peek('=')) {
      return rvar();
    }
    
    return add() || rvar();
  };
  
  const peek = (t) => {
    let a = tokens.shift();
    let b = tokens.shift();
    
    let r = t == b;
    
    tokens.unshift(b);
    tokens.unshift(a);
    
    return r;
  };
  
  return start();
};