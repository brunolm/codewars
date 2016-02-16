// http://www.codewars.com/kata/strip-url-params/solutions/javascript/me

// http://stackoverflow.com/a/3855394/340760
function getQueryString(url) {

  if (!url) {
    return { };
  }
    
  let index = url.indexOf("?");
  if (!~index) {
    return {};
  }
    
  url = url.substring(index + 1).split('&');
    
  var queryValues = { };
  for (let i = 0; i < url.length; ++i) {
      let param = url[i].split('=', 2);
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

function stripUrlParams(url, paramsToStrip) {
  let qs = getQueryString(url);
  let i = url.indexOf("?");
  
  if (!!~i) {

    paramsToStrip && paramsToStrip.forEach(p => { delete qs[p]; });

    let query = Object.keys(qs)
      .reduce((a, current) => { a.push(current + "=" + qs[current]); return a; }, [])
      .join("&");

    url = url.substring(0, i) + "?" + query;
  }

  return url;
}