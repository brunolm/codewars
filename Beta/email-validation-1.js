// http://www.codewars.com/kata/email-validation-1

function validate(email) {
  return /^[a-z]/i.test(email)
    && /\w\.\w/.test(email)
    && /^\w+@/.test(email)
    && /@(.*?)(\w|-)/.test(email)
    && !/[^a-z0-9_.@-]/i.test(email);
}