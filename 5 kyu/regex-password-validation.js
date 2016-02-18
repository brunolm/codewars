// http://www.codewars.com/kata/regex-password-validation

const validate = p => /^([A-Z]|\d){6,}$/i.test(p)
  && /[a-z]/.test(p)
  && /[A-Z]/.test(p)
  && /\d/.test(p);