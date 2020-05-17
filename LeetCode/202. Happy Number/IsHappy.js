/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let memo = {}
  while (!memo[n]) {
    memo[n] = true
    n = n
      .toString()
      .split('')
      .reduce((a, c) => a + Math.pow(c, 2), 0)
    if (n === 1) return true
  }
  return false
}

console.log(isHappy(7))
console.log(isHappy(19))
console.log(isHappy(25))
