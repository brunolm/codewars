// http://www.codewars.com/kata/valid-phone-number

const validPhoneNumber = p => /^\(\d{3}\) \d{3}-\d{4}$/.test(p);