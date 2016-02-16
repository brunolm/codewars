// http://www.codewars.com/kata/lazy-evaluation/solutions/javascript/me

function Lazy() {
  this.callStack = [];
  
  this.add = (fn, ...args) => {
    this.callStack.push([fn, args]);
    return this;
  };
  
  this.invoke = (o) => {
    this.callStack.forEach(f => {
      let p = f[1].concat(o);
      o = f[0].apply(o, p);
    });
    
    return o;
  };
}