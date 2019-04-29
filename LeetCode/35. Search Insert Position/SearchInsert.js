/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var left = 0,
    right = nums.length - 1;
  var mid = Math.floor((left + right) / 2);

  while (nums[mid] !== target && left < right) {
    if (target < nums[mid]) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    } else {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
  }

  if (nums[mid] === target) return mid;
  else {
    if (target < nums[mid]) return mid;
    else return mid + 1;
  }
};
