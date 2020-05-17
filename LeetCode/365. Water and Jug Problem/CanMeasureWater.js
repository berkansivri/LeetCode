/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  if (x + y < z) return false
  if (x === z || y === z) return true

  const GCD = (a, b) => {
    while (b) {
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }

  return z % GCD(x, y) === 0
}

console.log(canMeasureWater(0, 0, 0))
console.log(canMeasureWater(3, 5, 4))
console.log(canMeasureWater(2, 6, 5))
