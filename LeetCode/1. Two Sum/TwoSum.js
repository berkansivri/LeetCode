/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    var temp = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && temp + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
