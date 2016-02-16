// http://www.codewars.com/kata/is-valid-identifier/solutions/javascript/me

const isValid = (id) => /^[A-Z_$]([A-Z]|[0-9]|[_\$])*$/i.test(id);