/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  return helper(nums, 0, nums.length - 1) >= 0
}

const helper = (nums, s, e) => {
  return s === e ? nums[e] : Math.max(nums[s] - helper(nums, s + 1, e), nums[e] - helper(nums, s, e - 1))
}

console.log(PredictTheWinner([1, 5, 2]))
console.log(PredictTheWinner([1, 5, 233, 7]))
