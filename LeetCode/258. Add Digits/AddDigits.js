/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((total, current) => total + +current, 0)
  }
  return num
}

console.log(addDigits(38))
