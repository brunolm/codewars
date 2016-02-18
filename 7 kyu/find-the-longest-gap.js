// http://www.codewars.com/kata/find-the-longest-gap

const gap = n => Math.max(...(n.toString(2).match(/0+(?:1)/g)||[{length:1}]).map(x => x.length - 1));