// http://www.codewars.com/kata/dependency-injection

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  let funcStr = func.toString().replace(/^[/][*]defaultparams[*][/][^\n]+\n/gm, '');
  let fp = funcStr.split('\n');
  
  let pnames = (fp[0].match(/\((.*?)\)/)[0]).replace(/\(|\)/g, '');
  pnames = pnames.split(', ');

  let r = pnames.reduce((a, b) => {
    if (typeof this.dependency[b] !== 'undefined')
      a.push(this.dependency[b]);
    return a;
  }, [func]);
  
  return Function.bind.apply(func, r);
}