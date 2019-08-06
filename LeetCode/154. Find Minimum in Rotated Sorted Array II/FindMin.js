/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0, right = nums.length - 1
  while (left < right) {
    var mid = Math.trunc(left + (right - left) / 2)
    if (nums[mid] > nums[right])
      left = mid + 1
    else if (nums[mid] < nums[right])
      right = mid
    else
      right--
  }
  return nums[left]
};

console.log(findMin([1]));
console.log(findMin([1, 2, 3, 4, 5]));
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));