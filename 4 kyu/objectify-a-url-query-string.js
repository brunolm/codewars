// http://www.codewars.com/kata/objectify-a-url-query-string

function convertQueryToMap(query) {
  if (!query) return { };
  var qs = getQueryString(query.split('&'));
  return Object.keys(qs).reduce((a, c) => {
    let o = a;
    let pieces = c.split('.');
    pieces.forEach((p, i) => {
      if (pieces.length - 1 === i) {
        o[p] = qs[c];
      }
      else {
        o[p] = o[p] || { };
      }
      o = o[p];
    });

    return a;
  }, {});
}

// http://stackoverflow.com/a/3855394/340760
function getQueryString(query) {
  var queryValues = { };
  for (let i = 0; i < query.length; ++i) {
      let param = query[i].split('=', 2);
      if (!queryValues[param[0]]) {
        if (param.length == 1) {
            queryValues[param[0]] = "";
        }
        else {
            queryValues[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
        }
      }
  }
  
  return queryValues;
}