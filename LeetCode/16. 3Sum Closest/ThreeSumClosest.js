/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  var closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];

      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = nums[i] + nums[j] + nums[k];
      }

      if (sum < target) {
        j++;
        while (nums[j] === nums[j - 1]) j++;
      } else if (sum > target) {
        k--;
        while (nums[k] === nums[k + 1]) k--;
      } else {
        return closest;
      }
    }
  }
  return closest;
};
