// http://www.codewars.com/kata/find-the-smallest-integer-in-the-array/solutions/javascript/me

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((x, y) => x < y ? x : y, +Infinity);
  }
}