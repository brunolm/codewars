// http://www.codewars.com/kata/coordinates-validator/solutions/javascript/me

const isValidCoordinates = (c) => /^-?([0-8]\d|90|\d)(\.\d+)?,\s-?(180|1[0-7]\d|\d{2}|\d)(\.\d+)?$/.test(c);