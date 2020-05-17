/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let c
  while (b) {
    c = a & b
    a ^= b
    b = c << 1
  }
  return a
}

console.log(getSum(1, 2)) //01 10
console.log(getSum(-2, 3))
