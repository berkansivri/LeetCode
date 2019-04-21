/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  var result = [];
  if (nums.length === 4 && nums.reduce((a, c) => a + c) === target) {
    return [nums];
  }

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      var k = j + 1;
      var l = nums.length - 1;

      while (k < l) {
        var sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
        }
        if (sum <= target) {
          k++;
          while (nums[k] === nums[k - 1]) k++;
        }
        if (sum >= target) {
          l--;
          while (nums[l] === nums[l + 1]) l--;
        }
      }
    }
  }
  return result;
};
