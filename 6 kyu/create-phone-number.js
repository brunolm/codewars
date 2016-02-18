// http://www.codewars.com/kata/create-phone-number

const createPhoneNumber = (n) => `(${n.slice(0, 3).join('')}) ${n.slice(3, 6).join('')}-${n.slice(6).join('')}`;