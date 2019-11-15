/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  var lis = [];
  for (var i = 0; i < nums.length; i++) {
    lis.push(1);
    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i])
        lis[i] = Math.max(lis[i], lis[j] + 1);
    }
  }
  return nums.length ? Math.max.apply(null, lis) : 0;
}

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
console.log(lengthOfLIS([4, 4, 4, 4, 4]));
console.log(lengthOfLIS([3, 2, 1]));
console.log(lengthOfLIS([2, 2]));
console.log(lengthOfLIS([1]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([1, 2, 3]));
console.log(lengthOfLIS([1, 3, 2]));
console.log(lengthOfLIS([]));