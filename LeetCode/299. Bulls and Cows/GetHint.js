/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

var getHint = function (secret, guess) {
  let A = 0,
    B = 0,
    len = guess.length
  for (let i = 0; i < len; i++) {
    if (guess[i] === secret[i]) {
      A++
      secret = secret.substr(0, i) + "X" + secret.substr(i + 1)
      guess = guess.substr(0, i) + "Y" + guess.substr(i + 1)
    }
  }
  for (let i = 0; i < len; i++) {
    const index = secret.indexOf(guess[i])
    if (index > -1) {
      B++
      secret = secret.substr(0, index) + "Z" + secret.substr(index + 1)
    }
  }
  return `${A}A${B}B`
};

var getHint2 = function (secret, guess) {
  let A = 0,
    B = 0,
    nums = new Array(10).fill(0),
    len = secret.length
  for (let i = 0; i < len; i++) {
    if (secret[i] === guess[i]) A++
    else {
      if (nums[+secret[i]]++ < 0) B++
      if (nums[+guess[i]]-- > 0) B++
    }
  }
  return `${A}A${B}B`
}

console.log(getHint("1807", "7810"));
console.log(getHint("11", "10"));
console.log(getHint("1123", "0111"));
console.log(getHint("011", "110"));
console.log(getHint("1122", "2211"));