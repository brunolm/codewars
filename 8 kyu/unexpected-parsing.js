// http://www.codewars.com/kata/unexpected-parsing/solutions/javascript/me

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  };
}