// http://www.codewars.com/kata/grasshopper-array-mean

var findAverage = function (nums) {
  return nums.reduce((a, c) => {
    return a + c;
  }) / nums.length;
}