// http://www.codewars.com/kata/add-length/solutions/javascript/me

function addLength(str){
  return str.split(' ').reduce((a, w) => {
    a.push(`${w} ${w.length}`);
    return a;
  }, []);
}