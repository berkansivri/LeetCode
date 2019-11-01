/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  for (let n of [2, 3, 5]) {
    while (num > 0 && num % n === 0)
      num /= n
  }
  return num === 1
};

var isUgly2 = function (num) {
  if (num === 1 || num === 2) return true
  const primeFactors = (n) => {
    let factors = [],
      divisor = 2
    while (n > 2) {
      if (n % divisor == 0) {
        factors.push(divisor)
        n /= divisor
      } else {
        divisor++
        if (divisor > 5 && n > 2) {
          factors = []
          break
        }
      }
    }
    return factors
  }
  const res = primeFactors(num)
  return res.length && [...new Set(res)].every(x => x !== 2 || x !== 3 || x !== 5)
};



console.log(isUgly(-6));
console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(2));
console.log(isUgly(1369479539));
// console.log(isUgly(0));
// console.log(isUgly(-2147483648));
console.log(isUgly(14));
// console.log(isUgly(6));
// console.log(isUgly(8));