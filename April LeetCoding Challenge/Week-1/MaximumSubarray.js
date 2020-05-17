/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0],
    sum = 0
  for (let n of nums) {
    sum += n
    max = Math.max(max, sum)
    if (sum < 0) sum = 0
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
