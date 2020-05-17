/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0
  while (n) {
    if (n & (1 == 1)) count++
    n = n >>> 1
  }
  return count
}

console.log(hammingWeight(00000000000000000000000000001011))
console.log(hammingWeight(11111111111111111111111111111101))
