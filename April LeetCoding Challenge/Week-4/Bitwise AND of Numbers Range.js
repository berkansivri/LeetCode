/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  return m < n ? rangeBitwiseAnd(m, n & (n - 1)) : n
}

console.log(rangeBitwiseAnd(5, 7))
console.log(rangeBitwiseAnd(0, 1))
