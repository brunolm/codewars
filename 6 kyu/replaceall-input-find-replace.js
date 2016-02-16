// http://www.codewars.com/kata/replaceall-input-find-replace/solutions/javascript/me

const replaceAll = (input, find, replace) => {
  return input.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

const escapeRegExp = s => s.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1");