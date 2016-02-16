// http://www.codewars.com/kata/iterator-basics/solutions/javascript/me

let counter = {
  [Symbol.iterator]() {
    let i = 1;
    return { next() { return { done: false, value: i++ }; } };
  }
}


// alternative solution
let counter = {
  [Symbol.iterator]() {
   let i = 1;
   return {
     next() {
       return {done: false, value: i++};
     }
   }
  }
}


// alternative solution
let counter = {
  [Symbol.iterator]() {
    let i = 1
    return {
      next() {
        return { done: false, value: i++ }
      }
    }
  }
}


// alternative solution
let counter = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        return { done: false, value: i++ };
      }
    };
  }
}


// alternative solution
let counter = {
  //Complete this Iterator
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        return { done: false, value: i++ }
      }
    }
  }
}
