// http://www.codewars.com/kata/grasshopper-grade-book

function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  if (score >= 0) return 'F';
  
  return 'You lied!';
}