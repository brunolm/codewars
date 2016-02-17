// http://www.codewars.com/kata/hello-happy-codevarrior/solutions/javascript/me

function Warrior(n){
  this._name = n;  
  this.name = function(n){
    if( n ) this._name=n;
    return this._name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}
