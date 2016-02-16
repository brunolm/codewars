// http://www.codewars.com/kata/first-class-function-factory/solutions/javascript/me

const factory = (x) => (a) => a.map(y => y * x);