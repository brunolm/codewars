// http://www.codewars.com/kata/regex-validate-pin-code

const validatePIN = (pin) => /^\d{4}(\d{2})?$/.test(pin);