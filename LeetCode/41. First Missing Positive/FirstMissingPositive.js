/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = nums.sort((a, b) => a - b).filter((val, index) => val > 0 && val !== nums[index - 1])
  for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
    if (nums[i - 1] != i) return i
  }
}
