// http://www.codewars.com/kata/ipv4-to-int32

function ipToInt32(ip){
  return parseInt(ip.split('.').reduce((a, c) => {
    a.push(String('00000000' + (+c).toString(2)).slice(-8));
    return a;
  }, []).join(''), 2);
}