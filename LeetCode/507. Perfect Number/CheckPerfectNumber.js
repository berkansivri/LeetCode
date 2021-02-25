/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) return false

  let sum = 1
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) sum += i + num / i
  }

  return sum === num
}

var checkPerfectNumber2 = function (num) {
  let total = 0

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      total += i
    }
  }

  return total === num
}

console.log(checkPerfectNumber(1))
console.log(checkPerfectNumber(28))
console.log(checkPerfectNumber(6))
console.log(checkPerfectNumber(496))
console.log(checkPerfectNumber(8128))
console.log(checkPerfectNumber(2))
