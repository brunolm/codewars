// http://www.codewars.com/kata/greeting-my-friends/solutions/javascript/me

function greetingForAllFriends(friends){
  if (!friends || !friends.length) return null;
  
  return friends.map(f => `Hello, ${f}!`);
}