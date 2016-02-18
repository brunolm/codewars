// http://www.codewars.com/kata/can-you-keep-a-secret

function createSecretHolder(secret) {
  return {
    setSecret: (s) => secret = s,
    getSecret: () => secret
  };
}