// http://www.codewars.com/kata/anonymous-returns

name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
           return () => {return this.name;}
    }
};
