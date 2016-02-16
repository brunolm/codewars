// http://www.codewars.com/kata/barking-mad/solutions/javascript/me

function Dog (breed) {
  this.breed = breed;
}

Dog.prototype.bark = () => "Woof";

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

// alternative solution
function Dog (breed) {
  this.breed = breed;
}

Dog.prototype.bark = () => 'Woof';

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");


// alternative solution
function Dog(breed) {
  this.breed = breed;
}

Dog.prototype.bark = () => 'Woof';

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

// alternative solution
function Dog (breed) { this.breed = breed }

Dog.prototype.bark = () => "Woof"

var snoopy = new Dog("Beagle")

var scoobydoo = new Dog("Great Dane")


// alternative solution
function Dog (breed) {
  this.breed = breed;
}

Dog.prototype.bark = () => 'Woof';

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
