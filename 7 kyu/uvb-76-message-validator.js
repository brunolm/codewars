// http://www.codewars.com/kata/uvb-76-message-validator/solutions/javascript/me

const validate = (message) => /^MDZHB \d{2} \d{3} [A-Z]+ \d{2} \d{2} \d{2} \d{2}$/.test(message)

// alternative solution
const validate = (message) => /^MDZHB \d{2} \d{3} [A-Z]+ \d{2} \d{2} \d{2} \d{2}$/.test(message);