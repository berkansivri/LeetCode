/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max = nums[0], sum = 0;
  for (let num of nums) {
    sum += Number(num);
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }
  return max;
};