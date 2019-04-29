/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var mid = Math.floor((left + right) / 2);
  while (target !== nums[mid] && left < right) {
    if (target > nums[mid]) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    } else {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    }
  }
  if (target !== nums[mid]) return [-1, -1];
  var left = mid,
    right = mid;
  while (target === nums[left]) left--;

  while (target === nums[right]) right++;

  return [++left, --right];
};
