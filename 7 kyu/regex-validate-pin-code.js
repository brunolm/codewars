// http://www.codewars.com/kata/regex-validate-pin-code/solutions/javascript/me

const validatePIN = (pin) => /^\d{4}(\d{2})?$/.test(pin);