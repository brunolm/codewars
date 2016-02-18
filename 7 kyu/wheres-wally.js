// http://www.codewars.com/kata/wheres-wally

const wheresWally = s => s.replace(/(\S)Wally/g, 'XyllaW').search(/Wally\b/);