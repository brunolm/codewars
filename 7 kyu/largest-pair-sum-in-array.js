// http://www.codewars.com/kata/largest-pair-sum-in-array/solutions/javascript/me

function largestPairSum(numbers){
    return numbers.sort((a,b) => b - a).slice(0,2).reduce((a,b)  => a + b);
}