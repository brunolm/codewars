// http://www.codewars.com/kata/remove-all-the-marked-elements-of-a-list

Array.prototype.remove_ = (a, v) => a.filter(x => v.indexOf(x) == -1);