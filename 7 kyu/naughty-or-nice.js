// http://www.codewars.com/kata/naughty-or-nice

function getNamesByNice(people, wasNice) {
  return people.reduce(function(prev, current) {
    if (current.wasNice === wasNice) {
      prev.push(current.name);
    }
    return prev;
  }, []);
}
  
function getNiceNames(people){
  return getNamesByNice(people, true);
}

function getNaughtyNames(people){
  return getNamesByNice(people, false);
}