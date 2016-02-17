// http://www.codewars.com/kata/this-is-a-problem/solutions/javascript/me

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}