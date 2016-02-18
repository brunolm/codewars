// http://www.codewars.com/kata/anagram-or-not

function isAnagram(test, original){
  test = test.toLowerCase().replace(/[^a-z0-9]/g, '');
  original = original.toLowerCase().replace(/[^a-z0-9]/g, '');
  let len = test.length === original.length;
console.log(test, original);
  for (let c of original) {
    test = test.replace(c, '');
  }
  
  console.log(test, original);
  return !test && len;
}