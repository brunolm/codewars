// http://www.codewars.com/kata/ninja-vs-samurai-attack-plus-block/solutions/javascript/me

Position = {
  high: 'h',
  low: 'l'
}

Warrior = function(name){
  this.name = name;  
  this.health = 100;

  this.attack = function(enemy, position){
    if (enemy.block != position){
      var damage = position == Position.high ? 10 : 5;
      // if enemy is not blocking at all then give more damage
      if (!enemy.block){
        damage += 5;
      }
      setHealth.call(enemy, enemy.health - damage);   
    }
  }
}

// private functions
function setHealth(value){
  this.health = Math.max(0, value);
  if (this.health == 0){
    this.deceased = true;
    this.zombie = false;
  }
  else if(this.deceased){
    this.zombie = true;
  }
}