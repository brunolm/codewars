// http://www.codewars.com/kata/i-spy

function spyOn (func) {
  return new spyOnClass(func);
}

function spyOnClass(func) {
  this.totalCalls = 0;
  this.returns = [];
  this.called = [];
  
  var self = this;
  this.spy = function() {
    return self.spy2.apply(this, arguments);
  };
  
  this.spy2 = function () {
    var result = self.func.apply(self, arguments);
    self.totalCalls++;
    arguments = Array.prototype.slice.call(arguments, 0);
    arguments.forEach(a => self.called.push(a));
    self.returns.push(result);
    return result;
  }

  this.spy.callCount = () => this.totalCalls;
  this.spy.returned = (v) => !!~this.returns.indexOf(v);
  this.spy.wasCalledWith = (p) => !!~this.called.indexOf(p);

  this.func = func;
  
  return this.spy;
}