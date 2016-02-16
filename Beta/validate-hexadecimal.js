// http://www.codewars.com/kata/validate-hexadecimal/solutions/javascript/me

const isHex = s => /^([a-f0-9]{3}|[a-f0-9]{6})$/i.test(s);