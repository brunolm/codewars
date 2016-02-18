// http://www.codewars.com/kata/iterator-basics

let counter = {
  [Symbol.iterator]() {
    let i = 1;
    return { next() { return { done: false, value: i++ }; } };
  }
}
