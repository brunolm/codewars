// http://www.codewars.com/kata/can-you-keep-a-secret/solutions/javascript/me

function createSecretHolder(secret) {
  return {
    setSecret: (s) => secret = s,
    getSecret: () => secret
  };
}