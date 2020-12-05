/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins2 = function (n) {
  let k = 1
  while ((k * (k + 1)) / 2 <= n) {
    k++
  }
  return k - 1
}

// loop
var arrangeCoins = function (n) {
  let k = 1
  while (k <= n) {
    n -= k++
  }
  return k - 1
}

// recursive
var arrangeCoins3 = function (n, k = 1) {
  return n >= k ? arrangeCoins(n - k, k + 1) : k - 1
}

console.log(arrangeCoins(1))
console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
