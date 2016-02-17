// http://www.codewars.com/kata/fix-my-method/solutions/javascript/me

function myFunction(){
  var myObject = {
    objProperty: "string",
    objMethod  : function(){
      return myObject.objProperty;
    }
  }
  return myObject.objMethod();
}