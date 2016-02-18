// http://www.codewars.com/kata/are-you-playing-banjo

function areYouPlayingBanjo(name) {
  if (/^r/i.test(name)) {
    return `${name} plays banjo`;
  }
  
  return `${name} does not play banjo`;
}