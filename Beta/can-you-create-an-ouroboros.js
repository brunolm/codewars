// http://www.codewars.com/kata/can-you-create-an-ouroboros

function* ouroboros(a) {
  for (let i = 0; (i = i === a.length ? 0 : i) != NaN; ++i) {
    yield a[i];
  }
}