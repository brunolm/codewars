// http://www.codewars.com/kata/printer-errors

const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;