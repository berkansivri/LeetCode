/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  nums[-1] = Number.NEGATIVE_INFINITY, nums[nums.length] = Number.NEGATIVE_INFINITY
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1])
      return i
  }
};

console.log(findPeakElement([1]));
console.log(findPeakElement([1, 2, 3, 1]));