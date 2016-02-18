// http://www.codewars.com/kata/credit-card-mask

const maskify = s => s.replace(/^(.+)(\w{4})$/, (m, $1, $2) => Array($1.length + 1).join('#') + $2);