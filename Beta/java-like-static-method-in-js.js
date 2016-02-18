// http://www.codewars.com/kata/java-like-static-method-in-js

const addStaticMethod = function(clss, name, method) {
  Object.assign(clss, { [name]: method.bind(clss) });
  Object.assign(clss.prototype, { [name]: method.bind(clss) });
};
