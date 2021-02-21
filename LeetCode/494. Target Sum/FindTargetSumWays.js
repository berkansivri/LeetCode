/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  return dp(new Map(), nums, S, 0, 0)
}

const dp = (memo, nums, target, index, sum) => {
  const key = `${index}-${sum}`
  if (memo.has(key)) return memo.get(key)

  if (index === nums.length) {
    if (sum === target) return 1
    else return 0
  }

  const positive = dp(memo, nums, target, index + 1, sum + nums[index])
  const negative = dp(memo, nums, target, index + 1, sum + -nums[index])
  memo.set(key, positive + negative)
  return positive + negative
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
