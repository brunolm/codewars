// http://www.codewars.com/kata/singleton-pattern

class Singleton {
  constructor() {
    return this.instance;
  }
  
  get instance() {
    if (!Singleton.__instance) {
      Singleton.__instance = Object.create(this);
    }
    return Singleton.__instance;
  }
}


// alternative solution
var Singleton = function() {
  Singleton.instance = Singleton.instance || Object.create(this);
  return Singleton.instance;
};
