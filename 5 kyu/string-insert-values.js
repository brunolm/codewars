// http://www.codewars.com/kata/string-insert-values/solutions/javascript/me

var format = function (str, obj) {
  if (obj instanceof Array)
    return String.format(str, ...obj);
    
  return str.replace(/(\{\{\w+\}\}|\{\w+\})/g, function (b) {
    if (b.substring(0, 2) == "{{") return b;
    let x = obj[b.match(/\w+/)[0]];
    if (!x) return b;
    return x;
  });
};

String.format = function (b, ...a) {
  return b.replace(/(\{\{\d\}\}|\{\d\})/g, function (b) {
    if (b.substring(0, 2) == "{{") return b;
    let x = b.match(/\d/)[0];
    return a[+x]
  });
};