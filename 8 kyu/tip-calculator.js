// http://www.codewars.com/kata/tip-calculator

function calculateTip(amount, rating) {
  if (!/^(terrible|poor|good|great|excellent)$/i.test(rating))
    return 'Rating not recognised';
    
  let ratings = {
    excellent: 0.2,
    great: 0.15,
    good: 0.1,
    poor: 0.05,
    terrible: 0,
  };
  
  return Math.ceil(amount * ratings[rating.toLowerCase()]);
}