/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  return Math.max(robFunc(nums, 0, nums.length - 1), robFunc(nums, 1, nums.length))
}

var robFunc = function (nums, i, len) {
  let max = 0,
    preMax = 0,
    temp
  for (; i < len; i++) {
    temp = max
    max = Math.max(preMax + nums[i], max)
    preMax = temp
  }
  return max
}

console.log(rob([2]))
console.log(rob([1, 2, 1, 0]))
console.log(rob([]))
console.log(rob([2, 1]))
console.log(rob([2, 3, 2]))
console.log(rob([2, 1, 1, 2]))
console.log(rob([1, 2]))
console.log(rob([1, 2, 3, 1]))
