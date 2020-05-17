/**
 * @param {number} n
 * @return {number}
 */

// time limit exceeded
var findNthDigit = function (n) {
  let i = 0,
    c = 0
  while (n > c) {
    c += (++i).toString().length
  }
  return i.toString().split('').reverse()[c - n]
}

console.log(findNthDigit(1000))
console.log(findNthDigit(3))
console.log(findNthDigit(11))
