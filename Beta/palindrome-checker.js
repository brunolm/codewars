// http://www.codewars.com/kata/palindrome-checker

function isPalindrome(str) {
  return str ? str.split('').reverse().join('').replace(/[^a-z0-9]/gi, '').toLowerCase() == str.replace(/[^a-z0-9]/gi, '').toLowerCase() : false;
}