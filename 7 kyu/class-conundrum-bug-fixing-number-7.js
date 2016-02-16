// http://www.codewars.com/kata/class-conundrum-bug-fixing-number-7/solutions/javascript/me

class List {
  constructor(type) {
    this.type = type;
    this.items = [];
  }
  add(item) {
    if (typeof item !== this.type)
      return `This item is not of type: ${this.type}`;
    this.items.push(item);
    return this;
  }
  get count() {
    return this.items.length;
  }
}

// alternative solution
class List {
  constructor(type) {
    this.type = type;
    this.items = [];
    this.count = 0;
  }
  
  add(item) {
    if (typeof item !== this.type) {
      return `This item is not of type: ${this.type}`;
    }
    
    this.items.push(item);
    return this;
  }
  
  get count() {
    return this.items.length;
  }
}

// alternative solution
class List {
  constructor(type) {
    this.type = type;
    this.items = [];
  }
  
  add(item) {
    if (typeof item !== this.type) {
      return `This item is not of type: ${this.type}`;
    }

    this.items.push(item);
    return this;
  }
  
  get count() {
    return this.items.length;
  }
}