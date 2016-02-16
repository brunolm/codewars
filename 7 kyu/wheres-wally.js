// http://www.codewars.com/kata/wheres-wally/solutions/javascript/me

const wheresWally = s => s.replace(/(\S)Wally/g, 'XyllaW').search(/Wally\b/);