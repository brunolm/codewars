// http://www.codewars.com/kata/broken-greetings/solutions/javascript/me

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}