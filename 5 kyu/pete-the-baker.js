// http://www.codewars.com/kata/pete-the-baker

function cakes(recipe, available) {
  let max = 0;
  
  for (let i in recipe) {
    let a = ~~((available[i] || 0) / recipe[i]);
    
    if (!a) {
      return 0;
    }

    max = !max ? a : Math.min(a, max);
  }
  
  return max;
}