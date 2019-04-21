/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  var triplets = [];
  for (i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) triplets.push([nums[i], nums[j], nums[k]]);

      if (sum >= 0) {
        k--;
        while (nums[k] === nums[k + 1]) k--;
      }

      if (sum <= 0) {
        j++;
        while (nums[j] === nums[j - 1]) j++;
      }
    }
  }
  return triplets;
};
