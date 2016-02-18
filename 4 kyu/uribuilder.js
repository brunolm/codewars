// http://www.codewars.com/kata/uribuilder

var UriBuilder = function(url) {
  this.baseUrl = url.split('?')[0];
  this.params = getQueryString(url);
  
  this.build = function() {
    return this.baseUrl
      + '?'
      + Object.keys(this.params).reduce((a, b) => {
        a.push(b + '=' + encodeURIComponent(this.params[b]));
        return a;
      }, []).join('&');
  };
  
  return this;
};

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