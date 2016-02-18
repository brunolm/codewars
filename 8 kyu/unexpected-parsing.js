// http://www.codewars.com/kata/unexpected-parsing

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  };
}