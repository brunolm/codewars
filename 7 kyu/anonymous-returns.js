// http://www.codewars.com/kata/anonymous-returns/solutions/javascript/me

name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
           return () => {return this.name;}
    }
};


// alternative solution
name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return () => {
            return this.name;
        };
    }
};
