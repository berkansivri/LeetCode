/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let x = 1
  while (x <= Number.MAX_SAFE_INTEGER) {
    let val = x * x
    if (num === val) return true
    else if (val > num) return false
    else x++
  }
  return false
}

console.log(isPerfectSquare(16)) // true
console.log(isPerfectSquare(14)) // false
