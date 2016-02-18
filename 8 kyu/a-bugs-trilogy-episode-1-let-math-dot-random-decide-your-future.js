// http://www.codewars.com/kata/a-bugs-trilogy-episode-1-let-math-dot-random-decide-your-future

function yourFutureCareer() {
  var career = Math.random();
  
  if (career <= 0.32) {
    return 'FrontEnd Developer';
  } else if (career <= 0.65) {
    return 'BackEnd Developer';
  } else {
    return 'Full-Stack Developer';
  }
}
