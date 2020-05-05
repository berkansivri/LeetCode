/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  return ~num & ((1 << num.toString(2).length) - 1)
}

console.log(findComplement(5))
console.log(findComplement(1))
