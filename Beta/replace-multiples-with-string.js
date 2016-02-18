// http://www.codewars.com/kata/replace-multiples-with-string

function getNumber(number){
  let mul3 = !(number % 3);
  let mul5 = !(number % 5);
  
  if (mul3 && mul5) return 'BOTH';
  if (mul3) return 'THREE';
  if (mul5) return 'FIVE';
  return number;
};

function getNumberRange(first, last){
  let reverse = last < first;
    [first, last] = [Math.min(first, last), Math.max(first, last)];

    let r = Array.from({length:last-first+1}, (x, i)=> getNumber(i + first));
    if (reverse)
    return r.reverse();
    return r;
};