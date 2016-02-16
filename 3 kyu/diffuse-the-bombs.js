// http://www.codewars.com/kata/diffuse-the-bombs/solutions/javascript/me

let key = Bomb.key;

// 9 left
Bomb.diffuse(key);

// 8 left
for (let i = 0; i < 5; ++i) {
  Bomb.diffuse(key);
}

// 7 left
Bomb.diffuse(this['BombKey']);

// 6 left
var diffuseTheBomb = function(){ return true; };
Bomb.diffuse( '\u0000' );

// 5 left
//VGhlIGtleSBpcyAiMy4xNDE1OSI=   3.14159
Bomb.diffuse( '3.14159' );

// 4 left
let d = new Date();
d.setFullYear(d.getFullYear() - 4);
Bomb.diffuse( d.getTime() );

// 3 left
let code = {};
Object.defineProperty(code, 'key', { writable: false, value: 43 });
Bomb.diffuse(code);

// 2 left
function o() {
  this.code = 4;
  this.valueOf = function() { return this.code++ + this.code++; };
}
Bomb.diffuse(new o());

// 1 left
Math.code = 0.5;
Math.random = function() { let x = Math.code; Math.code = 1; return x; };
Bomb.diffuse(42);

// FINAL
Array.prototype.valueOf = function() {
    return this.reduce((a,b) => a + b);
};
Bomb.diffuse('eWVz');