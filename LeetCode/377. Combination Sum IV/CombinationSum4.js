/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i < dp.length; i++) {
    for (const num of nums) {
      if (i >= num) dp[i] += dp[i - num]
    }
  }
  return dp[target]
}

console.log(combinationSum4([1, 2, 3], 4))

//The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
