// http://www.codewars.com/kata/barking-mad

function Dog (breed) {
  this.breed = breed;
}

Dog.prototype.bark = () => "Woof";

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");