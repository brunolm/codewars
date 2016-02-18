// http://www.codewars.com/kata/help-the-fruit-guy

const removeRotten = b => (b||[]).map(f => f.replace(/^rotten(.)/, (m, l) => l.toLowerCase()));