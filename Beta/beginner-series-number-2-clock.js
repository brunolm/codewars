// http://www.codewars.com/kata/beginner-series-number-2-clock

const time = [ 60 * 60 * 1000, 60 * 1000, 1000 ];

const past = (...a) => a.reduce((t, n, i) => t + time[i] * n, 0);