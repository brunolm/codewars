// http://www.codewars.com/kata/find-an-employees-role-in-the-company

const findEmployeesRole = (name) => {
  const emp = employees.filter(o => (o.firstName + ' ' + o.lastName) === name)[0];
  
  return emp ? emp.role : 'Does not work here!';
};