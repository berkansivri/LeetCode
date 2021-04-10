/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  const dfs = function (n) {
    if (n == -1) return -1
    const next = nums[n]
    nums[n] = -1
    return 1 + dfs(next)
  }

  let res = 0
  for (let n of nums) res = Math.max(res, dfs(n))
  return res
}

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2])) // 4
console.log(arrayNesting([0, 2, 1])) // 2
