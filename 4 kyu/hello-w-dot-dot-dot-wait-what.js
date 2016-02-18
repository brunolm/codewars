// http://www.codewars.com/kata/hello-w-dot-dot-dot-wait-what

var x = function () {
  let ex = !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!![];
  let one = ~~!![];
  let two = !+[]+!+[];
  let three = two + one;
  let four = three + one;
  let five = four + one;
  let six = five + one;
  let seven = five + two;
  let ten = five + five;
  let eleven = four * three - one;
  let twelve = eleven + one;
  
  let falseObjecttrueStr = !!+[]+{}+!![];
  let undefinedStr = []+[][[]];
  let path = this.process.env.PATH;
  let envKeys = Object.keys(this.process.env);
  let selfStr = x + falseObjecttrueStr[twelve];

  let r =
    envKeys[one][one - one] // H
    + falseObjecttrueStr[four] // e
    + falseObjecttrueStr[two] // l
    + falseObjecttrueStr[two] // l
    + falseObjecttrueStr[six] // o
    + falseObjecttrueStr[twelve] // *space*
    + envKeys[five][ten] // W
    + falseObjecttrueStr[six] // o
    + path[three] // r
    + falseObjecttrueStr[two] // l
    + undefinedStr[two] // d
    + selfStr[ten + ten + ten + ten] // !
  ;
  return r;
}

var helloWorld = x;