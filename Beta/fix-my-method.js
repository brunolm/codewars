// http://www.codewars.com/kata/fix-my-method

function myFunction(){
  var myObject = {
    objProperty: "string",
    objMethod  : function(){
      return myObject.objProperty;
    }
  }
  return myObject.objMethod();
}