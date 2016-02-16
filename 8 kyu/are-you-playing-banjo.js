// http://www.codewars.com/kata/are-you-playing-banjo/solutions/javascript/me

function areYouPlayingBanjo(name) {
  if (/^r/i.test(name)) {
    return `${name} plays banjo`;
  }
  
  return `${name} does not play banjo`;
}