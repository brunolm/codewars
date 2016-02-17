// http://www.codewars.com/kata/a-no-more-bugs-trilogy-episode-3-make-a-player/solutions/javascript/me

class Player {
  constructor(name, position, age, dribbling, pass, shoot) {
    Object.assign(this, { name, position, age, dribbling, pass, shoot })
  }
}