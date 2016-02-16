// http://www.codewars.com/kata/80-s-kids-number-3-punky-brewsters-socks/solutions/javascript/me

function getSocks(name, socks) {
  if (name === 'Henry') {
    let sock = socks.filter(s => socks.filter(x => x == s).length > 1)[0];
    if (!sock) return [];
    return [sock, sock];
  }
  else if (name === 'Punky') {
    let sock = socks.filter(s => socks.filter(x => x == s).length == 1)[0];
    if (!sock) return [];
    return [sock, socks.filter(s => sock != s)[0]];
  }
}