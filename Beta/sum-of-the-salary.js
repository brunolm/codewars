// http://www.codewars.com/kata/sum-of-the-salary/solutions/javascript/me

var person = [];

function addPerson(a,f,l,s) {
  if (typeof f != 'string' || typeof l != 'string' || typeof s != 'number')
    return;
  a.push({firstName:f,lastName:l,salary:s});
}

function getAllSalary(a) {
  return a.reduce((x, y) => x + y.salary, 0);
}