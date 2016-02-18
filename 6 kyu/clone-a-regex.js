// http://www.codewars.com/kata/clone-a-regex

RegExp.clone = function(regex) {
  return regex.clone();
};

RegExp.prototype.clone = function() {
  let flags = '';
  if (this.global) flags += 'g';
  if (this.ignoreCase) flags += 'i';
  if (this.multiline) flags += 'm';
  let r = new RegExp(this.source, flags);
  r.lastIndex = this.lastIndex;
  return r;
};