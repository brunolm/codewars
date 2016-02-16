// http://www.codewars.com/kata/get-the-middle-character/solutions/javascript/me

getMiddle = s => (m = ~~(s.length/2),s.length & 1) ? s[m] : s.slice(m-1,m+1);