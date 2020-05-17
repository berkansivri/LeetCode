/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  let i = 1
  while (i <= Number.MAX_SAFE_INTEGER) {
    if (i === num) return true
    else if (i > num) return false
    i *= 4
  }
  return false
}

console.log(isPowerOfFour(2))
console.log(isPowerOfFour(-2147483648))
