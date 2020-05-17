/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const cache = [1],
    len = primes.length
  const factors = new Array(len).fill(0),
    memo = {}
  while (!cache[n - 1]) {
    let min = Number.MAX_SAFE_INTEGER,
      index
    for (let j = 0; j < len; j++) {
      if (min < primes[j]) break
      let num = cache[factors[j]] * primes[j]
      if (num < min) {
        if (memo[num]) factors[j]++
        else {
          min = num
          index = j
        }
      }
    }
    cache.push(min)
    memo[min] = true
    factors[index]++
  }
  return Math.max(cache[n - 1], cache[n - 2] || 0)
}

console.log(nthSuperUglyNumber(45, [2, 3, 7, 13, 17, 23, 31, 41, 43, 47]))
console.log(nthSuperUglyNumber(15, [3, 5, 7, 11, 19, 23, 29, 41, 43, 47]))
console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))
