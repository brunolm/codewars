// http://www.codewars.com/kata/sevenate9/solutions/javascript/me

function sevenAte9(str){

  return str.split('').filter((a, i) => str[i + 1] == '7' && str[i - 1] == '7' && a == '9' ? '' : a).join('');
}