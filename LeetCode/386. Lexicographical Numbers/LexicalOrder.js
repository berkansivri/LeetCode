/**
 * @param {number} n
 * @return {number[]}
 */

// 100ms
var lexicalOrder = function (n) {
  const result = []

  function pushFromTo(start, end) {
    while (start <= end && start <= n) {
      result.push(start)
      pushFromTo(start * 10, start * 10 + 9)
      start++
    }
  }

  pushFromTo(1, 9)
  return result
}

//160ms
var lexicalOrder2 = function (n) {
  return Array.from({ length: n }, (v, k) => (k + 1).toString()).sort()
}

//488ms
var lexicalOrder3 = function (n) {
  const arr = [...Array(n + 1).keys()].slice(1)
  return arr.sort((a, b) => a.toString().localeCompare(b.toString()))
}

console.log(lexicalOrder2(13))
// [1,10,11,12,13,2,3,4,5,6,7,8,9]
