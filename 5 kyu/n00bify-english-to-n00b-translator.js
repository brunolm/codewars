// http://www.codewars.com/kata/n00bify-english-to-n00b-translator/solutions/javascript/me

function n00bify(text)
{
  var isUpper = /^h/i.test(text);
  var includeLOL = /^w/i.test(text);
  
  text = text
    .replace(/to(o)?/ig, "2")
    .replace(/for(e)?/ig, "4")
    .replace(/oo/ig, "00")
    .replace(/be/ig, "b")
    .replace(/are/ig, "r")
    .replace(/you/ig, "u")
    .replace(/please/ig, "plz")
    .replace(/people/ig, "ppl")
    .replace(/really/ig, "rly")
    .replace(/have/ig, "haz")
    .replace(/know/ig, "no")
    .replace(/s/ig, function(m) { var isUpper = m.toUpperCase() == m; return isUpper ? "Z" : "z" })
    .replace(/[.,']/g, "")
    ;
    
  var countWords = text.split(' ').length;
  var countChars = text.replace(/[?!]/g, "").length;
  
  countWords += includeLOL ? 1 : 0;
  countChars += includeLOL ? 4 : 0;
  
  var includeOMG = countChars >= 32;
  
  countWords += includeOMG ? 1 : 0;
  
  text = text.replace(/[?]/g, new Array(countWords + 1).join("?"));
  
  text = text.replace(/[!]/g, function (m) {
    for (var i = 0; i < countWords - 1; ++i) {
      if ((i & 1) === 0) {
        m += "1";
      }
      else {
        m += "!";
      }
    }
    return m
  });

  if (includeOMG) {
    text = "OMG " + text;
  }
  
  if (includeLOL) {
    text = "LOL " + text;
  }

  text = text.split(' ').map((e, i) => {
    if (((i + 1) & 1) === 0) {
      return e.toUpperCase();
    }
    
    return e;
  }).join(' ');

  return isUpper ? text.toUpperCase() : text;
}