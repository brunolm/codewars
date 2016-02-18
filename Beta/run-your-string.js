// http://www.codewars.com/kata/run-your-string

const runYourString = (arg, obj) => (this[obj.param] = arg, eval(obj.func.replace('return ', '')));