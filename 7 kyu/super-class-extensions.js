// http://www.codewars.com/kata/super-class-extensions/solutions/javascript/me

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  speak(){
    return super.speak()+ `${this.name} goes meow.`
  }
}

// alternative solution
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  speak() {
    return super.speak() + `${this.name} goes meow.`;
  }
}

// alternative solution
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  speak () {
    return super.speak() + `${this.name} goes meow.`;
  }
}

// alternative solution
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  speak() {
     return super.speak() + `${this.name} goes meow.`;
  }
}

// alternative solution
class Animal { 
  constructor (name) {
    this.name = name;
  }
  
  speak () {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  speak () {
    return super.speak() + `${this.name} goes meow.`;
  }
}

// alternative solution
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  speak() {
    return super.speak() + `${this.name} goes meow.`
  
  }
}