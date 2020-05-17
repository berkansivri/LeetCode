/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let nums = new Array(n).fill(true, 2)
  for (let i = 2; i * i < n; i++) {
    if (!nums[i]) continue
    for (let j = i * i; j < n; j += i) {
      nums[j] = false
    }
  }
  return nums.filter(x => x).length
}

console.log(countPrimes(10))
console.log(countPrimes(15))
console.log(countPrimes(20))
