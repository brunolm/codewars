// http://www.codewars.com/kata/email-address-obfuscator/solutions/javascript/me

obfuscate = function(email) {
  return email.replace(/[@.]/g, (m) => {
    if (m === '@')
      return ' [at] ';
      
    return ' [dot] ';
  });
}