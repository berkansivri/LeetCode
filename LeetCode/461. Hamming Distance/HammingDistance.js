/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length
}

console.log(hammingDistance(1, 4))
