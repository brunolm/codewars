// http://www.codewars.com/kata/repeatit

const repeatIt = (str, n) => typeof(str) === "string" ? Array(n+1).join(str) : "Not a string";