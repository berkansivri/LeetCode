/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  let pos = nums.length - 1
  for (let i = pos; i >= 0; i--) {
    if (i + nums[i] >= pos) pos = i
  }
  return pos === 0
}