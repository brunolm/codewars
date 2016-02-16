// http://www.codewars.com/kata/palindrome-checker/solutions/javascript/me

function isPalindrome(str) {
  return str ? str.split('').reverse().join('').replace(/[^a-z0-9]/gi, '').toLowerCase() == str.replace(/[^a-z0-9]/gi, '').toLowerCase() : false;
}