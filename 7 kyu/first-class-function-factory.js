// http://www.codewars.com/kata/first-class-function-factory

const factory = (x) => (a) => a.map(y => y * x);