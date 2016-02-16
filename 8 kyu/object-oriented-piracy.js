// http://www.codewars.com/kata/object-oriented-piracy/solutions/javascript/me

function Ship(d,c){this.draft=d;this.crew=c;this.isWorthIt=()=>d-c*1.5>=20}