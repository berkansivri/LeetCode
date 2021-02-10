/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function (nums) {
  if (nums.length < 4) return false
  const sum = nums.reduce((a, c) => a + c)
  if (sum % 4 !== 0) return false

  nums.sort((a, b) => b - a)

  return dfs(nums, Array(4).fill(0), 0, sum / 4)
}

const dfs = (nums, sums, index, target) => {
  if (index === nums.length) {
    return true
  }

  for (let i = 0; i < sums.length; i++) {
    if (sums[i] + nums[index] <= target) {
      sums[i] += nums[index]
      if (dfs(nums, sums, index + 1, target)) return true
      sums[i] -= nums[index]
    }
  }

  return false
}

console.log(makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3])) // 8
console.log(makesquare([1, 1, 2, 2, 2])) // 8
console.log(makesquare([3, 3, 3, 3, 4])) // 16
console.log(makesquare([3, 3, 2, 2, 4, 1, 1])) // 16
