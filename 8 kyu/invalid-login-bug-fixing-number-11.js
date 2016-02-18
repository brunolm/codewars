// http://www.codewars.com/kata/invalid-login-bug-fixing-number-11

function validate(username, password) {
  if (/\|{2}|\/{2}/.test(password)) {
    return 'Wrong username or password!';
  }
  
  var database = new Database();
  return database.login(username, password);
}