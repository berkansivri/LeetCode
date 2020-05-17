/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ans = []
  const iter = (comb, k, start, n) => {
    if (comb.length === k && n === 0) {
      ans.push([...comb])
      return
    }
    for (let i = start; comb.length < k && i <= 9; i++) {
      comb.push(i)
      iter(comb, k, i + 1, n - i)
      comb.pop()
    }
  }
  iter([], k, 1, n)
  return ans
}

console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))
