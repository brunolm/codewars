// http://www.codewars.com/kata/sum-of-intervals

function sumIntervals(intervals){
  for (let i = 0; i < intervals.length; ++i) {
    let e = intervals[i];

    for (let fi = 0; fi < intervals.length; ++fi) {
      let fe = intervals[fi];
      
      let isNext = fi > i
        && fe[0] >= e[0] && fe[0] <= e[1];
      
      if (isNext) {
        let removed = intervals.splice(fi, 1)[0];
        e[0] = Math.min(e[0], removed[0]);
        e[1] = Math.max(e[1], removed[1]);
        fi--;
      }
    }
  }
  
  let sumInterval = intervals.reduce((a, b) => {
    return a + b[1] - b[0];
  }, 0);
  
  return sumInterval;
}