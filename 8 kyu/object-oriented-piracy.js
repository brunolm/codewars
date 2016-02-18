// http://www.codewars.com/kata/object-oriented-piracy

function Ship(d,c){this.draft=d;this.crew=c;this.isWorthIt=()=>d-c*1.5>=20}