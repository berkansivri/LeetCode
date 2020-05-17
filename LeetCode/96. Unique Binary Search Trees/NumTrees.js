/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let arr = new Array(n + 1).fill(0)
  arr[0] = arr[1] = 1

  const iter = n => {
    if (!arr[n])
      for (let i = 1; i <= n; i++) {
        arr[n] += iter(i - 1) * iter(n - i)
      }
    return arr[n]
  }

  iter(n)
  return arr[n]
}

console.log(numTrees(5))
console.log(numTrees(8))
