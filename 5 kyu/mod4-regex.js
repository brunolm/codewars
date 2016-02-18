// http://www.codewars.com/kata/mod4-regex

/**
 * Examine the last two digits.
 * If the tens digit is even, the ones digit must be 0, 4, or 8.
 * If the tens digit is odd, the ones digit must be 2 or 6.
 */
const Mod4 = /\[[+-]?(\d*[02468][048]|\d*[13579][26]|[048])\]/;